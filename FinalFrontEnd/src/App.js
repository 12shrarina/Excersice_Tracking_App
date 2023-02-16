import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Trainers from "./Trainers";
import Services from "./Services";
import Addactivity from "./Addactivity";
import Myactivity from "./Myactivity";
import { useState, useEffect } from "react";
function App() {
  const [Data, setData] = useState([]);
  const [show, setShow] = useState("");
  //Get DAta
  const api = () => {
    console.log("LOGGG");
    fetch("http://localhost:5000/act")
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.data);
      });
  };
  console.log("Data", Data);

  useEffect(() => {
    api();
  }, []);

  const cardshow = (card) => {
    setData([...Data, card]);
  };
  //update post
  // const update = (id) => {
  //   fetch(`http://localhost:5000/acty/${id}`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(show),
  //   }).then((res) => {
  //     res.json();
  //     console.log("data send");
  //   });
  // };
  const [Edit, setEdit] = useState(false);
  const [editData, seteditData] = useState(0);
  ////edit

  const edit = (id) => {
    fetch(`http://localhost:5000/actty/${id}`)
      .then((data1) => data1.json())
      .then((res) => setShow(res));
    api();
    setEdit(true);
    seteditData(id);
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Addactivity"
            element={
              <Addactivity
                cardshow={cardshow}
                show={show}
                setShow={setShow}
                setEdit={setEdit}
                Edit={Edit}
                editData={editData}
                api={api}
              />
            }
          />

          <Route
            path="Myactivity"
            element={<Myactivity Data={Data} api={api} edit={edit} />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
