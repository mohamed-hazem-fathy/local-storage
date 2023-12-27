//Select Element


let allSpan = document.querySelectorAll(".buttom span");
let results = document.querySelector(".results > span");
let theinput = document.getElementById("the-input");

allSpan.forEach(span => {
    span.addEventListener("click",(e)=> {
        if(e.target.classList.contains("item-check")) {
            checkItem();
        }
        if(e.target.classList.contains("add-item")) {
            addItem();
        }
        if(e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if(e.target.classList.contains("show-item")) {
            showItem();
        }
    })
});
function showMasage() {
    results.innerHTML="Input Cant Be Empty"
}
function checkItem() {
    if (theinput.value !== "" ) {

        if(localStorage.getItem(theinput.value)) {

            results.innerHTML = `found Local Storage item Called <span>${theinput.value}</span>`
        }
        else{
            results.innerHTML = `No Local Storage Item Width The Called <span>${theinput.value}</span>`
        }
        theinput.value = ""
    
    }else{
        showMasage() ;
            
    }
}
function addItem() {
    
    if (theinput.value !==""){
        localStorage.setItem(theinput.value,"Test");
        results.innerHTML = `local Storage add <span>${theinput.value}</span> item`
        theinput.value = ""
    }else{

        showMasage() ;
    }
}
function deleteItem() {
    if (theinput.value !== "" ) {

        if(localStorage.getItem(theinput.value)) {

            localStorage.removeItem(theinput.value);

            results.innerHTML = ` Local Storage item  <span>${theinput.value} Deleet</span>`
        }
        else{
            results.innerHTML = `No Local Storage Item Width The Called <span>${theinput.value}</span>`
        }
        theinput.value = ""
    
    }else{
        showMasage() ;
            
    }
}
function showItem() {
    if(localStorage.length) {

        results.innerHTML = ""

        for(let [key, value] of Object.entries(localStorage)){

            results.innerHTML += `<span class= "keys">${key}</span>`

        }


    }else{

        results.innerHTML = "Local storag Is Empty"

    }
}