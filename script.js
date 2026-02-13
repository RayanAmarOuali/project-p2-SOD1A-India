const eventDate = new Date("2026-08-19T12:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("event-message").style.display = "block";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);


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
 


function klik(event) {
    event.preventDefault();   
    window.location.href = "donatie.html"
}


const lightBtn = document.getElementById("lightmode-btn");
const darkBtn = document.getElementById("darkmode-btn");
const body = document.body;
const container = document.querySelector(".doncontainer");
const inputs = document.querySelectorAll("input, select");
const labels = document.querySelectorAll("label");
const buttons = document.querySelectorAll(".buttons button");


function setLightMode() {
    body.style.backgroundColor = "#f4f4f4";
    body.style.color = "#333";

    container.style.backgroundColor = "#ffffff";
    container.style.border = "2px solid #1a73e8";
    container.style.boxShadow = "0 0 20px rgba(0,0,0,0.1)";

    inputs.forEach(input => {
        input.style.backgroundColor = "#fff";
        input.style.color = "#000";
        input.style.border = "1px solid #ccc";
    });

    labels.forEach(label => {
        label.style.color = "#000";
    });

    buttons.forEach(btn => {
        btn.style.backgroundColor = "#1a73e8";
        btn.style.color = "#fff";
        btn.style.border = "none";
    });
}


function setDarkMode() {
    body.style.backgroundColor = "#121212";
    body.style.color = "#f0f0f0";

    container.style.backgroundColor = "#1e1e1e";
    container.style.border = "2px solid #bb86fc";
    container.style.boxShadow = "0 0 20px rgba(255,255,255,0.1)";

    inputs.forEach(input => {
        input.style.backgroundColor = "#2a2a2a";
        input.style.color = "#f0f0f0";
        input.style.border = "1px solid #555";
    });

    labels.forEach(label => {
        label.style.color = "#f0f0f0";
    });

    buttons.forEach(btn => {
        btn.style.backgroundColor = "#bb86fc";
        btn.style.color = "#121212";
        btn.style.border = "none";
    });
}


lightBtn.addEventListener("click", setLightMode);
darkBtn.addEventListener("click", setDarkMode);

