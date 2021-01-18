var $productsContainer = document.querySelector('.products-container');
var $product = document.createElement('div');
var $productImage = document.createElement('img');
var $productInformation = document.createElement('div');
var $productName = document.createElement('div');
var $icons = document.createElement('div');
var $heartIcon = document.createElement('i');
var $cartPlus = document.createElement('i');

function render() {
  for(var i = 0; i < data.products.length; i++) {
    $product.className = 'product';
    $productImage.className = 'product-image';
    $productInformation.className = 'product-information';
    $productName.className = 'product-name';
    $icons.className = 'icons';
    $heartIcon.className = 'fa fa-heart';
    $heartIcon.setAttribute('aria-hidden', 'true');
    $cartPlus.className = 'fa fa-cart-plus';
    $cartPlus.setAttribute('aria-hidden', 'true');
    $productImage.setAttribute('src', data.products[i].imageUrl);
    $productImage.setAttribute('alt', data.products[i].name);
    $productsContainer.appendChild($product);
    $product.append($productImage, $productInformation);
    $productInformation.append($productName, $icons);
    $productName.innerHTML = data.products[i].name + '<br> $' + data.products[i].price;
    $icons.append($heartIcon, ' ', $cartPlus);

    $product = $product.cloneNode();
    $productImage = $productImage.cloneNode();
    $productInformation = $productInformation.cloneNode();
    $productName = $productName.cloneNode();
    $icons = $icons.cloneNode();
    $heartIcon = $heartIcon.cloneNode();
    $cartPlus = $cartPlus.cloneNode();
  }
}

window.addEventListener('load', render);
