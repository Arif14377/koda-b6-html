const form = document.getElementById("form-login")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("pwd").value

    const data = JSON.parse(window.localStorage.getItem("data"))

    if (!email || !password) {
        throw new Error("email dan password tidak boleh kosong.")
    }

    if (data) {
        data.forEach(element => {
            if (email === element.email && password === element.password) {
                alert("Login success")
                window.location.href = "../index.html"
            } else {
                throw new Error("Email atau password salah.")
            }
        });
    }

})