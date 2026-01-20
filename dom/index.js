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