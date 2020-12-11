// day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
 
var currentTime = moment();

currentTime = currentTime.startOf("hour");

var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h");

time1 = time1.format('hh:mm A');

$(".block1").text(time1);
// 10 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');

$(".block2").text(time2);
// 11 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');

$(".block3").text(time3);
// 12 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');

$(".block4").text(time4);
// 1 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');

$(".block5").text(time5);
// 2 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');

$(".block6").text(time6);
// 3 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');

$(".block7").text(time7);
// 4 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');

$(".block8").text(time8);
// 5 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');

$(".block9").text(time9);


function testTime() {
    //time1 9AM
    time1 = moment().startOf('day').add(9, "hours");
    
    currentTime = currentTime.startOf("hour");
    
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    //time2 10AM
    time2 = moment().startOf('day').add(10, "hours");
    
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // time3 11AM
    time3 = moment().startOf('day').add(11, "hours");
   
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // time4 12PM
    time4 = moment().startOf('day').add(12, "hours");
   
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // time5 1PM
    time5 = moment().startOf('day').add(13, "hours");
 
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // time6 2PM
    time6 = moment().startOf('day').add(14, "hours");
    
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // time7 3M
    time7 = moment().startOf('day').add(15, "hours");
    
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // time8 4pm
    time8 = moment().startOf('day').add(16, "hours");
 
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // time9 5pm
    time9 = moment().startOf('day').add(17, "hours");
    
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
  }
  testTime();
  
  var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  
  for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
   
    $(".form" + x[i]).val(dataHour);
  }
  
  $(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");
  
    localStorage.setItem(listItem, formValue);
  });
  
