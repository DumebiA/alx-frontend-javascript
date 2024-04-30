export default function updateStudentGradeByCity(lists, city, newGrades) {
  return lists
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
