const links = [
  {
    title: "Afet Bilgi Sitesi",
    url: "https://www.afetbilgi.com",
  },
  {
    title: "Afet Çözüm - Tüm Yardım Linkleri",
    url: "https://afetcozum.com",
  },
  {
    title: "Afet Destek",
    url: "https://afetdestek.com",
  },
  {
    title: "Afet Haritası",
    url: "https://afetharita.com/",
  },
  {
    title: "Ahbap",
    url: "https://twitter.com/ahbap",
  },
  {
    title: "Deprem Enkaz Haritası",
    url: "https://depremenkaz.xyz/",
  },
  {
    title: "Deprem güvenli bölgeler Haritası",
    url: "https://www.google.com/maps/d/u/1/viewer?mid=1aQ0TJi4q_46XAZiSLggkbTjPzLGkTzQ&ll=37.06301742072887%2C37.28739713964324&z=9",
  },
  {
    title: "Enkaz Dinleme uygulaması",
    url: "https://web.itu.edu.tr/sariero/dinleme.html?fbclid=PAAabbvVvqgKsFHaaPV8b1RjzuerCq1hwvEubQkyvzFjt8T71AleGIwpflHrs",
  },
  {
    title: "Ev İlanları",
    url: "https://misafirol.org/?fbclid=PAAabqZsyepBcJ0WaBhEn8erCckSG9Bo5alcRIQvxMH8dh_nnrA6RtuCReeMs",
  },
  {
    title: "İhtiyaç Haritası",
    url: "https://twitter.com/ihtiyacharitasi",
  },
  {
    title: "Afet ve Acil Durum Yönetimi Başkanlığı",
    url: "https://twitter.com/AFADBaskanlik",
  },
  {
    title: "Yakınımı Bul- Hastane Listesi",
    url: "https://yakinimibul.net/",
  },
];

const donations = [
  {
    title: "AFAD'a bağış yap",
    url: "https://www.afad.gov.tr/tr/yardim",
  },
  {
    title: "Ahbap'a bağış yap",
    url: "https://ahbap.org/bagisci-ol",
  },
  {
    title: "Ahbap'a Kripto bağış yap",
    url: "https://twitter.com/ahbap/status/1622962238372937730",
  },
  {
    title: "Hepsiburada'dan bağış yap",
    url: "https://www.hepsiburada.com/deprem-seferberligi",
  },
  {
    title: "Trendyol'dan bağış yap",
    url: "https://www.trendyol.com/sr?cid=619322",
  },
  {
    title: "Yemeksepeti'nden bağış yap",
    url: "https://www.yemeksepeti.com/shop/w88l/yardim-marketi",
  },
  {
    title: "Getir'den bağış yap",
    url: "https://media.discordapp.net/attachments/831980985967968317/1072887158949560350/ed3afa59-3429-4509-a15d-4b65addb418d.png?width=640&height=1138",
  },
  {
    title: "Kızılay'a bağış yap",
    url: "https://www.kizilay.org.tr/Bagis/BagisYap/404/pazarcik-depremi-bagisi",
  },
  {
    title: "UNIFEF'e bağış yap",
    url: "https://bagis.unicefturk.org/turkiye_earthquake",
  },
];

class AfetYardim {
  options = {
    position: "bottom",
    message: "",
    buttonText: "",
  };
  constructor(options) {
    this.options = { ...this.options, ...options };
  }
  init() {
    const nav = document.createElement("div");
    nav.style.position = "fixed";
    nav.style.marginLeft = "auto";
    nav.style.marginRight = "auto";
    nav.style.bottom = this.options.position === "bottom" ? "0" : "auto";
    nav.style.top = this.options.position === "top" ? "0" : "auto";
    nav.style.left = "0";
    nav.style.height = "auto";
    nav.style.padding = "10px 0";
    nav.style.width = "100%";
    nav.style.right = "0";
    nav.style.zIndex = "9999";
    nav.style.backgroundColor = "#333";

    nav.innerHTML = `
      <div style='display:flex;margin:0 auto;height:auto;max-width:1100px;justify-content:space-between;align-items:center;' class="help__center__content">
        <p style='color:#fff'>${this.options.message}</p>
        <button id="help__button" style='background:#333;border:1px solid #fefefe;color:#fff;padding:10px 20px;cursor:pointer;' class="help__center__close">${this.options.buttonText}</button>
      </div>`;
    document.body.appendChild(nav);

    const helpButton = document.getElementById("help__button");
    helpButton.addEventListener("click", this.help);
  }
  help() {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.right = "0";
    modal.style.bottom = "0";
    modal.style.backgroundColor = "rgba(0,0,0,0.5)";
    modal.style.zIndex = "9999";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    modal.innerHTML = `
      <div id="modal__inner" style='background:#000;padding:20px;border-radius:5px;position:relative'>
        <div class="help__center__content" style='display:grid;grid-template-columns:repeat(2,1fr);gap:100px'>
          <div class="required__links">
            <h2 style='color:white;text-align:center'>Faydalı Linkler</h3>
            <div id="required__links"></div>
          </div>
          <div class="donation__links">
            <h2 style='color:white;text-align:center'>Bağış Yap</h3> 
            <div id="donation__links"></div>
          </div>
        </div>
        <button id="close__modal" style='background:#333;border:1px solid #fefefe;color:#fff;padding:10px 20px;cursor:pointer;position:absolute;bottom:20px;right:20px;' class="help__center__close">Kapat</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = document.getElementById("close__modal");
    closeModal.addEventListener("click", () => {
      modal.remove();
    });


    const requiredLinks = document.getElementById("required__links");

    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";
    ul.style.margin = "0";
    for (let i = 0; i < links.length; i++) {
      const li = document.createElement("li");
      li.style.height = "40px";
      li.style.marginBottom = "10px";
      li.style.border = "1px solid #2F3336";
      li.style.flex = "1";
      li.style.borderRadius = "5px";
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.justifyContent = "center";

      const a = document.createElement("a");
      a.href = links[i].url;
      a.style.color = "#333";
      a.style.textDecoration = "none";
      a.style.color = "#fff";
      a.style.padding = "0 10px";
      a.target = "_blank";
      a.innerText = links[i].title;
      li.appendChild(a);
      ul.appendChild(li);
    }
    requiredLinks.appendChild(ul);

    const donationLinks = document.getElementById("donation__links");

    const donationUl = document.createElement("ul");
    donationUl.style.listStyle = "none";
    donationUl.style.padding = "0";
    donationUl.style.margin = "0";
    for (let i = 0; i < donations.length; i++) {
      const li = document.createElement("li");
      li.style.height = "40px";
      li.style.marginBottom = "10px";
      li.style.border = "1px solid #2F3336";
      li.style.flex = "1";
      li.style.borderRadius = "5px";
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.justifyContent = "center";
      const a = document.createElement("a");
      a.style.color = "#fff";
      a.style.textDecoration = "none";
      a.href = donations[i].url;
      a.style.padding = "0 10px";
      a.target = "_blank";
      a.innerText = donations[i].title;
      li.appendChild(a);
      donationUl.appendChild(li);
    }
    donationLinks.appendChild(donationUl);
  }
}
