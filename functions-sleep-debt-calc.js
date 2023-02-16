/*
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

function getSleepHours(day) {
    if (day === "monday") {
      return 6;
    } else if (day === "tuesday") {
      return 6;
    } else if (day === "wednesday") {
      return 6;
    } else if (day === "thursday") {
      return 7;
    } else if (day === "friday") {
      return 7;
    } else if (day === "saturday") {
      return 9;
    } else if (day === "sunday") {
      return 8;
    } else {
      return "ERROR";
    }
  }
  
  /* 
  const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
  */
  
  const getActualSleepHours = () => 6 + 6 + 6 + 7 + 7 + 9 + 8;
  
  /*
  const getIdealSleepHours = function() {
    let idealHours = 7;
    return idealHours * 7;
  }
  */
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    // let idealSleepHours = getIdealSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let deltaSleepHours = Math.abs(actualSleepHours - idealSleepHours);
  
    if (actualSleepHours === idealSleepHours) {
      console.log("User got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("User got " + deltaSleepHours + " hours more sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("User got " + deltaSleepHours + " hours less sleep than needed, you should get some rest.");
    } else {
      console.log("ERROR");
    }
  }
  
  calculateSleepDebt();