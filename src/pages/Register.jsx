import React, { useState } from "react";
import { Image, Nav } from "react-bootstrap";
import user from "../services/userService";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
            ></Image>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const n = name;
                  const e = email;
                  const p = password;
                  const response = await user.register(n, e, p);
                  //Taking X-Authorization token from response header and storing it in local storage
                  // localStorage.setItem("", response.headers["x-auth-token"]);
                  console.log(response);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlhtmlFor="">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="floatingPassword">Password</label>
                <i
                  id="eye"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "1rem",
                    top: "1.5rem",
                  }}
                  onClick={() => {
                    document.getElementById("floatingPassword").type =
                      document.getElementById("floatingPassword").type ===
                      "password"
                        ? "text"
                        : "password";
                    document.getElementById("eye").className =
                      document.getElementById("floatingPassword").type ===
                      "password"
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye";
                  }}
                  className="fa-solid fa-eye-slash"
                ></i>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label
                    className="form-check-label"
                    htmlhtmlFor="form2Example3"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-center mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: ".50rem 1.5rem" }}
                >
                  Register
                </button>
                <p className="medium fw-bold mt-2 pt-1 mb-0">
                  Aldready have a account?{" "}
                  <NavLink to="/login" className="text-primary">
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
