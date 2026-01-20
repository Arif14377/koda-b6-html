export const urlTestimoni = "https://raw.githubusercontent.com/Arif14377/koda-b6-html/refs/heads/main/testimoni.json"

export async function getDataTestimoni(urlTestimoni) {
    const rsp = await fetch(urlTestimoni)

    if (!rsp.ok) {
        throw new Error("HTTP Error", rsp.status)
    }

    const data = await rsp.json()

    return data
}