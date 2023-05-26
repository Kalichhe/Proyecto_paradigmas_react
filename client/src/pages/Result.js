import { useState } from "react";

function App() {
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
      
      <form>
        <img
          className="mb-4"
          src={require("../images/logo_offcorss.png")}
          alt="Logo"
        />

        <h1 className="h3 mb-3 fw-normal">Result</h1>
      </form>
    </div>
  );
}

export default App;
