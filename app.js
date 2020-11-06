// Filling the card

function card1() {
  return `
                <div class="sneaker">
                    <img src="./sneakers.png" alt="sneakers">
                    <div class="circle"></div>
                </div>
                <div class="info">
                    <h1 class="title">Nike ZX</h1>
                    <h3 class="description">FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div class="sizes">
                        <button>39</button>
                        <button>40</button>
                        <button class="active">42</button>
                        <button>44</button>
                    </div>
                    <div class="purchase">
                        <button>Purchase</button>
                    </div>
                </div>
            `;
}

function card2() {
  return `
                <div class="avatar">
                    <img src="./frozenfizz.png" alt="frozenfizz">
                    <div class="circle2"></div>
                </div>
                <div class="info">
                    <h1 class="title">Tundra Fizz</h1>
                    <h3 class="description">THE TIDAL TRICKSTER.</h3>
                    <div class="abilities">
                        <div class="abilityWrapper">
                            <div class="abilityTextWrapper qWrapper">
                                <div class="abilityKey">Q</div>
                                <div class="abilityName">URCHIN STRIKE</div>
                                <div class="abilityDescription">Fizz dashes through his target, dealing magic damage and applying on hit effects.</div>
                            </div>
                            <div class="abilityImageWrapper qImage">
                                <img src="./qfizz.PNG" alt="qfizz">
                            </div>   
                        </div>
                        <div class="abilityWrapper">
                            <div class="abilityTextWrapper wWrapper">
                                <div class="abilityKey">W</div>
                                <div class="abilityName">SEASTONE TRIDENT</div>
                                <div class="abilityDescription">Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.</div>
                            </div>
                            <div class="abilityImageWrapper wImage">
                                <img src="./wfizz.PNG" alt="wfizz">
                            </div>   
                        </div>
                        <div class="abilityWrapper">
                            <div class="abilityTextWrapper eWrapper">
                                <div class="abilityKey">E</div>
                                <div class="abilityName">PLAYFUL / TRICKSTER</div>
                                <div class="abilityDescription">Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.</div>
                            </div>
                            <div class="abilityImageWrapper eImage">
                                <img src="./efizz.PNG" alt="efizz">
                            </div>   
                        </div>
                        <div class="abilityWrapper">
                            <div class="abilityTextWrapper rWrapper">
                                <div class="abilityKey">R</div>
                                <div class="abilityName">CHUM THE WATERS</div>
                                <div class="abilityDescription">Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.</div>
                            </div>
                            <div class="abilityImageWrapper rImage">
                                <img src="./rfizz.PNG" alt="rfizz">
                            </div>         
                        </div>
                    </div>
                    <div class="discover">
                        <button>Discover</button>
                    </div>
                </div>
            `;
}

function addAnimationLogic(card, container, cardSelected) {
  if (cardSelected === "card1") {
    // Animations
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
  }
  if (cardSelected === "card2") {
    // Animations
    // Animate Items
    const title = document.querySelector('.title');
    const avatar = document.querySelector('.avatar img');
    const discover = document.querySelector('.discover');
    const description = document.querySelector('.description');
    const qWrapper = document.querySelector('.qWrapper');
    const wWrapper = document.querySelector('.wWrapper');
    const eWrapper = document.querySelector('.eWrapper');
    const rWrapper = document.querySelector('.rWrapper');
    const qImage = document.querySelector('.qImage');
    const wImage = document.querySelector('.wImage');
    const eImage = document.querySelector('.eImage');
    const rImage = document.querySelector('.rImage');

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
      title.style.transform = 'translateZ(50px)';
      avatar.style.transform = 'translateZ(80px) rotateZ(-20deg)';
      description.style.transform = 'translateZ(30px)';
      discover.style.transform = 'translateZ(30px)';
    });

    // Animate Out
    container.addEventListener('mouseleave', e => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      // Pop-out effect
      title.style.transform = 'translateZ(0px)';
      avatar.style.transform = 'translateZ(0px) rotateZ(0deg)';
      description.style.transform = 'translateZ(0px)';
      discover.style.transform = 'translateZ(0px)';
    });


    // Animate In
    qWrapper.addEventListener('mouseenter', e => {
      qImage.style.transition = "all 0.5s ease";
      qWrapper.style.transition = "all 0.5s ease";
      qImage.style.transform = 'translateZ(40px)';
      qWrapper.style.transform = 'translateZ(30px)';
    });
    wWrapper.addEventListener('mouseenter', e => {
      wImage.style.transition = "all 0.5s ease";
      wWrapper.style.transition = "all 0.5s ease";
      wImage.style.transform = 'translateZ(40px)';
      wWrapper.style.transform = 'translateZ(30px)';
    });
    eWrapper.addEventListener('mouseenter', e => {
      eImage.style.transition = "all 0.5s ease";
      eWrapper.style.transition = "all 0.5s ease";
      eImage.style.transform = 'translateZ(40px)';
      eWrapper.style.transform = 'translateZ(30px)';
    });
    rWrapper.addEventListener('mouseenter', e => {
      rImage.style.transition = "all 0.5s ease";
      rWrapper.style.transition = "all 0.5s ease";
      rImage.style.transform = 'translateZ(40px)';
      rWrapper.style.transform = 'translateZ(30px)';
    });

    // Animate Out
    qWrapper.addEventListener('mouseleave', e => {
      qImage.style.transform = "translateZ(0)";
      qWrapper.style.transform = "translateZ(0)";
    });
    wWrapper.addEventListener('mouseleave', e => {
      wImage.style.transform = "translateZ(0)";
      wWrapper.style.transform = "translateZ(0)";
    });
    eWrapper.addEventListener('mouseleave', e => {
      eImage.style.transform = "translateZ(0)";
      eWrapper.style.transform = "translateZ(0)";
    });
    rWrapper.addEventListener('mouseleave', e => {
      rImage.style.transform = "translateZ(0)";
      rWrapper.style.transform = "translateZ(0)";
    });
  }
}

const card = document.querySelector('.card');
const container = document.querySelector('.container');

card.innerHTML = card1();
addAnimationLogic(card, container, "card1");

const nav1 = document.querySelectorAll('.menu .item')[0];
const nav2 = document.querySelectorAll('.menu .item')[1];

nav1.addEventListener('click', e => {
  card.innerHTML = card1();
  addAnimationLogic(card, container, "card1");
});
nav2.addEventListener('click', e => {
  card.innerHTML = card2();
  addAnimationLogic(card, container, "card2");
});

