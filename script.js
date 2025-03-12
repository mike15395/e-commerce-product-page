//mobile/tablet view menu selectors
const menuSidebar = document.querySelector(".menu-sidebar");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

//quantity increment and decrement with quantity count
const incrementButton = document.querySelector(".increment-button");
const decrementButton = document.querySelector(".decrement-button");
let quantityCount = document.querySelector(".quantity-count");

//cart icon selectors with cart count
let cartIconCount = document.getElementById("cart-count");
const addToCartButton = document.querySelector(".add-to-cart-button");
const cartIcon = document.querySelector(".cart-icon");
const cartContentcontainer = document.querySelector(".cart-content-container");
let cartContent = document.querySelector(".cart-content");
let cartQuantity = document.querySelector(".quantity");

//initialize quantitycount as 0
quantityCount.textContent = 0;

//toggle mobile/tablet menu sidebar
menuIcon.addEventListener("click", function (e) {
  menuSidebar.style.display = "flex";
});

closeIcon.addEventListener("click", function (e) {
  menuSidebar.style.display = "none";
});

//update quantity on clicking on + an - icons
incrementButton.addEventListener("click", function () {
  quantityCount.textContent++;
});

decrementButton.addEventListener("click", function () {
  if (quantityCount.textContent === "0") {
    alert("quantity can't be less than 0");
    return;
  }
  quantityCount.textContent--;
});

//add-to-cart button functionality
addToCartButton.addEventListener("click", function () {
  if (Number(quantityCount.textContent) > 0) {
    cartIconCount.textContent = quantityCount.textContent;
    cartIconCount.style.display = "block";
  } else {
    alert("add some quantity first");
    return;
  }
});

//display cart contents on click of cart icon
cartIcon.addEventListener("click", function () {
  const cartData = `<div class="cart-content-sub-container">
  <img src="./images/image-product-1.jpg" alt="product-image" class="cart-product-image">
  <div class="cart-info">
      <span class="product-name">Fall Limited Edition Sneakers</span>
      <div class="price-quantity-container">
        <span class="price">$125 x</span>
        <span class="quantity">${cartIconCount.textContent}</span>
        <span class="cart-total-amount"> <b>$${
          Number(cartIconCount.textContent) * 125
        }</b></span>
      </div>
  </div>
  <img src="./images/icon-delete.svg" alt="icon-delete" class="cart-delete-icon">
</div>
<button class="checkout-button">Checkout</button>`;

  if (cartContentcontainer.style.display === "none") {
    cartContentcontainer.style.display = "block";
    if (Number(quantityCount.textContent) === 0) {
      cartContent.innerHTML = `<div class="cart-empty-text">Your Cart is Empty</div>`;
    } else {
      cartContent.innerHTML = cartData;
    }
  } else {
    cartContentcontainer.style.display = "none";
  }
});

//lightbox modal code for desktop view only

// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

// This is your logic for the light box. It will decide which slide to show
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}
