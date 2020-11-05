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
let dashboard = document.querySelector(".dashboard");
console.log(pages)
console.log(survey)

function hidePages() {
    for (let page of pages) {
        page.style.display = "none";
    }
}

function hideTabs() {
    for (let tab of navigation) {
        tab.classList.remove("active")
    }
}

for (let i = 2; i < 6; i++) {
    navigation[i].addEventListener("click", () => {
        hidePages();
        hideTabs();
        pages[i - 2].style.display = 'block';
        dashboard.style.display = 'none';
        navigation[i].classList.add("active")
    })
}
navigation[1].addEventListener("click", () => {
    survey.style.display = 'block';
    hideTabs();
    navigation[0].classList.add("active");

})
navigation[0].addEventListener("click", () => {
    hidePages()
    hideTabs();
    navigation[0].classList.add("active")
    dashboard.style.display = 'grid';
})

const surveyClose = document.querySelector("#survey span.close");
const surveyIntro = document.querySelector("#survey .intro");
const introClose = document.querySelector("#survey .intro> button");
surveyClose.addEventListener("click", () => {
    survey.style.display = 'none';
})
introClose.addEventListener("click", () => {
    surveyIntro.style.display = 'none';
})