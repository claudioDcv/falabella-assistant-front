const template = `
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

#assistant-offer-container #assistant-offer,
#assistant-offer-container.open #falabella-logo {
  display: none;
}

#assistant-offer-container.open {
  position: fixed;
  top: 20%;
  right: 30px;
}

#assistant-offer-container {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999999999999999999999;
}

#assistant-offer-container.open #assistant-offer,
#assistant-offer-container #falabella-logo {
  display: block;
}

#assistant-offer-container.open #close-buttom {
  display: block;
}

#assistant-offer-container #close-buttom {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: #aad500;
  color: #666666;
  font-weight: bold;
  right: 0px;
  border: 0px;
  text-align: center;
  top: -30px;
}

#assistant-offer-container #falabella-logo img {
  width: 60px;
  height: 90px;
  padding: 8px;
  background: #aad500;
}

#assistant-offer {
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  border: 5px solid #a3c714;
  background-color: #fff;
  width: 220px;
  height: auto;
  border-left: 4px solid #aad500;
  border-top: 4px solid #aad500;
  box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.15);
}

#assistant-offer .app-name {
  padding: 0px;
  margin: 0px;
  font-size: 22px;
  font-weight: bold;
  background-color: #aad500;
  padding: 10px 0;
  text-align: center;
  color: #fff;
}

#assistant-offer #assistant-offer-content {
  padding: 8px;
}

#assistant-offer .image img {
  width: 100%;
  height: auto;
}

#assistant-offer .title {
  font-weight: bold;
  font-size: 16px;
}

#assistant-offer .price {
  margin-top: 5px;
  color: #a50116;
  font-size: 22px;
  font-weight: bold;
}
</style>

<div id="assistant-offer-container" class="open">
<button id="close-buttom">X</button>
<div id="falabella-logo">
  <img
    src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzNiIgaGVpZ2h0PSI3NjgiIHZpZXdCb3g9IjAgMCAzMzYgNzY4Ij4KPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMwNy4yMjEgNDU0LjM3OHEtMTEuOTU3IDAtMjAuMjM0LTguNzM3dC04LjI3OC0yMC42OTQgOC4yNzgtMjAuNjk0IDIwLjIzNC04LjczNyAyMC4yMzQgOC43MzcgOC4yNzggMjAuNjk0LTguMjc4IDIwLjY5NC0yMC4yMzQgOC43Mzd6TTMzMy44OTMgMjMuMDI3bC05LjE5Ny0wLjkxOXQtMTUuNjM1IDAuOTE5cS05LjE5NyAxLjg0LTE1LjYzNSA1Ljk3OHQtMTIuODc2IDExLjQ5N3EtMTEuOTU3IDExLjk1Ni0xNy45MzUgMzEuNzN0LTEzLjMzNiA1Mi44ODRsLTM0Ljk0OSAxNzIuOTA4LTUuNTE4IDI1Ljc1MmgxMDQuODQ5bC00LjU5OCAxNC43MTZoLTEwMy4wMTBsLTYwLjcwMiAyODkuNzEzcS02LjQzOCAzMS4yNy0xNS4xNzYgNTcuOTQzdC0zMS43MyA0OC43NDVxLTE1LjYzNSAxNS42MzUtMzUuNDEgMjQuMzczdC00MC45MjggOC43MzhoLTEwLjExN2wxLjg0LTEwLjExN2g5LjE5N3ExMS45NTctMS44NCAyMC4yMzQtNi40Mzh0MTUuNjM1LTEzLjc5NXExMS4wMzctMTQuNzE2IDE3LjQ3NS0zMi4xOTF0MTMuNzk1LTUwLjU4NWw2Ni4yMi0zMTYuMzg1aC05NC43MzJsMy42NzktMTQuNzE2aDkzLjgxMmw2LjQzOC0yNy41OTIgMjguNTExLTE0NC4zOTdxNi40MzgtMzEuMjcxIDE1LjYzNS01Ny45NDN0MzEuMjctNDguNzQ1cTE1LjYzNS0xNS42MzUgMzUuNDEtMjQuMzczdDQwLjkyOC04LjczOGw2LjQzOCAwLjQ2dDExLjk1NyAwLjQ2bC0xLjg0IDEwLjExN3oiPjwvcGF0aD4KPC9zdmc+Cg=="
  />
</div>
<div id="assistant-offer">
  <h1 class="app-name">Falabella Assistant</h1>
  <a href="{{ link }}" target="_blank">
  <div id="assistant-offer-content">
    <div class="image">
      <img
        src="https://dummyimage.com/800x900/000/fff.png&text=Product"
      />
    </div>
    <div class="title">{{ name }}</div>
    <div class="price">{{ price }}</div>
  </div>
  </a>
</div>
</div>
`;

window.onload = () => {
  const loadjs = (url, callback) => {
    const script = document.createElement("script");
    script.setAttribute("src", chrome.extension.getURL(url));
    if (callback) {
      script.onload = callback;
    }
    document.body.appendChild(script);
  };

  const isAmazon = () => {
    if (
      location.host.includes("amazon") &&
      document.getElementById("productTitle") !== null
    ) {
      return true;
    }

    return false;
  };

  const isMercadoLibre = () => {
    if (
      location.host.includes("mercadolibre") &&
      document.querySelector("h1.ui-pdp-title") !== null
    ) {
      return true;
    }

    return false;
  };

  const getAmazonProduct = () => {
    return document.getElementById("productTitle").textContent.trim();
  };

  const getMercadoLivreProduct = () => {
    return document.querySelector("h1.ui-pdp-title").textContent.trim();
  };

  const getProductName = () => {
    if (isAmazon()) {
      return getAmazonProduct();
    }

    if (isMercadoLibre()) {
      return getMercadoLivreProduct();
    }

    return null;
  };

  loadjs("js/axios.js", () => {
    loadjs("js/mustache.js", mustacheLoaded);
  });

  const mustacheLoaded = () => {
    const productName = getProductName();
    if (productName === null) {
      return false;
    }

    axios
      .get(`http://localhost:8000/product-suggestion?search=${productName}`)
      .then((response) => {
        const root = document.createElement("div");

        if (response.data === {}) {
          return;
        }

        const element = Mustache.render(template, response.data);
        root.innerHTML = element;

        document.body.appendChild(root);

        document
          .getElementById("assistant-offer")
          .addEventListener("click", () => {
            document
              .getElementById("assistant-offer-container")
              .classList.toggle("open");
          });

        document
          .getElementById("falabella-logo")
          .addEventListener("click", () => {
            document
              .getElementById("assistant-offer-container")
              .classList.toggle("open");
          });

        document
          .getElementById("close-buttom")
          .addEventListener("click", () => {
            document.getElementById("assistant-offer-container").remove();
          });
      });
  };
};
