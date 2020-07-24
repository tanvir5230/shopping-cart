let productNumber = document.getElementsByClassName("product").length;
for (let i = 0; i < productNumber; i++) {
  document
    .getElementsByClassName("fa-plus")
    [i].parentElement.addEventListener("click", increase);
  document
    .getElementsByClassName("fa-minus")
    [i].parentElement.addEventListener("click", decrease);
  document
    .getElementsByClassName("remove-item")
    [i].addEventListener("click", removeItem);
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
  subtotal();
  tax();
  total();
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
  subtotal();
  tax();
  total();
}

function removeItem() {
  this.parentElement.parentElement.parentElement.remove();
  subtotal();
  tax();
  total();
}
function subtotal() {
  let productPriceList = document.querySelectorAll(".number-spinner+h5");
  let subtotalContainer = document.querySelectorAll(".status>h5")[0];
  subtotalContainer.innerText = "";
  let subtotal = 0;
  for (let i = 0; i < productPriceList.length; i++) {
    let price = parseInt(productPriceList[i].innerText.replace("$", ""));
    subtotal += price;
  }
  subtotalContainer.innerText = "$" + subtotal;
  return subtotal;
}
function tax() {
  let taxContainer = document.querySelectorAll(".status>h5")[1];
  let tax = parseInt(taxContainer.innerText.replace("$", ""));
  return tax;
}
function total() {
  let totalContainer = document.querySelectorAll(".status>h5")[2];
  let total = subtotal() - tax();
  totalContainer.innerText = "";
  totalContainer.innerText = "$" + total;
}
