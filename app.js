// Animations
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Animate Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const sizesButtons = document.querySelectorAll('.sizes button');

// Moving Animation event
container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = "none";
  // Pop-out effect
  title.style.transform = 'translateZ(100px)';
  sneaker.style.transform = 'translateZ(80px) rotateZ(-30deg)';
  description.style.transform = 'translateZ(80px)';
  sizes.style.transform = 'translateZ(45px)';
  purchase.style.transform = 'translateZ(70px)';
});

// Animate Out
container.addEventListener('mouseleave', e => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  // Pop-out effect
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});

// Handle sizes clicks
for(let i = 0; i < sizesButtons.length; i++) {
  sizesButtons[i].addEventListener('click', e => {
    sizesButtons.forEach(button => {
      button.classList.remove('active');
    });
    sizesButtons[i].classList.add('active');
  });
}
