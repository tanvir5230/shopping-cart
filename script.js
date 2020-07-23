let unitQuantityContainer = document.getElementsByTagName("input")[0];
let itemPriceContainer = document.getElementsByTagName("h5")[1];
let itemPrice = parseInt(itemPriceContainer.innerText.replace("$", ""));
let unitPrice = itemPrice;
let plusSign = document.getElementsByClassName("fa-plus")[0].parentElement;
let minusSign = document.getElementsByClassName("fa-minus")[0].parentElement;
let unitValue = unitQuantityContainer.value;
unitValue = parseInt(unitValue);
function increase() {
  unitValue += 1;
  unitQuantityContainer.value = unitValue;
  itemPrice = unitValue * unitPrice;
  itemPriceContainer.innerText = "$" + itemPrice;
}
function decrease() {
  if (unitValue > 0) {
    unitValue -= 1;
    unitQuantityContainer.value = unitValue;
  }
}
plusSign.addEventListener("click", increase);
minusSign.addEventListener("click", decrease);
