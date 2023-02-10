# DONATE.JS

Donate.js WEB SDK to show donation alerts easily in your website.

## Examples

<p align="center">
  <img alt="UI" src="Docs/dark.png">
  <img alt="UI" src="Docs/light.png">
</p>

## Installation

```
https://github.com/mobven/iDonateAlert.git
```

## Usage

### Default initializer

iDonateAlert can be initialized through, which has default title and message those are presented in the screenshot above.

```bash
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
```
