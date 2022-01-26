import "./style.css";

const contactCard = document.getElementById("contact-card");
const shareBanner = document.getElementById("share-banner");
const shareButtonCard = document.getElementById("share-button-card");
const shareButtonCardImg = document.getElementById("share-button-card-img");
const shareButtonSocial = document.getElementById("share-button-social");
let bannerDisplayed = false;

shareButtonCard.addEventListener("click", (ev) => {
  if (!bannerDisplayed) {
    shareBanner.classList.replace("hidden", "flex");
    bannerDisplayed = true;
    shareButtonCard.classList.replace(
      "bg-lightGrayishBlue",
      "bg-desaturatedDarkBlue"
    );
    shareButtonCardImg.setAttribute("src", "images/icon-share-grey.svg");
  } else {
    shareBanner.classList.replace("flex", "hidden");
    bannerDisplayed = false;
    shareButtonCard.classList.replace(
      "bg-desaturatedDarkBlue",
      "bg-lightGrayishBlue"
    );
    shareButtonCardImg.setAttribute("src", "images/icon-share.svg");
  }
});

shareButtonSocial.addEventListener("click", (ev) => {
  if (bannerDisplayed) {
    shareBanner.classList.replace("flex", "hidden");
    bannerDisplayed = false;
    shareButtonCard.classList.replace(
      "bg-desaturatedDarkBlue",
      "bg-lightGrayishBlue"
    );
    shareButtonCardImg.setAttribute("src", "images/icon-share.svg");
  }
});
