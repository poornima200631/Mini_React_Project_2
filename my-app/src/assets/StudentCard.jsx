import React, { useState } from "react";
import './StudentCard.css'; 


function StudentCard(){
    const [students, setStudents] = useState([
        { name: 'Aarav', marks: 99 },
        { name: 'Isha', marks: 31 },
        { name: 'Rohan', marks: 75 },
        { name: 'Sneha', marks: 28 }
      ]);
    
const deleteStudent = (indexToDelete) => {
    const updated = students.filter((_, index) => index !== indexToDelete);
    setStudents(updated);
  };
return (
    <div>
       { students.map((student,index)=>(
       <li><p className="a">Student Name:{student.name}</p>
           <p className="a"> Marks:{student.marks}</p>
           <p className="a">Status: {student.marks <= 33 ? "Fail ❌" : "Pass ✅"}</p>

           <p> <button onClick={() => deleteStudent(index)}>Delete</button></p>
            <p>--------------------------------------------------</p>
        </li>
       )
       )}
    </div>
)
}
export default StudentCard