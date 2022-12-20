window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const slider = document.querySelector(".slider"),
    dots = document.querySelectorAll(".dot"),
    links = document.querySelectorAll(".modal-open"),
    modal = document.querySelector(".modal"),
    card = document.querySelector(".card .elements"),
    btn = document.querySelector(".btn"),
    menus = document.querySelectorAll(".menu"),
    open = document.querySelector(".links ul"),
    cardClose = document.querySelector(".card-close");
  // btnClickeds = card.querySelector(".tabs .btn-lower");

  let i = 0,
    information = [
      `
      <div class="row productsImg">
      <img src="picture/1.jpg" alt="" />
      <img src="picture/2.jpg" alt="" />
      <img src="picture/3.jpg" alt="" />
      <img src="picture/4.jpg" alt="" />
      <img src="picture/5.jpg" alt="" />
      <img src="picture/6.jpg" alt="" />
      <img src="picture/7.jpg" alt="" />
      <img src="picture/8.jpg" alt="" />
      <img src="picture/9.jpg" alt="" />
      <img src="picture/10.jpg" alt="" />
      </div>
      `,
      `
      <div class="row productsImg">
      
      <img src="picture/11.jpg" alt="" />
      <img src="picture/12.jpg" alt="" />
      <img src="picture/13.jpg" alt="" />
      <img src="picture/14.jpg" alt="" />
      <img src="picture/15.jpg" alt="" />
      <img src="picture/16.jpg" alt="" /></div>
      `,
      `
    <div class="row ai-c">
    <div class="col-6"><img src="picture/boss.jpg" alt="" /></div>
    <div class="col-6">
    <div class="title primary">MAVLONOV KHIDIR MAKHMATMURATOVICH</div>
    <br />
    <br />
    <div class="text" >Director, born on September 26, 1979. He has a higher education,graduated from the Faculty of Economics of Samarkand State University in 2001</div></div>
    </div>
    `,
      `
    <div class="title primary">WE EXPORT ED TO THESE COUNTRIES</div>
    <div class="cooperation">
      <div class="box">
      <img src="picture/china.jpg" alt="" />
      <div class="text">china</div>
      </div>
      <div class="box">
      <img src="picture/korea.jpg" alt="" />
      <div class="text">korea</div>
      </div>
      <div class="box">
      <img src="picture/turkey.jpg" alt="" />
      <div class="text">turkey</div>
      </div>
      <div class="box">
      <img src="picture/Europe.png" alt="" />
      <div class="text">Europa</div>
      </div>
    </div>
    `,
      `
        <div class="text">
        “XIDIR” FERMER XO'JALIGI <br /><br />
        “XIDIR” FARM ENTERPRISE <br />
        <br />
        Director: 
        MAVLONOV KHIDIR MAKHMATMURATOVICH

        <br />
        <br />
        ADDRESS: Tashkent region, Boka district, Turon, O. Yoldoshev f/u, Yangiabad village, Qurilish street 61<br />
        EMAIL: <a class="link" href="mailto:xidir_79_fx@mail.ru">xidir_79_fx@mail.ru</a><br />
        whatsapp: <a class="link" href="https://api.whatsapp.com/send?phone=998912998479">++998 99 4740055 / +998912998479
        </a><br />
        phone number: <a class="link" href="tel:998912998479">+998 99 4740055 / +998912998479</a><br />
        telegram: <a class="link" href="https://t.me/998912998479">+998 99 4740055 / +998912998479</a>
        </div>
    `,
    ];

  function slide() {
    i++;
    if (i == dots.length) {
      i = 0;
    }
    dots.forEach((item) => {
      item.classList.remove("active");
    });
    dots[i].classList.add("active");
    slider.style.marginLeft = `-${i}00%`;
  }

  let autoPlay = setInterval(slide, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      i = index;
      clearInterval(autoPlay);
      autoPlay = setInterval(slide, 5000);
      dots.forEach((item) => {
        item.classList.remove("active");
      });
      dots[i].classList.add("active");
      slider.style.marginLeft = `-${i}00%`;
    });
  });

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      open.classList.remove("show");
      modal.classList.add("active");
      card.innerHTML = `
    ${information[index]}
    `;
    });
  });
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    card.innerHTML = `
    ${information[4]}
    `;
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.remove("active");
    }
  });

  menus.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("close")) {
        open.classList.remove("show");
      } else {
        open.classList.add("show");
      }
    });
  });

  cardClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});
