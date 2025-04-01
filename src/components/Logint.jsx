import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";

function Logint() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  function validate() {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setServerError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    return isValid;
  }

  async function submit(event) {
    event.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post("http://react-app.test/api/login", {
        email: email.trim(),
        password: password.trim(),
      });
      if (response.status === 200) {
        window.localStorage.setItem("email", email);
        window.location.pathname = "/Home";
      }
      console.log(response.data);

      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          setEmailError("Email already exists");
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      } else {
        setServerError("Server is unreachable. Check your connection.");
      }
    }
  }

  return (
    <div className="divsign">
      <Header />
      <form onSubmit={submit}>
        <label htmlFor="Email">
          Email:
          <input
            type="email"
            id="Email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value.trimStart())}
          />
          {emailError && <p className="error">{emailError}</p>}
        </label>

        <label htmlFor="Password">
          Password:
          <input
            type="password"
            id="Password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </label>

        {serverError && <p className="error">{serverError}</p>}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Logint;
