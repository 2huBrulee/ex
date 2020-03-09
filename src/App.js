import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const sendData = data => {
  axios
    .post(`localhost:8000/user`, data)
    .then(result => console.log(result))
    .catch(err => console.trace(err));
};

const handleOnSubmit = e => {
  e.preventDefault();
  sendData({
    nombres: e.target.name.value,
    apellidos: e.target.lastname.value,
    email: e.target.email.value,
    telefono: e.target.phone.value
  });
};

const App = () => {
  const [data, setData] = useState([]);

  const handleOnchange = e => {
    e.preventDefault();
    axios.get(`localhost:8000/user`).then(results=>{
      console.log(results);
      setData(results);
    }).catch(err => console.trace(err));
  }

  return (
    <>
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Nombres</label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>Apellidos</label>
          <input type="text" name="lastname"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email"></input>
        </div>
        <div>
          <label>Telefono</label>
          <input type="text" pattern="\d*" maxLength="9" name="phone"></input>
        </div>

        <div>
          <input type="submit" name="botonForm" value="ENVIAR" />
        </div>
      </form>
    </div>
    <div>
      <h3>Buscador</h3>
      <div>
          <label>Buscar: </label>
          <input type="text" name="searchString"></input>
          <button onClick={handleOnchange}>BUSCAR</button>
        </div>
      <div>
        <table>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          {data && data.map(user=>(
            <tr>
              <td>{user.nombres}</td>
              <td>{user.apellidos}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    </>
  );
};

export default App;
