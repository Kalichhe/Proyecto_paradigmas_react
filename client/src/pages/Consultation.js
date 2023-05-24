import { useState } from "react";
import "../Styles/Consultation.css";

function App() {
  const [identification_document, setIdentification_Document] = useState("");

  async function consultation(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identification_document,
      }),
    });
    const data = await response.json();

    console.log(data);

    if (data.identification_document) {
      alert("User found");
      window.location.href = "/result";
    } else {
      alert("User not found");
    }
  }

  return (
    <div
      className="text-center"
      style={{
        paddingTop: "0",
        paddingLeft: "0",
        paddingRight: "0",
        paddingBottom: "15%",
      }}
    >
      <form onSubmit={consultation}>
        <img
          className="mb-4"
          src={require("../images/logo_offcorss.png")}
          alt="Logo"
        />

        <h1 className="h3 mb-3 fw-normal">
          Consult vouchers and terms of conditions
        </h1>

        <div className="form-floating">
          <input
            type="identification"
            className="form-control"
            id="floatingInputIdentificationDocument"
            placeholder="1234567890"
            value={identification_document}
            onChange={(e) => setIdentification_Document(e.target.value)}
          />

          <label htmlFor="floatingInput">Enter the identity document</label>
        </div>
        <input
          className="w-50 btn btn-lg btn-primary"
          type="submit"
          value="Consultation"
        />
      </form>
    </div>
  );
}

export default App;
