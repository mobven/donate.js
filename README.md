# Donate.JS

## Yükleme

    <link rel="stylesheet" href="./assets/css/style.css" />


    <script src="./donate.js><script>
    <script>
    const donate = new Donate({
      position:"center",
      links: [
          {
            text: "Örnek Bağış Linki",
            url: "https://www.google.com",
          },
        ],
      message:"Sample Message",
    })
    donate.init();
