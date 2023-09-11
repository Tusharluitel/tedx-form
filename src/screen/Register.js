import React from "react";
import TedxDWITLogo from "../asset/logo-white.png";
import "../App.css";
const Register = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>REIMAGINING REALITY</h1>
          <h2>
            <span style={{ color: "#E60027" }}>October 2</span> | Deerwalk Sifal
            School
          </h2>
        </div>
        <div style={{ display: "flex", width: "50%" }}>
          <img src={TedxDWITLogo} width="50%" height="50%" />
        </div>
      </header>
      <form>
        <div>
          <h3
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              width: "45%",
              marginBottom: "15px",
            }}
          >
            Let's start with your personal details. *{" "}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "45%",
              margin: "auto",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input-field"
              required
            />

            <div className="dropdown">
              <select id="dropdown" name="dropdown" className="input-field">
                <option value="label" disabled selected>
                  Select an Gender:
                </option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
              <br />
            </div>
            <input
              type="submit"
              className="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
