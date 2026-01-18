import { getDataProduct, urlProduct } from "../services/fetch.js";

const dataProduct = await getDataProduct(urlProduct)

const queryString = new URLSearchParams(window.location.search)
const queryId = queryString.get('id')

const secDetailProduct = document.querySelector(".detail-product")

function renderData(dataProduct, queryId) {
    if (queryId > dataProduct.length && queryId < 1) {
        const error = new Error("Data tidak ditemukan")
        throw error
        return
    }
    
    const productById = dataProduct.find(product => {
        return product.id === Number(queryId)
    })
    // console.log("data produk = ", dataProduct)

    // console.log("product by id = ", productById)
    // console.log("query id = ", queryId)

    if (productById === undefined) {
        const error = new Error("Id produk tidak valid")
        throw error
        return
    }

    const wrapImages = document.createElement("div")
    wrapImages.setAttribute("class", "images")
    secDetailProduct.append(wrapImages)
    
    const mainImage = document.createElement("img")
    mainImage.setAttribute("src", productById.bigImage)
    mainImage.setAttribute("alt", productById.alt)
    wrapImages.append(mainImage)
    
    const divImgSmall = document.createElement("div")
    divImgSmall.setAttribute("class", "img-small")
    wrapImages.append(divImgSmall)

    const firstImage = document.createElement("img")
    firstImage.setAttribute("src", productById.imgUrl1)
    firstImage.setAttribute("alt", productById.alt)
    divImgSmall.append(firstImage)

    const secondImage = document.createElement("img")
    secondImage.setAttribute("src", productById.imgUrl2)
    secondImage.setAttribute("alt", productById.alt)
    divImgSmall.append(secondImage)

    const thirdImage = document.createElement("img")
    thirdImage.setAttribute("src", productById.imgUrl3)
    thirdImage.setAttribute("alt", productById.alt)
    divImgSmall.append(thirdImage)

    const wrapDesc = document.createElement("div")
    wrapDesc.setAttribute("class", "wrap-desc")
    secDetailProduct.append(wrapDesc)

    if (productById.flashSale) {
        const badgeFlashSale = document.createElement("span")
        badgeFlashSale.textContent = "FLASH SALE"
        wrapDesc.append(badgeFlashSale)
    }

    const titleDetailProduct = document.createElement("h1")
    titleDetailProduct.setAttribute("class", "h1-primary")
    titleDetailProduct.textContent = productById.name
    wrapDesc.append(titleDetailProduct)

    const divPrice = document.createElement("div")
    divPrice.setAttribute("class", "price")
    wrapDesc.append(divPrice)

    
    if (productById.flashSale) {
        const startPrice = document.createElement("span")
        startPrice.textContent = `IDR ${productById.price}`
        divPrice.append(startPrice)

        const promoPrice = document.createElement("p")
        promoPrice.textContent = `IDR ${productById.promoPrice}`
        divPrice.append(promoPrice)
    } else {
        const startPrice = document.createElement("p")
        startPrice.textContent = `IDR ${productById.price}`
        divPrice.append(startPrice)
    }


    const divStars = document.createElement("div")
    divStars.setAttribute("class", "stars")
    wrapDesc.append(divStars)

    for (let i=0; i < 5; i++) {
        const star = document.createElement("img")
        star.setAttribute("src", "/assets/images/star.svg")
        star.setAttribute("alt", "star")
        divStars.append(star)
    }

    const rate = document.createElement("p")
    rate.textContent = "5.0"
    divStars.append(rate)
    // console.log(rate)

    const divResume = document.createElement("div")
    divResume.setAttribute("class", "resume")
    wrapDesc.append(divResume)

    const reviewer = document.createElement("p")
    reviewer.textContent = "200+ Review"
    divResume.append(reviewer)

    const batas = document.createElement("p")
    batas.textContent = "|"
    divResume.append(batas)

    const recom = document.createElement("p")
    recom.textContent = "Recommendation"
    divResume.append(recom)

    const jempol = document.createElement("img")
    jempol.setAttribute("src", "/assets/images/ThumbsUp.svg")
    divResume.append(jempol)

    const description = document.createElement("p")
    description.textContent = productById.description
    description.setAttribute("class", "description")
    wrapDesc.append(description)

    const divBtnQty = document.createElement("div")
    divBtnQty.setAttribute("class", "btn-qty")
    wrapDesc.append(divBtnQty)

    const minQty = document.createElement("button")
    minQty.setAttribute("class", "min-qty")
    minQty.textContent = "-"
    divBtnQty.append(minQty)

    const inputQty = document.createElement("input")
    inputQty.setAttribute("type", "text")
    divBtnQty.append(inputQty)

    const plusQty = document.createElement("button")
    plusQty.setAttribute("class", "plus-qty")
    plusQty.textContent = "+"
    divBtnQty.append(plusQty)

    const divChoose = document.createElement("div")
    divChoose.setAttribute("class", "choose")
    wrapDesc.append(divChoose)

    const titleChoose = document.createElement("p")
    titleChoose.textContent = "Choose Size"
    divChoose.append(titleChoose)

    const divSize = document.createElement("div")
    divChoose.append(divSize)

    const regular = document.createElement("a")
    regular.setAttribute("href", "#")
    regular.textContent = "Regular"
    divSize.append(regular)

    const medium = document.createElement("a")
    medium.setAttribute("href", "#")
    medium.textContent = "Medium"
    divSize.append(medium)

    const large = document.createElement("a")
    large.setAttribute("href", "#")
    large.textContent = "Large"
    divSize.append(large)

    const divChooseHotIce = document.createElement("div")
    divChooseHotIce.setAttribute("class", "choose")
    wrapDesc.append(divChooseHotIce)

    const titleHotIce = document.createElement("p")
    titleHotIce.textContent = "Hot/Ice?"
    divChooseHotIce.append(titleHotIce)

    const divHotIce = document.createElement("div")
    divChooseHotIce.append(divHotIce)

    const ice = document.createElement("a")
    ice.setAttribute("href", "#")
    ice.textContent = "Ice"
    divHotIce.append(ice)

    const hot = document.createElement("a")
    hot.setAttribute("href", "#")
    hot.textContent = "Hot"
    divHotIce.append(hot)

    const divBtnProceed = document.createElement("div")
    divBtnProceed.setAttribute("class", "btn-proceed")
    wrapDesc.append(divBtnProceed)

    const btnBuy = document.createElement("a")
    btnBuy.textContent = "Buy"
    btnBuy.setAttribute("href", "#")
    divBtnProceed.append(btnBuy)

    const btnCart = document.createElement("a")
    btnCart.setAttribute("href", "#")
    divBtnProceed.append(btnCart)

    const imgBtnCart = document.createElement("img")
    imgBtnCart.setAttribute("src", "/assets/images/cart-yellow.svg")
    
    const addToCart = document.createElement("p")
    addToCart.textContent = "add to cart"

    btnCart.append(imgBtnCart, addToCart)

}

renderData(dataProduct, queryId)