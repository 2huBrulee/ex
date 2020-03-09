import React from "react";
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
  return (
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
          <input type="tel" maxLength="9" name="phone"></input>
        </div>

        <div>
          <input type="submit" name="botonForm" value="ENVIAR" />
        </div>
      </form>
    </div>
  );
};

export default App;
