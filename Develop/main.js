$(document).ready(function() {
    var events = [];
    
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      var dateAdded = moment().format("dddd, MMMM Do");
  
      events.push({description: value, time: time, date: dateAdded});
  
      // save the value in localStorage as time
      localStorage.setItem("events", JSON.stringify(events));
      
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      
        if(currentHour > blockHour) {
          $(this).addClass("past");
        }
        
        else if(currentHour === blockHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        }
        
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
        
      });
    }   

    hourUpdater();

    var secondsLeft = 15;
    function setTime() {
      setInterval(function() {
        secondsLeft--;
    
        if(secondsLeft === 0) {
          hourUpdater();
          secondsLeft = 15;
        }
    
      }, 1000);
    }
    setTime(); 
    
    
