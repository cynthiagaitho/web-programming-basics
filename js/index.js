document.addEventListener("DOMContentLoaded", function (event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function () {
      // write here
  console.log('clicked')
      if (thumbnailElement.className === "small") {
        thumbnailElement.className = "";
      } else {
        thumbnailElement.className = "small";
      }
    });

    var clickMeBtn = document.getElementById('click-me-btn')
    clickMeBtn.addEventListener('click',function(){
      console.log('clicked')
      const result = prompt('Hello visitor. What is your name?')

      alert(`Hello ${result} welcome to my webpage. Feel free to explore.`)
    })
  });