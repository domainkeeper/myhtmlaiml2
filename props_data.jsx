import Student from "./Student";
function App() {
return (
<div>
<h1>Student Information</h1>
<Student
name="Rahul Sharma"
course="Computer Science"
marks="85" />
<Student
name="Anita Verma"
course="Information Technology"
marks="92" />
<Student
name="Rohan Gupta"
course="Electronics"
marks="78" />
</div>
);
}
export default App;
Student.jsx:
function Student(props) {
return (
<div className="student-card">
<h2>{props.name}</h2>
<p>Course: {props.course}</p>
<p>Marks: {props.marks}</p>
</div>
);
}
export default Student;
main.jsx:
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<App />
</React.StrictMode>
); 
