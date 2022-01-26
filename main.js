import "./style.css";

const contactCard = document.getElementById("contact-card");
const shareBanner = document.getElementById("share-banner");
const shareButtonCard = document.getElementById("share-button-card");
const shareButtonSocial = document.getElementById("share-button-social");

shareButtonCard.addEventListener("click", (ev) => {
  contactCard.classList.replace("flex", "hidden");
  shareBanner.classList.replace("hidden", "flex");
});
shareButtonSocial.addEventListener("click", (ev) => {
  contactCard.classList.replace("hidden", "flex");
  shareBanner.classList.replace("flex", "hidden");
});
