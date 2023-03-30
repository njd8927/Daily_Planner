// Code within this function will be executed once DOM loads
$(function () {


  
// Function to add current date & time to header using dayjs
  function timeUpdate() {
    var dateEl = $('#date');
    var timeEl = $('#time');
    var currDate = dayjs().format('dddd, MMMM D, YYYY');
    var currTime = dayjs().format('hh:mm:ss A');
    dateEl.text(currDate);
    timeEl.text(currTime);
  }

// Function to store the user inputted event to local storage
  function userEvent() {
    $('.saveBtn').on('click', function () {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }


// Function to refresh time block colors based on the current time. 
  function changeColors() {
    $('.description').each(function () {
      var timeBlock = parseInt(this.id);
      console.log(timeBlock);
      console.log(currentTime);
      if (timeBlock == currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (timeBlock < currentTime) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

// Retrieve current hour of the day using dayjs
  var currentTime = dayjs().hour();

// Call the page set up functions
  userEvent();
  changeColors();

  // setInterval to update the timer every second
  setInterval(timeUpdate, 1000);
});