 /* Hide the page loader when the page is fully loaded */

  document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
        document.body.style.display = 'block';   
     }, 3000);
  });
  

// var loader = document.getElementById("loader")
// console.log(loader); // Call check
// window.addEventListener("load", vanish)

// function vanish() {
//     loader.classList.add("disappear");
// }