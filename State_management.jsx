import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<App />
</React.StrictMode>
);
App.jsx:
import React, { useState } from "react";
function App() {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
setCount(count - 1);
};
const reset = () => {
setCount(0);
};
return (
<div className="container">
<h1>React Counter Application</h1>
<h2 className="counter">{count}</h2>
<div className="buttons">
<button onClick={increment}>Increment (+)</button>
<button onClick={decrement}>Decrement (-)</button>
<button onClick={reset}>Reset</button>
</div>
</div>
);
}
export default App;
App.css:
body{
font-family: Arial, sans-serif;
background-color:#f2f2f2;
}
.container{
background:white;
width:350px;
margin:100px auto;
padding:30px;
text-align:center;
border-radius:10px;
box-shadow:0px 0px 10px gray;
}
.counter{
font-size:40px;
margin:20px 0;
}
.buttons button{
margin:10px;
padding:10px 20px;
font-size:16px;
border:none;
background-color:#007BFF;
color:white;
border-radius:5px;
cursor:pointer;
}
.buttons button:hover{
background-color:#0056b3;
}
