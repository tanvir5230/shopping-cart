let unitQuantityContainer = document.getElementsByTagName("input")[0];
let itemPriceContainer = document.getElementsByTagName("h5")[1];
let itemPrice = parseInt(itemPriceContainer.innerText.replace("$", ""));
let unitPrice = itemPrice;
let plusSign = document.getElementsByClassName("fa-plus")[0].parentElement;
let minusSign = document.getElementsByClassName("fa-minus")[0].parentElement;
let unitValue = unitQuantityContainer.value;
unitValue = parseInt(unitValue);
function itemPriceIncrease() {
  itemPrice = unitValue * unitPrice;
  itemPriceContainer.innerText = "$" + itemPrice;
}
function increase() {
  unitValue += 1;
  unitQuantityContainer.value = unitValue;
  itemPriceIncrease();
}
function decrease() {
  if (unitValue > 0) {
    unitValue -= 1;
    unitQuantityContainer.value = unitValue;
    itemPriceIncrease();
  }
}
function removeItem() {
  this.parentElement.parentElement.parentElement.remove();
}
plusSign.addEventListener("click", increase);
minusSign.addEventListener("click", decrease);

let crossBtn = document.getElementsByClassName("remove-item")[0];
crossBtn.addEventListener("click", removeItem);
