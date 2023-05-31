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

    if (data.documento) {
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
      <nav>
        <a href="login-admin">
          <div className="custom-button ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
            </svg>
          </div>
        </a>
      </nav>
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
