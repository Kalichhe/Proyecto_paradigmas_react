import { useState } from "react";
import "../Styles/Login.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
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

    if (data.user) {
      alert("Login successful");
      window.location.href = "/inicio";
    } else {
      alert("Please check your user name and password");
    }
  }
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
      <form onSubmit={loginUser}>
        <nav>
          <a href="log-in-administrator">Admin</a>
        </nav>

        <img
          className="mb-4"
          src={require("../images/logo_offcorss.png")}
          alt="Logo"
        />

        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="floatingInput">Email address</label>
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

        <div className="checkbox mb-3">
          <label>
            <p>
              {" "}
              You do not have an account? <a href="/register"> Sign up here </a>
            </p>
          </label>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2023–2023</p>
      </form>
    </div>
  );
}

export default App;
