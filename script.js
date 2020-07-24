let productNumber = document.getElementsByClassName("product").length;
for (let i = 0; i < productNumber; i++) {
  document
    .getElementsByClassName("fa-plus")
    [i].parentElement.addEventListener("click", increase);
  document
    .getElementsByClassName("fa-minus")
    [i].parentElement.addEventListener("click", decrease);
}
var unitPrice;
function increase() {
  let unitQuantityContainer = this.previousElementSibling;
  let unitQuantity = parseInt(unitQuantityContainer.value);
  let itemPriceContainer = this.parentElement.nextElementSibling;
  let itemPrice = parseInt(itemPriceContainer.innerText.replace("$", ""));
  if (unitQuantity == 0) {
    unitPrice = unitPrice;
  } else if (unitQuantity == 1) {
    unitPrice = itemPrice;
  } else {
    unitPrice = itemPrice / unitQuantity;
  }
  unitQuantity += 1;
  unitQuantityContainer.value = unitQuantity;
  itemPrice = unitQuantity * unitPrice;
  itemPriceContainer.innerText = itemPrice;
}
function decrease() {
  let unitQuantityContainer = this.nextElementSibling;
  let unitQuantity = parseInt(unitQuantityContainer.value);
  let itemPriceContainer = this.parentElement.nextElementSibling;
  let itemPrice = parseInt(itemPriceContainer.innerText.replace("$", ""));
  if (unitQuantity > 0) {
    if (unitQuantity == 1) {
      unitPrice = itemPrice;
    } else if (unitQuantity > 1) {
      unitPrice = itemPrice / unitQuantity;
    }
    unitQuantity -= 1;
    unitQuantityContainer.value = unitQuantity;
    itemPrice = unitPrice * unitQuantity;
    itemPriceContainer.innerText = itemPrice;
  }
}
