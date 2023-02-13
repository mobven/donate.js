type Options = {
  theme: string;
  message: string;
  title: string;
  highLight: string;
  position: string;
  links: Array<{ url: string; text: string; style: string }>;
};
class Donate {
  private options: Options;
  constructor(options: Options) {
    this.options = options;
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
      <div class="popup__content ${this.options.position}">
        <a id="popup__close" href="#" class="popup__close">
          <span class='close'>Kapat</span>
        </a>
        ${
          this.options.theme !== "dark"
            ? `<img src="./assets/img/right.png" alt="right" class="popup_right_corner" />
              <img src="./assets/img/left.png" alt="right" class="popup_left_corner" />`
            : ""
        }
        <div class="popup__header">
          <img src="./assets/img/logo.png" alt="logo" class="popup__logo" />
          <div class="header__title">
            <h1>${this.options.title} <span>${
      this.options.highLight
    }</span></h1>
          </div>
        </div>
        <div class="popup__body">
          <p>
           ${this.options.message}
          </p>
        </div>
        <div id="custom_links" class="popup__footer">
          <a target='_blank' href='https://www.afad.gov.tr/depremkampanyasi2' class="button green">AHBAP</a>
          <a target='_blank' href='https://www.afad.gov.tr/tr/yardim' class="button blue">AFAD</a>
          <a target='_blank' href='https://www.kizilay.org.tr/Bagis/BagisYap/404/pazarcik-depremi-bagisi' class="button red">Türk Kızılay</a>
        </div>
      </div>
    </div>`;
    document.body.appendChild(modal);

    const custom_links = document.getElementById("custom_links");
    this.options.links.forEach((link) => {
      const a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.setAttribute("class", "button");
      a.setAttribute("style", link.style);
      a.target = "_blank";
      a.innerHTML = link.text;
      custom_links?.appendChild(a);
    });

    const close = document.getElementById("popup__close");
    close?.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".popup")?.remove();
    });
  }
}

//@ts-ignore
window["Donate"] = Donate;
