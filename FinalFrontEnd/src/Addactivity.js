import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addactivity(props) {
  console.log("Props: ", props);
  const navigate = useNavigate();
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);

  // const [show, setShow] = useState("");
  const handleinput = (e) => {
    const { name, value } = e.target;

    props.setShow({ ...props.show, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    //props.setData([...props.Data, show]);
    props.cardshow(props.show);
    props.setShow({});
    navigate("/Myactivity");
  };
  console.log("show", props.show);

  const option = [
    { value: "", Label: "--select activity--" },
    { value: "running", label: "running" },
    { value: "Bicycling", label: "Bicycling" },
    { value: "Swiming", label: "Swiming" },
    { value: "Walking", label: "Walking" },
    { value: "Hiking", label: "Hiking" },
  ];
  // //update post
  // const update = (id) => {
  //
  // };
  //post DAta
  const post = () => {
    if (props.Edit) {
      fetch(`http://localhost:5000/acty/${props.editData}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.show),
      }).then((res) => {
        res.json();
        console.log("data send");
        props.api();
      });
      props.setEdit(false);
    } else {
      fetch("http://localhost:5000/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.show),
      }).then((res) => {
        res.json();

        props.api();
      });
    }
  };
  // ////update
  // const edit = (id) => {
  //   fetch(`http://localhost:5000/acty/${id}`)
  //     .then((data1) => data1.json())
  //     .then((res) => setShow(res));
  //   update(id);
  // };

  return (
    <div id="add">
      <h1 id="activity">ADD ACTIVITY</h1>
      <h1 id="date">{ctime}</h1>
      <div id="form" className="container col-12">
        <div className="row">
          <div className="col-6">
            <form action="/action_page.php" onSubmit={handlesubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleinput}
                  name="Name"
                  value={props.show.Name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Decription">Decription:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Decription"
                  onChange={handleinput}
                  name="Decription"
                  value={props.show.Decription}
                />
              </div>
              <div className="form-group">
                <label htmlFor=" Activity">Activity:</label>
                <select
                  className="form-control"
                  name="Activity"
                  onChange={handleinput}
                  value={props.show.Activity}
                >
                  {option.map((options) => (
                    <option value={options.value}>{options.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Duration ">Duration:</label>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Duration"
                  onChange={handleinput}
                  name="Duration"
                  value={props.show.Duration}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Date">Date:</label>
                <input
                  type="Date"
                  className="form-control"
                  placeholder="Decription"
                  onChange={handleinput}
                  name="Date"
                  value={props.show.Date}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={() => post()}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Addactivity;
