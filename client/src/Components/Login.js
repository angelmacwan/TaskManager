import React from "react";

class Login extends React.Component {
  showAlert(msg) {
    let userAlert = document.querySelector("#alert");
    userAlert.style.display = "block";
    userAlert.innerText = msg;
  }

  createUser() {
    let userAlert = document.querySelector("#alert");

    let name = document.querySelector("#fname").value;
    let username = document.querySelector("#uname").value;
    let password = document.querySelector("#ps1").value;
    let psCheck = document.querySelector("#ps2").value;

    if (password !== psCheck) {
      userAlert.style.display = "block";
      userAlert.innerText = "Password do not match";
    } else if (password.length < 7) {
      userAlert.style.display = "block";
      userAlert.innerText = "Password should be atleast 8 characters long";
    } else {
      let avail = true;

      fetch("/api/login")
        .then(res => res.json())
        .then(data => {
          for (let i of data) {
            if (i.username === username) {
              avail = false;
            }
          }
          if (avail) {
            const data = {name: name, username: username, password: password};
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            };
            fetch("/api/adduser", options);
            document
              .querySelector(".regiester")
              .classList.toggle("showRegiesterForm");
          } else {
            userAlert.style.display = "block";
            userAlert.innerText = "Username is already taken";
          }
        });
    }
  }
  //
  //

  render() {
    return (
      <div className="loginWrapper">
        <div className="loginForm">
          <svg
            className="bi bi-person-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>

          <h1>LOGIN</h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="loginUsername"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              id="loginBtn"
              className="btn btn-primary"
              onClick={() => {
                let auth = false;
                let ps = document.querySelector("#loginPassword");
                let un = document.querySelector("#loginUsername");
                fetch("/api/login")
                  .then(res => res.json())
                  .then(data => {
                    for (let i of data) {
                      if (un.value === i.username && ps.value === i.password) {
                        auth = true;
                      }
                    }
                    if (auth) {
                      this.props.trigger(un.value);
                    } else {
                      this.showAlert("Username or Password incorrect");
                    }
                  });
              }}
            >
              Login
            </button>

            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                document
                  .querySelector(".regiester")
                  .classList.toggle("showRegiesterForm");
              }}
            >
              SignUp
            </button>
          </form>
        </div>

        <div className="regiester">
          <h1>REGIESTER</h1>
          <form>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Enter Name"
              required
            />
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter Username"
              required
            />
            <input
              type="Password"
              className="form-control"
              id="ps1"
              placeholder="password"
              required
            />
            <input
              type="Password"
              className="form-control"
              id="ps2"
              placeholder="re-enter password"
              required
            />
            <button
              type="button"
              className="btn btn-success regBtns"
              onClick={this.createUser}
            >
              Sign up
            </button>
            <button
              type="button"
              className="btn btn-danger regBtns"
              onClick={() => {
                document
                  .querySelector(".regiester")
                  .classList.toggle("showRegiesterForm");
              }}
            >
              Cancle
            </button>
          </form>
        </div>

        <div className="alert alert-danger" role="alert" id="alert"></div>
      </div>
    );
  }
}

export default Login;
