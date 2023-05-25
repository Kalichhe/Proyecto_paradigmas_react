// Nota: A este archivo JS no le aplique Css por el tema de tengo el mismo nombre para los campos, asi que el tomo las modificaciones de esos campos

import { useState } from "react";
import "../Styles/Admin.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginAdmin(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    console.log(data);

    if (data.admin) {
      alert("Login successful");
      window.location.href = "/consultation";
    } else {
      alert("Please check your user name and password");
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
        <a href="login">
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

      <form onSubmit={loginAdmin}>
        <img
          className="mb-4"
          src={require("../images/logo_offcorss.png")}
          alt="Logo"
        />

        <h1 className="h3 mb-3 fw-normal">Login Admin</h1>

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
        <input
          className="w-50 btn btn-lg btn-primary"
          type="submit"
          value="Log In"
        />
      </form>
    </div>
  );
}

export default App;
