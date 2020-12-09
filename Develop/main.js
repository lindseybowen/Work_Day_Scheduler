let workDay = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 AM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

$(document).ready(function(){
    if(!localStorage.getItem('workDay')) {
      updateCalendarTasks(workDay);
    } else {
      updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
    }
  }) 