document.addEventListener("DOMContentLoaded", function() {
  var currentDate = new Date();
  var dateElement = document.getElementById("date");
  var formattedDate = "ŠIANDIEN: " + currentDate.getFullYear() + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + ('0' + currentDate.getDate()).slice(-2);
  dateElement.innerHTML = formattedDate;
  dateElement.style.textAlign = "left";

  var images = document.querySelectorAll('#image-slider img');
  var currentIndex = 0;

  function showImage(index) {
    images.forEach(function(img) {
      img.classList.remove('active');
    });
    images[index].classList.add('active');
  }

  setInterval(function() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }, 3000);
});
