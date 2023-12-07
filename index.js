function clickme() {
    var randomNumber1 = "./dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomNumber1);

    var randomNumber2 = "./dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);
}

