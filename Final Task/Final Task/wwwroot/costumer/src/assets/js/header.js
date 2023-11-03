
getElements();


function getElements() {

    let productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        console.error("CategoryElement Idsi qeyde edilməyib.");
        return;
    }


    let product = header_tag_names.find(p => p.id === parseInt(productId));
    let productcategory = products.filter(p => p.headerTagNamesId === parseInt(product.id));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }


    let elements = document.querySelector(".header_links_mainText");
    let elementler = document.querySelector(".header_links_products");

    elements.innerHTML = `<h3 id="${product.id}">${product.name} </h3>`;


    for (let infolar of productcategory) {
        let infos = `
        <div class="card product-item" id="${infolar.categoryId}">
            <div class="card-photo">
            <a href='/src/pages/product.html?=${infolar.id}'
                <img src="${infolar.photo}" class="card-img-top" alt="...">
                <img src="${infolar.additionalPhotos[1]}" class="card-img-top img" alt="...">
            </a>
                </div>    
            <span class="sale">Sale</span>
            <div class="card-body">
                <h5 class="card-title">
            
                </h5>
                    <p class="card-text">${infolar.title}</p>
                    <div class="price">
                        <del>${infolar.price}$</del>
                        <span>${infolar.discount}$</span>
                    </div>
            </div>
        </div>
    `;
        elementler.insertAdjacentHTML("beforeend", infos);
    }
}

