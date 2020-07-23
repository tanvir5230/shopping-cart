let itemPriceContainer = document.getElementsByTagName("h5")[1];
let itemPrice = parseInt(itemPriceContainer.innerText.replace("$", ""));
let unitPrice = itemPrice;
let plusSign = document.getElementsByClassName("fa-plus")[0].parentElement;
let minusSign = document.getElementsByClassName("fa-minus")[0].parentElement;
let unitValue;
let unitValueContainer;
function itemPriceIncrease() {
  itemPrice = unitValue * unitPrice;
  itemPriceContainer.innerText = "$" + itemPrice;
}

let productNumber = document.getElementsByClassName("product").length;
for (let i = 0; i < productNumber; i++) {
  document
    .getElementsByClassName("fa-plus")
    [i].parentElement.addEventListener("click", increase);
  document
    .getElementsByClassName("fa-minus")
    [i].parentElement.addEventListener("click", decrease);
}

function increase() {
  unitValueContainer = this.previousElementSibling;
  unitValue = parseInt(unitValueContainer.value);
  unitValue += 1;
  unitValueContainer.value = unitValue;
  event.stopPropagation();
}
function decrease() {
  unitValueContainer = this.nextElementSibling;
  unitValue = parseInt(unitValueContainer.value);
  if (unitValue > 0) {
    unitValue -= 1;
    unitValueContainer.value = unitValue;
  }
  event.stopPropagation();
}
function removeItem() {
  this.parentElement.parentElement.parentElement.remove();
}
plusSign.addEventListener("click", increase);
minusSign.addEventListener("click", decrease);

let crossBtn = document.getElementsByClassName("remove-item")[0];
crossBtn.addEventListener("click", removeItem);
