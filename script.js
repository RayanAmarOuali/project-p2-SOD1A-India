fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-container').innerHTML = data;
  })

  fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.menu-container').innerHTML = data;
  })


let knop = document.getElementById("verzenden");

knop.addEventListener("click", klik); 
 

function klik() {
    alert("Bedankt voor uw donatie!");
    return
    
}
  