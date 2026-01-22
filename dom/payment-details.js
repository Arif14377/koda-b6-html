const data = JSON.parse(window.localStorage.getItem("cart"))


const items = document.querySelector(".items")

if (data) {
    const item = document.createElement("div")
    item.classList.add("item")
    items.append(item)

    const divWrapperDescPayment = document.createElement("div")
    item.append(divWrapperDescPayment)

    const imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", "/assets/images/image 31.png")
    imgProduct.setAttribute("alt", "product")
    divWrapperDescPayment.append(imgProduct)

    const descPaymentItem = document.createElement("div")
    descPaymentItem.classList.add("desc-payment-item")
    divWrapperDescPayment.append(descPaymentItem)

    const flashSale = document.createElement("span")
    flashSale.textContent = "FLASH SALE"
    descPaymentItem.append(flashSale)

    const productName = document.createElement("h3")
    productName.textContent = "Hazelnut Latte"
    descPaymentItem.append(productName)

    const variant = document.createElement("p")
    descPaymentItem.append(variant)

    const pcs = document.createElement("span")
    pcs.textContent = "2pcs"
    variant.append(pcs)

    variant.append(" | ")

    const size = document.createElement("span")
    size.textContent = "Regular"
    variant.append(size)

    variant.append(" | ")

    const hotIce = document.createElement("span")
    hotIce.textContent = "Ice"
    variant.append(hotIce)

    variant.append(" | ")

    const place = document.createElement("span")
    place.textContent = "Dine In"
    variant.append(place)

    const priceItem = document.createElement("p")
    descPaymentItem.append(priceItem)

    const priceOri = document.createElement("span")
    priceOri.textContent = "IDR40.000"
    priceItem.append(priceOri)

    priceItem.append("IDR20.000")

    const removeBtn = document.createElement("button")
    item.append(removeBtn)

    const imgRmBtn = document.createElement("img")
    imgRmBtn.classList.add("remove")
    imgRmBtn.setAttribute("src", "/assets/images/XCircle.svg")
    imgRmBtn.setAttribute("alt", "remove")
    removeBtn.append(imgRmBtn)
} else {
    const kosong = document.createElement("p")
    kosong.textContent = "Keranjang kosong."
    items.append(kosong)
}

// Calculate
