import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  return (
    <div>
      <h1>학생 목록</h1>
      <FilterButtons
        filteredStudents={filteredStudents}
        setFilteredStudents={setFilteredStudents}
        initialStudents={initialStudents}
      />
      <StudentList filteredStudents={filteredStudents} />
    </div>
  );
}

export default App;
