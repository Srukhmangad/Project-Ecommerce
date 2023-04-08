function getAPI() {
  var search = document.getElementById("searchInput").value;
  const apiURL = `https://dummyjson.com/products/search?q=${search}`;

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // Check if any products were found
      if (data.products.length > 0) {
        // Display the details of the first product found
        const product = data.products[0];
        console.log(product.id);
        console.log(product.description);
        console.log(product.price);
        console.log(product.rating);
        document.getElementById("data").innerHTML = `ID = ${product.id}  `;
        document.getElementById("data").innerHTML += `Description = ${product.description}  `;
        document.getElementById("data").innerHTML += `Price = ${product.price}  `;
        document.getElementById("data").innerHTML += `Ratings = ${product.rating}  `;
      } else {
        // Display a message if no products were found
        document.getElementById("data").innerHTML = "No products found.";
      }
    })
    .catch(err => console.log(err));
}