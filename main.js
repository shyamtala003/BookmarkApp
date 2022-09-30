// code for dropdown form

let formOpenBtn = document.querySelector('.add');
let dropDownForm = document.querySelector('.drop__down__form');
let formCloseBtn = document.querySelector('#close__form');


formOpenBtn.addEventListener("click", () => {
    if (dropDownForm.classList.contains("drop__down__show")) {
        dropDownForm.classList.add("drop__down__close");
        dropDownForm.classList.remove("drop__down__show")
    } else {
        dropDownForm.classList.add("drop__down__show");
        dropDownForm.classList.remove("drop__down__close");
    }
})

formCloseBtn.addEventListener("click", () => {
    dropDownForm.classList.add("drop__down__close")
})



// code for print data in DOM
let bookmarkContainer = document.querySelector('.bookmark__container');


function allStorageData() {
    var archive = [];
    for (var i = 0; i < localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }

    return archive;
}


function allStorageKey() {

    keys = Object.keys(localStorage),
        i = keys.length;

    return keys;
}

let printDom = () => {
    let key = allStorageKey();
    let data = allStorageData();

    bookmarkContainer.innerHTML = "";

    for (let i = 0; i < key.length; i++) {

        let favicon = `http://www.google.com/s2/favicons?domain=${data[i]}`;
        bookmarkContainer.innerHTML += `
            <div class="card">
            <button class="close" data-title=${key[i]} onclick="removeBookmark(this)"><ion-icon name="close-outline"></ion-icon></button>
            
            <div class="image">
                <img src=${favicon} alt="" class="favicon">
            </div>
    
            <div class="text">
                <p class="site__name">${key[i]}</p>
                <a href=${data[i]} class="url">${data[i]}</a>
            </div>
            `;
    }
}

printDom();



//code for store data into localstorage

let saveBookmark = () => {
    let title = document.getElementById('title');
    let url = document.getElementById('url');
    localStorage.setItem(title.value, url.value);

    title.setAttribute("value","");
    url.setAttribute("value","");

    dropDownForm.classList.add("drop__down__close");
    dropDownForm.classList.remove("drop__down__show")
    printDom();
}


// code for remove data from localstorage

let removeBookmark = (el) => {
    let title = el.getAttribute("data-title");
    localStorage.removeItem(title);
    printDom();
}