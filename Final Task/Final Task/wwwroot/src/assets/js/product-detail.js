



document.addEventListener("DOMContentLoaded", function () {
    productInfo();
})

function productInfo() {
    let info_side_category = document.querySelector(".info_side");
    let productCategory = document.querySelector("#products");

    const categoryId = new URLSearchParams(window.location.search).get('id');
   
    if (!categoryId) {
        console.error("CategoryElement Idsi qeyde edilməyib.");
        return;
    }


    const currentcategory = categories.find(p => p.id === parseInt(categoryId));
    // const productcategory = productsSurfaceInfo.find(p => p.categoryId === parseInt(product.id));

    if (!currentcategory) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }


    info_side_category.innerHTML = `
        <div id="${currentcategory.id}">
        ${currentcategory.name}
   
        </div>`;


    let similarProducts = products.filter(p => p.categoryId == categoryId);
    let categories_link = document.querySelector(".categories");

    console.log(categoryId)
    for (let items of similarProducts) {
        let item = `
                  
                    <div class="card product-item" id="${items.categoryId}">
              
                    <div class="card-body">
                    <div class="card-photo">
                    <img src="${items.photo}" class="card-img-top" alt="...">
                    <img src="${items.additionalPhotos[0]}" class="card-img-top img" alt="...">
                </div>    
                <span class="sale">Sale</span>
                        <h5 class="card-title">
                      
                        </h5>
                            <p class="card-text">${items.title}</p>
                            <div class="price">
                                <del>${items.price}$</del>
                                <span>${items.discount}$</span>
                            </div>
                    </div>
                </div>
                `;
        productCategory.insertAdjacentHTML("beforeend", item);
    }


    for (let links of categories) {
        let link = `
        <a href="category.html?id=${links.id}">
            <p class="categorie">${links.name}</p>
         </a> 
         `;
        categories_link.insertAdjacentHTML("beforeend", link);
    }
}


document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})


// backtotop 

let backtotop_button = document.getElementById("backtotop");
let header_fluid = document.querySelector(".header_fluid");
let main_menu = document.querySelector(".main_menu");


window.onscroll = function () {
    scrollEvent();
}

function scrollEvent() {
    let bodyheight = document.body.scrollHeight;
    let scrollHalfBody = bodyheight / 4;

    if (document.body.scrollTop > scrollHalfBody || document.documentElement.scrollTop > scrollHalfBody) {
        backtotop_button.style.opacity = 1;
        header_fluid.style.height = "55px";
        main_menu.style.display = "none";
    }
    else {
        backtotop_button.style.opacity = 0;
        header_fluid.style.height = "70px";
        main_menu.style.display = "block";
        main_menu.style.height = "53px"
    }

}
