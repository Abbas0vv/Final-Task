
document.addEventListener("DOMContentLoaded", function () {
    info();
    rateProduct();
});


function info() {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        // console.error("Id qeyd edilməyib.");
        return;
    }


    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }

    let good = document.querySelector(".gallery-wrap");
    let feautures = document.querySelector(".feautures_ul");

    good.innerHTML = `
    <div data-id="${product.id}" class="gallery ">

        <div class="img-big-wrap img-thumbnail">
           <a target="_blank" href="${product.photo}" data-type="image" data-fslightbox="mygallery">
             <img src="${product.photo}" alt="">
            </a>
        </div>

        <div class="thumbs-wrap pt-2 additionalPhotos" style="text-align: center;">

        
        </div>    
        `;

    let additionalPhotos = document.querySelector(".additionalPhotos")
    let htmlOutput = '';
    product.additionalPhotos.forEach(photoUrl => {
        htmlOutput += `
            <a target="_blank" href="${photoUrl}" data-type="image" data-fslightbox="mygallery">
                <img width="60" height="60" src="${photoUrl}" alt="">
            </a>
        `;
    });

    document.querySelector('.additionalPhotos').innerHTML = htmlOutput;


    feautures.innerHTML = `
    <span class="infoWay"> 
    Home / ${product.category} / ${product.title}</span >
                             <h2 class="productName">
                                ${product.title}
                             </h2>
                            <p class="price price_info">${product.price}$</p>
                            <p>${product.discount}</p>
                           <span>Key feautures:</span>
                           
                           <li class="feauture"> ${product.guarantee}</li>
                            <li class="feauture"> ${product.size}</li>
                            <li class="feauture"> ${product.brand}</li>
                            <li class="feauture"> ${product.status}</li>
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star"></i></i></i></i></i>
                            `;

}

// rate product 
function rateProduct() {
    // let starIcon = document.querySelector(".fa-star");
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            star.classList.toggle("orange");
        });
    });
}
