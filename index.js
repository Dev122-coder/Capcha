var p = document.querySelector(".canva p")

var currentcode = ""

var items = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function capcha() {

    currentcode = ""

    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(Math.random() * items.length)
        currentcode = currentcode + items[random_index];
    }

    p.textContent = currentcode 
}

$("#refreshBtn").click(function () {
    capcha();
})

$("#refreshBtn").keypress(function (event) {
    if (event.key === "Enter") {
        $('.last').click();
    }
})


$(".last").click(function () {
    var input = $("#text").val().trim().toUpperCase()
    if (input === currentcode) {
        alert("VERIFIED")
    }
    else {
        alert("TRY AGAIN")
        $('#text').val(''); // clear input
        capcha();           // generate new code

    }

})

capcha();