export const urlProduct = "https://raw.githubusercontent.com/Arif14377/koda-b6-html/refs/heads/main/data.json"

export async function getDataProduct(urlProduct) {
    const rsp = await fetch(urlProduct)

    if (!rsp.ok) {
        throw new Error("HTTP Error, ", rsp.status)
    }

    const dataProduct = await rsp.json()

    return dataProduct
}