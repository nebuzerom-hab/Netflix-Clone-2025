import React, { useState } from "react";
import "./Whois.css"
import { useNavigate } from "react-router-dom";
import lock from "../../assets/lock1.png"
import users from "../Users/Users";



const WhoIsWatching = () => {
  
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


 

  const handleUserClick = (user) => {
    navigate(`/login/${user.name}`); 
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h1>Who's Watching?</h1>
      </div>

      <div className="profile">
        {users.map((user) => (
          <div
            key={user.name}
            className="innerProfile"
            style={{ cursor: "pointer" }}
          >
            <img
              src={user.image}
              alt={user.name}
              onClick={() => handleUserClick(user)}
              className="profileImage"
            />
            <p>{user.name}</p>
            <img src={lock} alt="locked" className="lock" />
          </div>
        ))}
      </div>
      <div className="manage">
        <p>Manage Profile</p>
      </div>
      {selectedUser && (
        <div>
          <h3>Enter Password for {selectedUser.name}</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
  
};

export default WhoIsWatching;
