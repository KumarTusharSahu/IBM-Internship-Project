import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronic.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"





let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")



inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl)
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})

/*function reuble*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}






/****womenEthic */
renderSubMenu("womenEthic", WomenEthnic)

/****WomenWestern */
renderSubMenu("womenWestern", WomenWestern)

//Men 
renderSubMenu("men", Men)

/***kids */
renderSubMenu("kids", Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen", HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth", BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWarId", BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId", Electronics)



/**********product section***************/
import ProductData from "./meesho/data.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []

document.addEventListener("click", (e) => {

    const analogEl = document.getElementById("analogWatch").checked
    const banglesEl = document.getElementById("bangles").checked
    const bedsheetsEl = document.getElementById("bedsheets").checked
    const bikecoversEl = document.getElementById("bikecovers").checked
    const blousesEl = document.getElementById("blouses").checked
    const bluetoothEl = document.getElementById("bluetooth").checked
    const braEl = document.getElementById("bra").checked
    const carcoversEl = document.getElementById("carcovers").checked
    const cupsEl = document.getElementById("cups").checked
    const dressEl = document.getElementById("dress").checked
    const dupattasetEl = document.getElementById("dupattaset").checked
    const dupattaEl = document.getElementById("dupatta").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const ChainsEl = document.getElementById("chains").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked

    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        analogEl && el.category == "analogWatch" ||
        banglesEl && el.category == "bangles" ||
        bedsheetsEl && el.category == "bedsheets" ||
        bikecoversEl && el.category == "bikecovers" ||
        blousesEl && el.category == "blouses" ||
        braEl && el.category == "bra" ||
        carcoversEl && el.category == "carcovers" ||
        cupsEl && el.category == "cups" ||
        dressEl && el.category == "dress" ||
        dupattasetEl && el.category == "dupattaset" ||
        dupattaEl && el.category == "dupatta" ||
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch"
    ))

    renderProductData()


})

function renderProductData(){
    let filterDataHTML = "";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        })
    }
    else{
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        }) 
    }
    
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
} 
renderProductData()




function ClickProduct(id){
    localStorage.setItem("productId",JSON.stringify(id))
    // window.location("./page/product.html")

    alert("hii")
}






  
  
















