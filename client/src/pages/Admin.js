
// Nota: A este archivo JS no le aplique Css por el tema de tengo el mismo nombre para los campos, asi que el tomo las modificaciones de esos campos

import { useState } from "react";


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
