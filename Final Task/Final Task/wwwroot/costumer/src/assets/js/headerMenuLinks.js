
var menu = document.querySelector(".menu");
for (let links of header_tag_names) {

    let item = `
    <a href="src/pages/header_links_page.html?id=${links.id}" class="headerLinks_item">
        <li class="menu_link">
             ${links.name}
        </li>
    </a>
    `;
    menu.insertAdjacentHTML("beforeend", item);
}