const erorBtn = document.querySelectorAll('.btnErr');
const productsContainer = document.querySelectorAll('.products-container');
erorBtn.forEach(btn => {
    if (btn.addEventListener('click', function () {
            productsContainer.forEach(products => {
                products.innerHTML = `<h1>Coming Soon..</h1>`
            })
        }));
})
console.log(productsContainer)