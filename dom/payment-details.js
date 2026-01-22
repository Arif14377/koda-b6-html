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
const sumOrder = document.querySelector(".sum-order")
const ongkir = document.querySelector(".ongkir")
const tax = document.querySelector(".tax")
const totalPayment = document.querySelector(".total-payment")

// data cart:
// name
// isFlashSale
// qty
// size 
// variant 
// place 
// oriprice
// price 

// calc function
// console.log(data)
const calcSumOrder = function(data) {
    let sum = 0
    if (!data) {
        return sum = 0
    } else {
        data.forEach(item => {
            if (item.isFlashSale) {
                sum = sum + item.price
            } else {
                sum = sum + item.oriPrice
            }
        });
        return sum
    }
}

const calcTaxOrder = function(calcSum, data) {
    const tax = 0.1
    let calcTax = 0

    if (!data) {
        return calcTax = 0
    } else {
        calcTax = calcSum * tax
        return calcTax
    }
}

const calcTotalOrder = function(calcSum, calcTax) {
    const total = calcSum + calcTax
    return total
}

const calcSum = calcSumOrder(data)
const calcTax = calcTaxOrder(calcSum, data)
const calcTotal = calcTotalOrder(calcSum, calcTax)

// console.log(calcSumOrder(data))

// dom
const pSumOrder = document.createElement("p")
pSumOrder.textContent = `${calcSum}`
sumOrder.append(pSumOrder)

const pOngkir = document.createElement("p")
pOngkir.textContent = "0"
ongkir.append(pOngkir)

const pTax = document.createElement("p")
pTax.textContent = `${calcTax}`
tax.append(pTax)
