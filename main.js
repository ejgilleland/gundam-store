
function createProduct(products) {
  var $product = document.createElement('div');
  var $productImage = document.createElement('img');
  var $productInformation = document.createElement('div');
  var $productName = document.createElement('div');
  var $icons = document.createElement('div');
  var $heartIcon = document.createElement('i');
  var $cartPlus = document.createElement('i');

  $product.className = 'product';
  $product.setAttribute('data-product-id', products.id);
  $productImage.className = 'product-image';
  $productInformation.className = 'product-information';
  $productName.className = 'product-name';
  $icons.className = 'icons';
  $heartIcon.className = 'fa fa-heart';
  $heartIcon.setAttribute('aria-hidden', 'true');
  $cartPlus.className = 'fa fa-cart-plus';
  $cartPlus.setAttribute('aria-hidden', 'true');
  $productImage.setAttribute('src', products.imageUrl);
  $productImage.setAttribute('alt', products.name);

  $product.append($productImage, $productInformation);
  $productInformation.append($productName, $icons);
  $productName.innerHTML = products.name + '<br> $' + products.price;
  $icons.append($heartIcon, ' ', $cartPlus);

  return $product;
}

function render() {
  var $productsContainer = document.querySelector('.products-container');
  for(var i = 0; i < data.products.length; i++) {
    $productsContainer.appendChild(createProduct(data.products[i]));
  }

  $productsContainer.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'i') {
      var selectedProductId = parseInt(event.target.closest('.product').dataset.productId);
      if (event.target.className === 'fa fa-heart') {
        event.target.className += ' fav';
        for (var i = 0; i < data.products.length; i++) {
          if (data.products[i].id === selectedProductId) {
            data.favorites.push(data.products[i]);
          }
        }
      }
      if (event.target.className === 'fa fa-cart-plus') {
        event.target.className += ' in-cart';
        for (var i = 0; i < data.products.length; i++) {
          if (data.products[i].id === selectedProductId) {
            data.cart.push(data.products[i]);
          }
        }
      }
    }
  });

}

window.addEventListener('load', render);
