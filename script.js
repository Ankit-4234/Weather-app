function getWeather(){
    let city=document.getElementById("cityInput").value;
    let apiKey= "920635411b7d464518bb1aba88e965ba"
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&appid=" + apiKey + "&units=metric";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if(data.cod =="404"){
            document.getElementById("result").innerHTML="city not found";
        }
        else{
            let name=data.name;
            let temp=data.main.temp;
            let description= data.weather[0].description;
            document.getElementById("result").innerHTML=
            "<h2>"+name+"</h2>"+
            "<p> temperature:"+temp+"</p>"+
            "<p> description:"+description+"</p>";
        }
    })
    .catch(function(){
        document.getElementById("result").innerHTML="someting went wrong";
    });
}
