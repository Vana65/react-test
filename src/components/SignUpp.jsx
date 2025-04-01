import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  function validate() {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setRepeatPasswordError("");
    setServerError("");

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

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

    if (repeatPassword.trim() === "") {
      setRepeatPasswordError("Repeat password is required");
      isValid = false;
    } else if (password !== repeatPassword) {
      setRepeatPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  }

  async function submit(event) {
    event.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "http://react-app.test/api/register",
          {
            name: name.trim(),
            email: email.trim(),
            password: password.trim(),
            password_confirmation: repeatPassword.trim(),
          }
        );
        if (response.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.href = "/Home";
        }

        console.log(response.data);

        setName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
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
  }

  return (
    <div className="divsign">
      <Header />
      <form onSubmit={submit}>
        <label htmlFor="Name">
          Name:
          <input
            type="text"
            id="Name"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value.trimStart())}
          />
          {nameError && <p className="error">{nameError}</p>}
        </label>

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

        <label htmlFor="RepeatPassword">
          Repeat Password:
          <input
            type="password"
            id="RepeatPassword"
            placeholder="Repeat Password..."
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {repeatPasswordError && (
            <p className="error">{repeatPasswordError}</p>
          )}
        </label>

        {serverError && <p className="error">{serverError}</p>}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
