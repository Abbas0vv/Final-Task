

const categories = [
    {
        id: 14,
        mainPhoto: "",
        name: 'Phone'
    },
    {
        id: 345,
        name: 'TV', mainPhoto: "",
    }
]


const categoryid = new URLSearchParams(window.location.search).get('id');
if (!categoryid) {
    alert("category id qeyd edilmey")
}


var currentCategory = categories.find(x => x.id == categoryid)

if (!currentCategory) {
    alert("category tapılmadı")
}
productInfo(categoryid);




function productInfo(id) {
    var productsHTML = document.querySelector('.products');

    // for () { }
    var mainProducts = products.filter(p => p.categoryid == id);

    for (var product of mainProducts) {

        let element = `
            <div class="product" data-id="${product.id}">
                <div class="card product-item">
             
                    <div class="card-body">
                    <div class="card-photo">
                    <img src="${product.img}" class="card-img-top" alt="...">
                    <img src="${product.hover}" class="card-img-top img" alt="...">
                </div>

                <button>
                    <i class="fa-solid fa-basket-shopping basket-icon"></i>
                </button>

                <span class="sale">Sale</span>
                        <h5 class="card-title">
                            <i class="fa-regular fa-star fa-2xs"></i>
                        </h5>
                        <p class="card-text">${currentCategory.category}</p>
                        <div class="price">
                            <del>${product.info.price}$</del>
                            <span>${product.info.discount}$</span>
                        </div>
                    </div>
                </div>
            </div>`;

        offcanvas.insertAdjacentHTML("beforeend", element);
    }


}
