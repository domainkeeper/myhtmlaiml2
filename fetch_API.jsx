import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<App />
</React.StrictMode>
);
App.css
body{
font-family: Arial;
background:#f4f4f4;
text-align:center;
}
.container{
width:350px;
margin:auto;
padding:20px;
background:white;
border-radius:8px;
box-shadow:0 0 10px gray;
}
input{
width:90%;
padding:8px;
margin:8px 0;
}
button{
padding:10px 15px;
background:green;
color:white;
border:none;
cursor:pointer;
}
button:hover{
background:darkgreen;
}
.error{
color:red;
font-size:14px;
}
.success{
color:green;
font-weight:bold;
}
.apiData{
margin-top:20px;
background:#e8f5e9;
padding:10px;
}
App.jsx
import React, { useState } from "react";
function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [success, setSuccess] = useState("");
const [users, setUsers] = useState([]);
const handleSubmit = (e) => {
e.preventDefault();
let formErrors = {};
if(name.trim() === ""){
formErrors.name = "Name is required";
}
if(!email.includes("@")){
formErrors.email = "Email must contain @";
}
if(password.length < 6){
formErrors.password = "Password must be at least 6 characters";
}
setErrors(formErrors);
if(Object.keys(formErrors).length === 0){
const newUser = {
name: name,
email: email
};
setUsers([...users, newUser]);
setSuccess("Registration Successful!");
setName("");
setEmail("");
setPassword("");
}
};
return (
<div className="container">
<h2>Registration Form</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<p className="error">{errors.name}</p>
<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<p className="error">{errors.email}</p>
<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<p className="error">{errors.password}</p>
<button type="submit">Register</button>
</form>
<p className="success">{success}</p>
{users.length > 0 && (
<div className="apiData">
<h3>Registered Users</h3>
<ul>
{users.map((user,index) => (
<li key={index}>
{user.name} - {user.email}
</li>
))}
</ul>
</div>
)}
</div>
);
}
export default App;
