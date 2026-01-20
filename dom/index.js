import { getDataTestimoni, urlTestimoni } from "../services/fetch-testimoni.js";
import { getDataProduct, urlProduct } from "../services/fetch.js";

const dataProduct = await getDataProduct(urlProduct)
// console.log(dataProduct)

const wrapperProducts = document.querySelector(".list-product")

dataProduct.forEach(product => {
    const wrapperItemProduct = document.createElement("div")
    wrapperItemProduct.setAttribute("class", "item-product")
    wrapperProducts.append(wrapperItemProduct)

    const divInside = document.createElement("div")
    divInside.setAttribute("class", "wrapper-inside-item-product")
    wrapperItemProduct.append(divInside)

    const divImage = document.createElement("div")
    divInside.append(divImage)
    
    const imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", product.imgUrl)
    imgProduct.setAttribute("alt", product.alt)
    divImage.append(imgProduct)

    const wrapperDescItem = document.createElement("div")
    wrapperDescItem.setAttribute("class", "wrapper-desc-item")
    divInside.append(wrapperDescItem)

    const productName = document.createElement("h3")
    productName.textContent = product.name
    wrapperDescItem.append(productName)

    const productDesc = document.createElement("p")
    productDesc.textContent = product.description
    wrapperDescItem.append(productDesc)

    const price = document.createElement("span")
    price.setAttribute("class", "price")
    price.textContent = `IDR ${product.price}`
    wrapperDescItem.append(price)

    const wrapperCta = document.createElement("div")
    wrapperCta.setAttribute("class", "home-btn-product")
    wrapperDescItem.append(wrapperCta)

    const wrapperBtnBuy = document.createElement("p")
    wrapperCta.append(wrapperBtnBuy)

    const btnBuy = document.createElement("a")
    btnBuy.setAttribute("href", `/pages/detail-product.html?id=${product.id}`)
    btnBuy.textContent = "Buy"
    wrapperBtnBuy.append(btnBuy)

    const btnCart = document.createElement("a")
    btnCart.setAttribute("href", "/pages/payment-details.html")
    wrapperCta.append(btnCart)

    const iconBtnCart = document.createElement("img")
    iconBtnCart.setAttribute("src", "/assets/images/cart-yellow.svg")
    btnCart.append(iconBtnCart)
});

const dataTestimoni = await getDataTestimoni(urlTestimoni)
// console.log(dataTestimoni)

let i = 0

function renderTestimoni(i) {
    const inTestimoni = document.querySelector(".in-testimoni")
    const divImgTestimoni = document.querySelector(".img-testimoner")

    divImgTestimoni.innerHTML = ""
    inTestimoni.innerHTML = ""
    
    const imgTestimoner = document.createElement("img")
    imgTestimoner.setAttribute("src", dataTestimoni[i].imageUrl)
    imgTestimoner.setAttribute("alt", "customer")
    divImgTestimoni.append(imgTestimoner)

    // console.log(dataTestimoni[2].imageUrl)



    const hTestimoni = document.createElement("h2")
    hTestimoni.textContent = "TESTIMONIAL"
    inTestimoni.append(hTestimoni)

    const divWrapNameTestimoner = document.createElement("div")
    divWrapNameTestimoner.classList = "wrapper-name-testimoner"
    inTestimoni.append(divWrapNameTestimoner)

    const garisVertical = document.createElement("div")
    garisVertical.classList = "garis-vertical"
    divWrapNameTestimoner.append(garisVertical)

    const nameTestimoner = document.createElement("h3")
    nameTestimoner.textContent = `${dataTestimoni[i].name}`
    divWrapNameTestimoner.append(nameTestimoner)

    const occup = document.createElement("p")
    occup.classList = "occup"
    occup.textContent = `${dataTestimoni[i].occupation}`
    inTestimoni.append(occup)

    const quote = document.createElement("p")
    quote.classList = "quote"
    quote.textContent = `${dataTestimoni[i].testimoni}`
    inTestimoni.append(quote)

    const stars = document.createElement("div")
    stars.classList = "stars"
    inTestimoni.append(stars)

    for (let j = 0; j < dataTestimoni[i].stars; j++) {
        const imgStar = document.createElement("img")
        imgStar.setAttribute("src", "/assets/images/star.svg")
        stars.append(imgStar)
    }
}

renderTestimoni(i)

const kiri = document.getElementById("kiri")
const kanan = document.getElementById("kanan")

kanan.addEventListener("click", event => {
    event.preventDefault()

    if (i >= dataTestimoni.length-1) {
        i = 0
    } else {
        i = i + 1
    }
    renderTestimoni(i)
})

kiri.addEventListener("click", event => {
    event.preventDefault()

    if (i <= 0) {
        i = dataTestimoni.length-1
    } else {
        i = i- 1
    }
    renderTestimoni(i)
})