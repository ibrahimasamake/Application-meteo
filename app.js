let ville ="Bamako"
let pays= document.querySelector("#nomVille")
pays.style.textTransform= "capitalize";

let meteoDelaVille = document.querySelector("#meteoDelaVille")
let changeVille = document.querySelector("#changeVille")
Meteo('paris')

changeVille.addEventListener('click',(even)=>{
    let inputVille=prompt("entre le nom de votre ville")
    if(isNaN(inputVille)) {
        Meteo(inputVille)

    }else{
        alert("erreur  dans le champs")

    }
})


function Meteo(vill){
    // creation du requette ajax
    console.log("hello")
    let request = new XMLHttpRequest()
    request.open('GET',"https://api.openweathermap.org/data/2.5/weather?q="+vill+"&appid=9655412e0f66fb9ade1e5a80b1e882e0&units=metric")
    request.responseType="json"
    request.send();
    request.onload= function (){
        if(request.readyState===XMLHttpRequest.DONE){
            if (request.status===200){
                let resultat = request.response.main.temp
                console.log(resultat)
                pays.textContent=request.response.name
                meteoDelaVille.textContent= resultat;
            }else {
                alert("une erreur ses produit, reesayer s'il vous plait")
            }
        }
    }
}
