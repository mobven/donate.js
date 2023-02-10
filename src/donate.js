class Donate {
  options = {
    theme: "",
    message: "",
    title: "",
    highLight: "",
    position: "",
    links: [],
  };
  constructor(options) {
    this.options = { ...this.options, ...options };
    if (this.options.theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  init() {
    const modal = document.createElement("div");
    modal.innerHTML = `
    <div class="popup">
    <img src="./assets/img/heart1.png" alt="heart" class="popup__heart" />
    <img src="./assets/img/heart2.png" alt="heart" class="popup__heart" />
    <img src="./assets/img/heart3.png" alt="heart" class="popup__heart" />
    <img src="./assets/img/heart4.png" alt="heart" class="popup__heart" />
    <img src="./assets/img/heart5.png" alt="heart" class="popup__heart" />
      <div class="popup__content ${this.options.position}">
      <a id="popup__close" href="#" class="popup__close">
        <img src="./assets/img/close-circle.png" alt="heart" class="popup__heart" />
      </a>
        <img src="./assets/img/right.png" alt="right" class="popup_right_corner" />
        <img src="./assets/img/left.png" alt="right" class="popup_left_corner" />
        <div class="popup__header">
          <img src="./assets/img/logo.png" alt="logo" class="popup__logo" />
          <div class="header__title">
            <h1>${this.options.title} <span>${this.options.highLight}</span></h1>
          </div>
        </div>
        <div class="popup__body">
          <p>
           ${this.options.message}
          </p>
        </div>
        <div id="custom_links" class="popup__footer">
          <a target='_blank' href='https://ahbap.org/bagisci-ol' class="button green">AHBAP</a>
          <a target='_blank' href='https://www.afad.gov.tr/tr/yardim' class="button blue">AFAD</a>
          <a target='_blank' href='https://www.kizilay.org.tr/Bagis/BagisYap/404/pazarcik-depremi-bagisi' class="button red">Türk Kızılay</a>
        </div>
      </div>
    </div>`;
    document.body.appendChild(modal);
    const setRandomPosition = (element) => {
      const el = document.querySelector(element);
      console.log(el);
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    };

    for (let i = 0; i < 5; i++) {
      setRandomPosition(` .popup__heart:nth-child(${i + 1})`);
    }

    const custom_links = document.getElementById("custom_links");
    this.options.links.forEach((link) => {
      const a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.setAttribute("class", "button");
      a.setAttribute("style", link.style);
      a.target = "_blank";
      a.innerHTML = link.text;
      custom_links.appendChild(a);
    });

    const close = document.getElementById("popup__close");
    close.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".popup").remove();
    });
  }
}
