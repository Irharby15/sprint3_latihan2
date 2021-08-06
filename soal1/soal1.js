function newCallback(nama, Pulang) {
    console.log(nama);
    Pulang()
}

function myCallback(asal) {
    var asal = "Pulang kampung"
    console.log(asal);
    var peluang = () => {
        console.log(nama, asal);
    }
}
newCallback("adit yusuf", myCallback)