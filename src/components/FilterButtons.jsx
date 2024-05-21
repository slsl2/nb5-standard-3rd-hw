function FilterButtons({ setFilteredStudents, initialStudents }) {
  const filterByAge = (minAge) => {
    setFilteredStudents(
      initialStudents.filter((initialStudent) => initialStudent.age >= minAge)
    );
  };
  const filterByGrade = (grade) => {
    setFilteredStudents(
      initialStudents.filter((initialStudent) => initialStudent.grade === grade)
    );
  };
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
