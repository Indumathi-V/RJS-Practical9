function StudentCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Reg No:</b> {props.regno}</p>
          <p><b>Department:</b> {props.department}</p>
          <p><b>Marks:</b> {props.marks}</p>
        </div>
      </div>
    </div>
  );
}

// Create the React Root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render three StudentCard components.
root.render(
  <div className="container mt-4">
    <div className="row">

      <StudentCard
        image="sana.jpg"
        name="SANA"
        regno="001"
        department="BCA"
        marks="92"
      />

      <StudentCard
        image="rocky.jpg"
        name="ROCKY"
        regno="002"
        department="B.Sc CS"
        marks="88"
      />

      <StudentCard
        image="images (2).jpg"
        name="ROSY"
        regno="003"
        department="B.Com"
        marks="95"
      />

    </div>
  </div>
);
