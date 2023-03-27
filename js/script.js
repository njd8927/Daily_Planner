// Code within this function will be executed once DOM loads
$(function () {

// Function to change color of each time block based on the current time. 
// Block colors will change based on past,present,future color assignments via the changeColors function below.

  function hourColor() {
    $('.time-block').each(function () {
      var timeBlock = parseInt(this.id);
// toggleClass in jquery used due to adding and removing classes
      $(this).toggleClass('present', timeBlock === currentTime);
      $(this).toggleClass('past', timeBlock < currentTime);
      $(this).toggleClass('future', timeBlock > currentTime);
    });
  }

  // Function to add current date & time to header
  function updateTime() {
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

// Retrieve current hour of the day using dayjs.
  var currentTime = dayjs().format();

  // Function to refresh time block colors based on the current time. 
  function changeColors() {
    $('.time-block').each(function () {
      var timeBlock = parseInt(this.id);
      if (timeBlock == currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (timeBlock < currentTime) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  // Call the three page set up functions
  hourColor();
  userEvent();
  changeColors();

  // setInterval to update the timer every second
  setInterval(updateTime, 1000);
});