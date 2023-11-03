document.addEventListener('DOMContentLoaded', function () {
    getFavsFromLocalStorage();
    addProductToFavs();
});

function getFavsFromLocalStorage() {
    const storedFavs = localStorage.getItem('fav');
    if (storedFavs) {
        favs = JSON.parse(storedFavs);
    }
}


var productsList = document.querySelectorAll('.product-item');

let favs = [];


document.querySelector(".fa-heart").addEventListener("click", function (event) {
    let basket = document.querySelector(".cards .card");
    let basketCategory = document.querySelector("#products .card");
    event.preventDefault();

    console.log(basket);
    console.log(basketCategory);
});

productsList.forEach(product => {
    var basketIcon = product.querySelector('.fa-heart');
    var basketIcon1 = product.querySelector('.kalp');
    let stringFavsProducts = localStorage.getItem("fav");
    let isUserLoggedIn = false;

    // let userLoggedInOrNo = JSON.stringify(isUserLoggedIn);
    // localStorage.setItem("userLoggedInOrNo", userLoggedInOrNo);

    console.log("ji");

    basketIcon.addEventListener('click', (e) => {
        console.log("come on!");
        let getTrue = JSON.parse(sessionStorage.getItem("user"));
        if (!getTrue == true) {
            // alert("login");

            // let UserLoggedIn = true;
            // console.log(UserLoggedIn);
            // let userloggeddata = JSON.stringify(UserLoggedIn);
            // let userLoggedInOrNo = localStorage.setItem("logged", userloggeddata);

            // localStorage.getItem(userLoggedInOrNo);

            window.location.href = 'src/pages/login.html';
            return;
        }

        else {
            e.stopPropagation();
            var id = parseInt(product.id);
            var currentProduct = products.find(x => x.id == id);
            basketIcon.classList.toggle('active');

            if (!favs.some(item => item.id == currentProduct.id)) {
                favs.push(currentProduct);
                alertify.success('Added product');
                basketIcon.style.display = "block";

                // localStorage;
                let favsProducts = JSON.stringify(favs);
                localStorage.setItem("fav", favsProducts);
                let getFavsFromLocalStorage = JSON.parse(stringFavsProducts);
                // console.log(getFavsFromLocalStorage);

                addProductToFavs();
                // getFavsFromLocalStorage();

            } else {
                alertify.warning("There is product like that in favs!")
            }
        }
        // event.stopPropagation();
    })

})


function addProductToFavs() {
    let offcanvas = document.querySelector('.offcanvas-body');
    var numberOfFavProduct = favs.length;
    let icon_number = document.querySelector(".menu_link .number .fa-basket-shopping");
    offcanvas.innerHTML = '';
    let total = 0;
    let discount = 0;



    for (let element of favs) {
        total += +element.price;
        discount += +element.discount;
        var item = ` 
        <a href="#">
            <div class="product-item" id="${element.id}">
                <div class="off-canvas_photo">
                    <img src="${element.photo}" class="card-img-top card_basket_photo photo_width" style=height:200px alt="...">
                </div>      
                <div class="card-body offcanvas_product_body">
                
                    <div class="price">
                        <div class="price_item">
                            <del>${element.price}$</del> 
                            <span>${element.discount} $</span> 
                        </div>
                        <i id="${element.id}" class="fa-solid fa-trash"></i>
                    </div>
                    <div class="offcanvasProductName">
                    ${element.title}
                    </div>
                </div>
            </div>
          
        </a>`;
        offcanvas.insertAdjacentHTML("beforeend", item);
    }

    icon_number.innerHTML = `
    <div class="num">${numberOfFavProduct}</div>
    `;

    let totalPriceInfo = `  <div class="basket_price">
    <div class=" withoutDiscount"><p>Price without discount: ${total}$</p></div>
    <div class=" withDiscount"><p>Total price after discount : ${discount}$</p>
    </div>
    `;

    offcanvas.insertAdjacentHTML("beforeend", totalPriceInfo);

    let trashIcon = document.querySelectorAll(".fa-trash");
    trashIcon.forEach(minus => {
        minus.addEventListener("click", function () {
            let id = parseInt(minus.getAttribute('id')); // idni int. edir
            deleteproductFromFavs(id)
        });
    });
}


function deleteproductFromFavs(id) {
    let currentProduct = favs.find(item => item.id == id); // favsin icinden indexi tapir

    if (currentProduct) {
        favs.splice(currentProduct, 1);
        let favsProducts = JSON.stringify(favs);
        localStorage.setItem("fav", favsProducts);
        let stringFavsProducts = localStorage.getItem("fav");
        let getFavsFromLocalStorage = JSON.parse(stringFavsProducts);

        addProductToFavs(); // Call this function again to refresh the UI
    }
}
// 
document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})



// backtotop 

var backtotop_button = document.getElementById("backtotop");
var header_fluid = document.querySelector(".header_fluid");
var main_menu = document.querySelector(".main_menu");


window.onscroll = function () {
    scrollEvent();
}

function scrollEvent() {
    let bodyheight = document.body.scrollHeight;
    let scrollHalfBody = bodyheight / 4;

    if (document.body.scrollTop > scrollHalfBody || document.documentElement.scrollTop > scrollHalfBody) {
        backtotop_button.style.opacity = 1;
        header_fluid.style.height = "70px";
        main_menu.style.display = "none";
    }
    else {
        backtotop_button.style.opacity = 0;
        header_fluid.style.height = "70px";
        main_menu.style.display = "block";
        main_menu.style.height = "53px"
    }

}
