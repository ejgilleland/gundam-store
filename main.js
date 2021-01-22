
function createProduct(products) {
  var $product = document.createElement('div');
  var $productImage = document.createElement('img');
  var $productInformation = document.createElement('div');
  var $productName = document.createElement('div');
  var $icons = document.createElement('div');
  var $heartIcon = document.createElement('i');
  var $cartPlus = document.createElement('i');

  $product.className = 'product';
  $product.id = products.id;
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

  $heartIcon.addEventListener('click', function() {
    if ($heartIcon.className !== 'fa fa-heart fav') {
      data.favorites.push(products);
      $heartIcon.className += ' fav';
    }
  });
  return $product;
}

function render() {
  var $productsContainer = document.querySelector('.products-container');
  for(var i = 0; i < data.products.length; i++) {
    $productsContainer.appendChild(createProduct(data.products[i]));
  }
}

window.addEventListener('load', render);
