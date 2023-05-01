import { useState, useEffect } from "react";
function App() {
  const [song, setSong] = useState([]);
  const [viewer1, setViewer1] = useState(true);
  const [viewer2, setViewer2] = useState(false);

  function getAllSongs() {
    fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setSong(data);
    });
    setViewer2(false);
    setViewer1(true);
  }
  /*
  const showAllItems = song.map((el) => (
    <div key={el._id} class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">{el.title}</div>
        <div class="panel-body">
          <img class="img-responsive" src={el.image}></img>
        </div>
        <div class="panel-footer">
          Category: {el.category} <br />
          Price: {el.price} <br />
        </div>
      </div>
    </div>
  ));
    */
  return (
    <div>
      <h1>Catalog of Products </h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" onClick={() => getAllSongs()} href="#">Products</a>
              <a class="nav-link" href="#">Create</a>
            </div>
          </div>
        </div>
      </nav>
      {viewer1 && 
        <div>
          <h2>Available Products</h2>
          <hr></hr>
          <div class="container">
            <div class="row">
              {showAllItems}
            </div>
          </div>
        </div>
      }
      {viewer2 && 
        <div>
          <h2>Delete Products</h2>
          <hr></hr>
          <div class="container">
            <div class="row">
            </div>
          </div>
        </div>
      }
    </div>
  );
} // App end
export default App;
