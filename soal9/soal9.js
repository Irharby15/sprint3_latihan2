function login(Email, Password) {
    var email = "admin@pondokprogramer"
    var password = "password"

    function ceklogin() {
        if (Email == email) {
            return true

        } else {
            return false
        }
    }

    function cekpassword() {
        if (Password == password) {
            return true
        } else {
            return false
        }
    }
    if (ceklogin() == true) {
        return "selamat datang"
    } else {
        return "email dan password anda salah"
    }
    if (cekpassword() == true) {
        return "di system kami"
    } else {
        return "back login"
    }

}
var login = prompt(login(), "masukan email dan passwrd")