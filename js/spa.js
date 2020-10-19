// "use strict";

// // hide all pages
// function hideAllPages() {
//     let pages = document.querySelectorAll(".page");
//     for (let page of pages) {
//         page.style.display = "none";
//     }
// }

// // show page or tab
// function showPage(pageId) {
//     hideAllPages();
//     document.querySelector(`#${pageId}`).style.display = "block";
//     setActiveTab(pageId);
// }

// // sets active tabbar/ menu item
// function setActiveTab(pageId) {
//     let pages = document.querySelectorAll("nav>ul li");
//     for (let page of pages) {
//         if (`#${pageId}` === page.getAttribute("href")) {
//             page.classList.add("active");

//         } else {
//             page.classList.remove("active");
//         }
//     }
// }

// // navigate to a new view/page by changing href
// function navigateTo(pageId) {
//     location.href = `#${pageId}`;
// }

// // set default page or given page by the hash url
// // function is called 'onhashchange'
// function pageChange() {
//     let page = "home";
//     if (location.hash) {
//         page = location.hash.slice(1);
//     }
//     showPage(page);
// }

// pageChange(); // called by default when the app is loaded for the first time

const navigation = document.querySelectorAll("nav ul li");
let pages = document.querySelectorAll("#home .page");
let survey = document.querySelector("#survey");
console.log(pages)
console.log(survey)

function hidePages() {
    for (let page of pages) {
        page.style.display = "none";
    }
}

for (let i = 2; i < 6; i++) {
    navigation[i].addEventListener("click", () => {
        hidePages();
        pages[i - 2].style.display = 'block';
    })
}
navigation[1].addEventListener("click", () => {
    survey.style.display = 'block';
})
navigation[0].addEventListener("click", () => {
    hidePages()
})