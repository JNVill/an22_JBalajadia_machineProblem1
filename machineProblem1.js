// ITCS227 Source Code Template for 2T AY 2022-2023
/*
  Program:   Computation of Grades using Function
  Programmer:  Jonas Nicko V. Balajadia
  Section:   AN22
  Start Date:  June 02, 2023
  End Date:    June 02, 2023
*/

// Function to calculate the average of an array of grades
function calculateAverage(grades) {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}


// Function to calculate the letter grade based on the final grade
function calculateLetterGrade(finalGrade) {
  if (finalGrade >= 90) {
    return "A";
  } else if (finalGrade >= 80) {
    return "B";
  } else if (finalGrade >= 70) {
    return "C";
  } else if (finalGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Function to prompt the user for grades and calculate the final grades
function calculateFinalGrades() {
  var students = [];

  for (var i = 0; i < 5; i++) {
    var student = {};

    student.name = prompt("Enter the name of student " + (i + 1) + ": ");

    var enablingGrades = [];
    for (var j = 0; j < 5; j++) {
      var enablingGrade = parseFloat(prompt("Enter enabling assessment grade " + (j + 1) + ": "));
      enablingGrades.push(enablingGrade);
    }
    student.participation = calculateAverage(enablingGrades);

    var summativeGrades = [];
    for (var k = 0; k < 3; k++) {
      var summativeGrade = parseFloat(prompt("Enter summative assessment grade " + (k + 1) + ": "));
      summativeGrades.push(summativeGrade);
    }

    var examGrades = parseFloat(prompt("Enter major exam grade: "));

    student.finalExam = examGrades;
    
    student.summativeAverage = calculateAverage(summativeGrades);

    student.finalGrade = (student.participation * 0.3) + (student.summativeAverage * 0.3) + (student.finalExam * 0.4);
    student.letterGrade = calculateLetterGrade(student.finalGrade);

    students.push(student);
  }

  return students;
}

function displayResults(students) {
  console.log("Name\t\tClass Participation\t\tSummative Grade\t\tExam Grade\t\tGrade Score\t\tLetter Grade");
  console.log("-----------------------------------------------------------------------------------------------------");
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    console.log(
      student.name + "\t\t\t" +
      student.participation.toFixed(2) + "\t\t\t\t" +
      student.summativeAverage.toFixed(2) + "\t\t\t\t" +
      student.finalExam.toFixed(2) + "\t\t\t\t" +
      student.finalGrade.toFixed(2) + "\t\t\t\t" +
      student.letterGrade
    );
  }
}

// Calculate final grades and display results
var finalGrades = calculateFinalGrades();
displayResults(finalGrades);
