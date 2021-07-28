let movie1 = document.querySelector("#movie1");
let movie2 = document.querySelector("#movie2");
let movie3 = document.querySelector("#movie3");
let movie4 = document.querySelector("#movie4");
let movie5 = document.querySelector("#movie5");
let movie6 = document.querySelector("#movie6");
let movie7 = document.querySelector("#movie7");
let movie8 = document.querySelector("#movie8");


movie1.addEventListener("click", displayFirstMovie );
movie2.addEventListener("click", displaySecondMovie );
movie3.addEventListener("click", displayThirdMovie );
movie4.addEventListener("click", displayFourthMovie );
movie5.addEventListener("click", displayFifthMovie );
movie6.addEventListener("click", displaySixthMovie );
movie7.addEventListener("click", displaySeventhMovie );
movie8.addEventListener("click", displayEightMovie );


function displayFirstMovie(){
  window.open("twenty-century-women.html", "20th century women", "width = 400, height = 600, scrollbars = yes") 
}

function displaySecondMovie(){
  window.open("china-town.html", "china Town Movie", "width = 400, height = 600, scrollbars = yes") 
}

function displayThirdMovie(){
  window.open("robin-williams.html", "come inside me", "width = 400, height = 600, scrollbars = yes") 
}

function displayFourthMovie(){
  window.open("captain-fantastic.html", "captain fantastic Movie", "width = 400, height = 600, scrollbars = yes") 
}

function displayFifthMovie(){
  window.open("moonlight.html", "moonlight Movie", "width = 400, height = 600, scrollbars = yes") 
}

function displaySixthMovie(){
  window.open("amy.html", "amy Movie", "width = 400, height = 600, scrollbars = yes") 
}

function displaySeventhMovie(){
  window.open("leave-no-trace.html", " Leave no trace movie", "width = 400, height = 600, scrollbars = yes") 
}

function displayEightMovie(){
  window.open("hublot.html", "hublot Movie", "width = 400, height = 600, scrollbars = yes") 
}

var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }