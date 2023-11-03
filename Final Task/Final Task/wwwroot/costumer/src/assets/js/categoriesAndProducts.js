

getCategory();
productInfo();




function getCategory() {
    var elements = document.querySelector(".productsBox");

    if (!elements) {
        console.error(".productsBox elementi bulunamadi.");
        return;
    }

    for (var category of categories) {
        // phone_count //new 
        let productCount = products.filter(x => x.categoryId == category.id).length;
        let element = `
        <a href="src/pages/category.html?id=${category.id}">
            <div class="product" id="${category.id}" >
                <img src="${category.photo}" alt="">
                
                <div class="prduct_count">
                    <h2>
                        ${category.name} <p>${productCount} products</p>
                    </h2>
                </div>
            </div>
        </a>`;
        elements.insertAdjacentHTML("beforeend", element);
    }
}



function productInfo() {

    let favsProducts = JSON.parse( localStorage.getItem("fav") ?? '[]')
    let elementsInfo = document.querySelector(".cards");

    for (let element of products) {
        let favChecker= favsProducts.find(x=>x.id == element.id)  ?? null
        let info = `
        
        <div class="card product-item" id="${element.id}">
        <a href="src/pages/product.html?id=${element.id}">
            <div class="card-photo">
                <img src="${element.photo}" class="card-img-top" alt="...">
                <img src="${element.additionalPhotos[0]}" class="card-img-top img" alt="...">
            </div>  
        </a>  
        <div class="fav-icon">
        <i class="fa-solid fa-heart ${favChecker ? "active":""}"></i>
        </div>
            <span class="sale">Sale</span>
            <div class="card-body">
                    <p class="card-text">${element.title}</p>
                    <div class="price">
                        <del>${element.price}$</del>
                        <span>${element.discount}$</span>
                    </div>
              
            </div>
        </div>

    `;
        elementsInfo.insertAdjacentHTML("beforeend", info);
    }
}
