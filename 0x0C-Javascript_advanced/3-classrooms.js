/**
 * Closure and loops
 * Builda an array with a functionvalues
 * @param {Number} numbersOfStudents Number of students in the classroom
 * @returns Array of the students seats
 */
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
    return students;
  }

let classRoom = createClassRoom(10);
