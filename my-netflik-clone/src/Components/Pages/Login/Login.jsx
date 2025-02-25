import React, { useState,useRef,useEffect } from "react";
import "./Login.css"
import { useNavigate, useParams } from "react-router-dom";
import Users from "../../Users/Users"

const Login = () => {
  const { user } = useParams(); // Get the username from the URL parameter
  const [password, setPassword] = useState(["", "", "", ""]); // Array for each digit of the password
  const [error, setError] = useState("");
  const navigate = useNavigate();
 const inputRefs = useRef(new Array(4));
  
  
   useEffect(() => {
     // Focus the first input after the component mounts
     if (inputRefs.current[0]) {
       inputRefs.current[0].focus();
     }
   }, []);



  // Handle input changes for each box
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      // Ensure only numbers are allowed
      const newPassword = [...password];
      newPassword[index] = value;
      setPassword(newPassword);

      // Move to the next input if current one is filled
      if (index < 3 && value) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !password[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const enteredPassword = password.join("");
    const selectedUser = Users.find((u) => u.name === user);

    if (enteredPassword.length === 4) {
      if (selectedUser && enteredPassword === selectedUser.password) {
        navigate("/Home");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("");
    }
  }, [password, user, navigate]);


  return (
    <div className="pin">
      <div>
        <h3 className="title">Profile lock is currently on</h3>
        <h1 className="subTitle">Enter your PIN to acces this profile </h1>
        <div className="pinBox" style={{ display: "flex", gap: "10px" }}>
          {password.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="password"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
            />
          ))}
        </div>
        {error && (
          <p
            style={{ color: "red", display: "flex", justifyContent: "center" }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
