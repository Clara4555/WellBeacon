const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
//   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
}))

// progressbar
// var skillPers = document.querySelectorAll(".skill-per");

// skillPers.forEach(function(skillPer) {
//   var per = parseFloat(skillPer.getAttribute("per"));
//   skillPer.style.width = per + "%";
  
//   var animatedValue = 0; 
//   var startTime = null;
  
//   function animate(timestamp) {
//     if (!startTime) startTime = timestamp;
//     var progress = timestamp - startTime;
    // var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
//     if (stepPercentage < 1) {
//       animatedValue = per * stepPercentage;
//       skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
//       requestAnimationFrame(animate);
//     } else {
//       animatedValue = per;
//       skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
//     }
//   }
  
//   requestAnimationFrame(animate);
// });

// progress-bar updated
var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      // Update the text content of the .barr p elements
      var barrPs = document.querySelectorAll(".barr p");
      barrPs.forEach(function(barrP) {
        if (barrP.textContent.includes("completed")) {
          barrP.textContent = Math.floor(animatedValue) + "% completed";
        } else if (barrP.textContent.includes("/")) {
          var totalValue = barrP.textContent.split("/")[1];
          barrP.textContent = Math.floor(animatedValue) + "/" + totalValue;
        }
      });
      
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      // Update the text content of the .barr p elements
      var barrPs = document.querySelectorAll(".barr p");
      barrPs.forEach(function(barrP) {
        if (barrP.textContent.includes("completed")) {
          barrP.textContent = Math.floor(animatedValue) + "% completed";
        } else if (barrP.textContent.includes("/")) {
          var totalValue = barrP.textContent.split("/")[1];
          barrP.textContent = Math.floor(animatedValue) + "/" + totalValue;
        }
      });
    }
  }
  
  requestAnimationFrame(animate);
});
//  complete check
const completedCheckboxes = document.querySelectorAll('input[type="checkbox"]');

completedCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const completedDiv = event.target.closest('.completed');
    if (completedDiv) {
      if (event.target.checked) {
        completedDiv.style.backgroundColor = '#FD4174';
        completedDiv.style.color = 'black';
      } else {
        completedDiv.style.backgroundColor = '';
        completedDiv.style.color = '';
      }
    }
  });
});

const tap = document.querySelector('.profile');
  tap.addEventListener('click', function(){
       const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active');
});