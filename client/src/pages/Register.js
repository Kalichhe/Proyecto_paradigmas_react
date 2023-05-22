import React, { useState } from "react";
import Modal from "./TermsOfUse";
import "../Styles/Register.css";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [identification_document, setIdentification_Document] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastname,
        phone,
        identification_document,
        email,
        city,
        neighborhood,
        address,
        age,
        gender,
        password,
        confirmpassword,
      }),
    });

    const data = await response.json();
    if (data.status === "error") {
      alert("El correo ingresado ya se encuentra registrado");
    } else {
      alert("Registro exitoso");
      window.location.href = "/inicio";
    }

    console.log(data);
  }

  // Para verificar que el check box esté seleccionado
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="text-center"
      style={{
        paddingTop: "0%",
        paddingLeft: "0%",
        paddingRight: "0%",
        paddingBottom: "15%",
      }}
    >
      <form onSubmit={registerUser}>
        <img
          className="mb-4"
          src={require("../images/logo_offcorss.png")}
          alt="Logo"
        />
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingInputName"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInputName"> Name </label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingInputLastName"
            placeholder="Last Name"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="floatingInputLastName"> Last Name </label>
        </div>
        <div className="row" id="row">
          <div className="col" id="col">
            <div className="form-floating" id="phone">
              <input
                className="form-control"
                id="floatingInputPhone"
                placeholder="Phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="floatingInputPhone"> Phone </label>
            </div>
          </div>
          <div className="col" id="col2">
            <div className="form-floating" id="document">
              <input
                className="form-control"
                id="floatingInputIdentificationDocument"
                placeholder="Identification Document"
                type="number"
                value={identification_document}
                onChange={(e) => setIdentification_Document(e.target.value)}
              />
              <label htmlFor="floatingInputIdentificationDocument">
                Identification Document
              </label>
            </div>
          </div>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="row" id="row2">
          <div className="col" id="col">
            <div className="form-floating" id="city">
              <input
                className="form-control"
                id="floatingInputCity"
                placeholder="City"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="floatingInputCity"> City </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating" id="neighborhood">
              <input
                className="form-control"
                id="floatingInputNeighborhood"
                placeholder="Neighborhood"
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              />
              <label htmlFor="floatingInputNeighborhood"> Neighborhood </label>
            </div>
          </div>
        </div>
        <div className="row" id="row3">
          <div className="col" id="col">
            <div className="form-floating" id="address">
              <input
                className="form-control"
                id="floatingInputAddress"
                placeholder="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="floatingInputAddress"> Address </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating" id="age">
              <input
                className="form-control"
                id="floatingInputAge"
                placeholder="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label htmlFor="floatingInputAge"> Age </label>
            </div>
          </div>
        </div>
        <div className="row" id="row4">
          <div className="col" id="col4">
            <div className="form-floating" id="gender">
              <input
                list="Gender"
                className="form-control"
                id="floatingInputGender"
                placeholder="Gender"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <datalist id="Gender">
                <option value={"Men"} />
                <option value={"Women"} />
                <option value={"Loca"} />
                <option value={"Prefieron no decirlo"} />
                <option value={"Otro"} />
              </datalist>
              <label htmlFor="floatingInputGender"> Gender </label>
            </div>
          </div>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingInputConfirmPassword"
            placeholder="ConfirmPassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="floatingInputConfirmPassword">Confirm Password</label>
        </div>
        <div id="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />{" "}
          Acepta los términos y condiciones
          {isChecked && <Modal />}
        </div>
        <div className="checkbox mb-3"></div>
        <input
          className="w-50 btn btn-lg btn-primary"
          type="submit"
          disabled={!isChecked}
          value="Registrarte"
        />
        <p className="mt-5 mb-3 text-muted">© 2023–2023</p>
      </form>
    </div>
  );
}

export default App;
