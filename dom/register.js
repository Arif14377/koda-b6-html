const formRegister = document.getElementById("form-register")

formRegister.addEventListener("submit", function(event) {
    event.preventDefault()

    let data = []
    let dataBaru = {}

    const fullName = document.getElementById("fName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("pwd").value
    const reTypePw = document.getElementById("pwd2").value

    // console.log(fullName, email, password, reTypePw)
    
    dataLama = JSON.parse(window.localStorage.getItem("data"))
    // console.log("data lama = ", dataLama)

    if (!fullName || !email || !password || !reTypePw) {
        throw new Error("input tidak boleh kosong.")
    }

    if (dataLama) {
        dataLama.forEach(element => {
            if (element.email === email) {
                throw new Error("email sudah terdaftar.")
            }
        });
    }

    if (!email.includes("@") || !email.includes("mail")) {
        throw new Error("email tidak valid.")
    }

    if (password === reTypePw) {
        dataBaru = {
            name: fullName,
            email: email,
            password: password
        }
    } else {
        throw new Error("Password tidak sama.")
    }

    // console.log(dataBaru)


    if (dataLama) {
        data = dataLama
        data.push(dataBaru)
    } else {
        data.push(dataBaru)
    }

    window.localStorage.setItem("data", JSON.stringify(data))

    alert("Register success.")

    window.location.href = "./login.html"
})
