const form = document.getElementById("form-forgot-password")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const email = document.getElementById("email").value
    const data = JSON.parse(window.localStorage.getItem("data"))

    if (!email) {
        throw new Error("Email tidak boleh kosong.")
    }

    if (data) {
        isEmailExist = data.find(element => element.email === email)

        if (isEmailExist) {
            alert("Reset password berhasil. Cek email Anda.")
            window.location.href = "./login.html"
        } else {
            throw new Error("Email tidak terdaftar.")
        }
    }
})