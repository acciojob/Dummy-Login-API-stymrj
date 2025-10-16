import React, { useState } from "react";

const users = [
  { email: "user1@example.com", password: "1234" },
  { email: "user2@example.com", password: "abcd" }
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserError("");
    setPasswordError("");

    setLoading(true);

    setTimeout(() => {
      const foundUser = users.find((u) => u.email === email);

      if (!foundUser) {
        setUserError("User not found");
      } else if (foundUser.password !== password) {
        setPasswordError("Password Incorrect");
      } else {
        alert("Login Successful");
        setEmail("");
        setPassword("");
      }

      setLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setUserError("");
            setPasswordError("");
          }}
        />
        {userError && <p id="user-error">{userError}</p>}
      </div>

      <div>
        <input
          id="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setUserError("");
            setPasswordError("");
          }}
        />
        {passwordError && <p id="password-error">{passwordError}</p>}
      </div>

      <button id="submit-form-btn" type="submit" disabled={loading}>
        {loading ? "Checking..." : "Login"}
      </button>
    </form>
  );
}