const arr = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"];

arr.forEach(element => {
  let url = `https://dummyjson.com/products/category/${element}`;

  const categorySection = document.createElement("section");
  categorySection.classList.add("category");

  const categoryHeading = document.createElement("h2");
  categoryHeading.textContent = element.charAt(0).toUpperCase() + element.slice(1);
  categorySection.appendChild(categoryHeading);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards");
  categorySection.appendChild(cardsContainer);

  document.body.appendChild(categorySection);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;
        card.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = product.title;
        card.appendChild(title);

        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = "$" + product.price.toFixed(2);
        card.appendChild(price);

        if (product.discountPercentage > 0) {
          const discount = document.createElement("span");
          discount.classList.add("discount");
          discount.textContent = "-" + product.discountPercentage.toFixed(2) + "%";
          price.appendChild(discount);
          price.classList.add("discounted");
        }

        cardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
