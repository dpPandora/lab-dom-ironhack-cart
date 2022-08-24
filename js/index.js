// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quant = product.querySelector('.quantity input');
  //alert(price.innerText + quant.value);
  let subtotal = price.innerText * quant.value;
  //alert(subtotal);
  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");
  let total = 0;
  //alert(products.length);
  for (let index = 0; index < products.length; index++) {
    total += updateSubtotal(products[index]);
  }
  //alert(total);
  document.querySelector('#total-value span').innerText = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const prodcutName = document.querySelector('.create-product #inputName').value;
  const productPrice = document.querySelector('.create-product #inputPrice').value;

  let templateP = document.querySelector('#productTemplate');
  let pro = templateP.content.cloneNode(true);

  pro.querySelector(".name span").innerText = prodcutName;
  pro.querySelector(".price span").innerText = productPrice;

  console.log(templateP);

  let parent = document.querySelector('tbody');
  parent.appendChild(pro);

  document.querySelector('.create-product #inputName').value = "";
  document.querySelector('.create-product #inputPrice').value = 0;
  //parent.appendChild(templateP.content);
  //console.log(prodcutName);
  //console.log('hi');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelectorAll('.product .btn-remove').forEach((button) => {
    button.addEventListener('click', removeProduct)
  });

  const createBtn = document.querySelector('.create-product #create');
  createBtn.addEventListener('click', createProduct);
});
