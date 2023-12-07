function clickme() {
    var randomNumber1 = "dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomNumber1);

    var randomNumber2 = "dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Palyer 1 wins!";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").textContent="Palyer 2 wins!";
    }
    else{
        document.querySelector("h1").textContent="Draw!";
    }
}

