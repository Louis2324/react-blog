import "./loginSignUp.css";
import { useState } from "react";
const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            {/* <img src="" alt="user_icon" /> */}
            <input type="text" id="name" placeholder="Doje Ninja One" />
          </div>
        )}
        <div className="input">
          {/* <img src="" alt="email_icon" /> */}
          <input type="email" id="email" placeholder="Hiyaah@gmail.com" />
        </div>
        <div className="input">
          {/* <img src="" alt="password_icon" /> */}
          <input
            type="password"
            id="password"
            placeholder="This is where your password goes"
          />
        </div>
        {action === "SignUp" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("SignUp")}
          >
            Sign Up
          </div>
          <div
            className={action === "SignUp" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
