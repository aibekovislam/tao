import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";

function AuthPage() {
  const { auth, login, user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(credentials);
    login(credentials);
  };

  if (user) {
    return <Navigate replace to="/admin" />;
  }

  return (
    <section>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="user-box">
            <input type="text" name="email" required="" />
            <label>Gmail</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required="" />
            <label>Password</label>
          </div>
          <button className="btn-auth" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default AuthPage;
