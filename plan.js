document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".checkbtn");
  hamburger.onclick = function () {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };

  const method = document.querySelector(".method-card");
  const methodHeader = method.querySelector(".card-header");
  methodHeader.onclick = function () {
    card = method.querySelector(".preferences");
    card.classList.toggle("active");
    imageRotate = method.querySelector(".card-header-image");
    imageRotate.classList.toggle("active");
  };

  //..................What type of Coffee.....................
  function selectActiveElement(parentClassName, className) {
    document.querySelectorAll(`.${parentClassName} .child`).forEach((child) => {
      child.onclick = () => {
        document
          .querySelectorAll(`.${parentClassName} .child`)
          .forEach((item) => {
            item.classList.remove("active");
          });
        // document
        //   .querySelectorAll(`.num`)
        //   .forEach((item) => {
        //     item.classList.remove("active");
        //   });
        // Update order summary
        child.classList.add("active");
        document.querySelector(`[data-choice="${parentClassName}"]`).classList.add('active');
        document
          .querySelectorAll(`.${className}`)
          .forEach((item) => (item.innerHTML = child.children[0].innerHTML));
      };
    });
  }

  selectActiveElement("method-card", "selected-method");
  selectActiveElement("delivery-card", "selected-delivery");
  selectActiveElement("beans-card", "selected-bean");
  selectActiveElement("quantity-card", "selected-quantity");
  selectActiveElement("grind-card", "selected-grind");

  //..................What type of Coffee.....................

  const beans = document.querySelector(".beans-card");
  const beansHeader = beans.querySelector(".card-header");
  beansHeader.onclick = function () {
    card = beans.querySelector(".preferences");
    card.classList.toggle("active");
    imageRotate = beans.querySelector(".card-header-image");
    imageRotate.classList.toggle("active");
  };

  const quantity = document.querySelector(".quantity-card");
  const quantityHeader = quantity.querySelector(".card-header");
  quantityHeader.onclick = function () {
    card = quantity.querySelector(".preferences");
    card.classList.toggle("active");
    imageRotate = quantity.querySelector(".card-header-image");
    imageRotate.classList.toggle("active");
  };

  const grind = document.querySelector(".grind-card");
  const grindHeader = grind.querySelector(".card-header");
  grindHeader.onclick = function () {
    card = grind.querySelector(".preferences");
    card.classList.toggle("active");
    imageRotate = grind.querySelector(".card-header-image");
    imageRotate.classList.toggle("active");
  };

  const delivery = document.querySelector(".delivery-card");
  const deliveryHeader = delivery.querySelector(".card-header");
  deliveryHeader.onclick = function () {
    card = delivery.querySelector(".preferences");
    card.classList.toggle("active");
    imageRotate = delivery.querySelector(".card-header-image");
    imageRotate.classList.toggle("active");
  };
});
