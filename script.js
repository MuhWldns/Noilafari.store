const erorBtn = document.querySelectorAll('.btnErr');
const productsContainer = document.querySelectorAll('.products-container');
erorBtn.forEach(btn => {
    if (btn.addEventListener('click', function () {
            productsContainer.forEach(products => {
                products.innerHTML = `<h1>Coming Soon..</h1>`
            })
            erorBtn[0].addEventListener('click', function () {
                productsContainer.forEach(products => {
                    products.innerHTML = ui
                })
            })
        }));


})


const btnAbout = document.querySelector('.btnAbout')
btnAbout.addEventListener('click', function () {
    window.open('about.html')
})

const ui = `<div class="col-md-5 my-3">
<div class="card">
    <div class="card-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="Assets/noilafari1.webp" class="card-img-top" width="400px" alt="">

                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>NOILAFARI
                                "Human Nature"</h4>
                        </li>
                        <li class="list-group-item"><strong>Harga:</strong> 79.000</li>
                        <li class="list-group-item"><strong>Kategori:</strong> T-Shirt</li>
                    </ul>
                    <a class="btn btn-primary mt-2"
                        href="https://www.instagram.com/noilafari.industries/" role="button">BUY NOW</a>
                </div>
            </div>
        </div>

    </div>
</div>
</div>



</div>
<div class="row products-container">
<div class="col-md-5 my-3">
<div class="card">
    <div class="card-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="Assets/nlf2.0 cropped.webp" class="card-img-top" width="400px" alt="">

                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>NOILAFARI "gate of determination" T-Shirt</h4>
                        </li>
                        <li class="list-group-item"><strong>Harga:</strong> 83.000</li>
                        <li class="list-group-item"><strong>Kategori:</strong> T-Shirt</li>
                    </ul>
                    <a class="btn btn-primary mt-2"
                        href="https://www.instagram.com/noilafari.industries/" role="button">BUY NOW</a>
                </div>
            </div>
        </div>

    </div>
</div>
</div>



</div>`


console.log(erorBtn[0])