/**  loader function start */
let StickyTop = document.querySelector('.stickyNav').classList
document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        StickyTop.add('sticky-top')
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
        document.body.style.display = 'block';   
     }, 2000);
  });
  

/** loader function end  */



/** footer year start */

let year = document.getElementById('year')
year.innerText = new Date ().getFullYear()

/** footer year end  */

