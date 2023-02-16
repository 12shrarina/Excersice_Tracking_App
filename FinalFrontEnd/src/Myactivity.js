import React from "react";
import { useNavigate } from "react-router-dom";

function Myactivity(props) {
  const navigate = useNavigate();
  console.log("data", props.Data);
  const del = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/del/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((data1) => {
      props.api();

      data1.json();
      console.log("data deleted");
    });
  };

  return (
    <div className="container col-12" id="div">
      <h1 id="my"> MY Activity</h1>
      <div className="row justify-content-center">
        {props.Data.map((d) => (
          <div
            id="maincard"
            className="card mt-4 ml-4"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{d.Activity}</h5>
              <p className="card-username">{d.Name}</p>
              <p className="card-description">{d.Decription}</p>
              <p className="card-duration">{d.Duration}</p>
              <p className="card-date">{d.Date}</p>
              <button
                className="btn btn-primary mr-2"
                onClick={() => {
                  props.edit(d._id);
                  navigate("/Addactivity");
                }}
              >
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => del(d._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        {/* //<Form/> */}
      </div>
    </div>
  );
}

export default Myactivity;
