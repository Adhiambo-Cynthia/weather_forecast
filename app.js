$("button").click(function(){
    var city=$("#citychoice").val()
    var country=$("#country").val()
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=9df8c0407c102e47b33df91715eda0aa", 
          function(data){
              var icon="http://openweathermap.org/img/w/"+ data.weather[0].icon+".png"
              $(".icon").attr('src', icon)
              var temp=data.main.temp
              $(".temp").append(temp + " in " + city)
              var weather=data.weather[0].description
              $(".forecast").append(weather)
              console.log(data)
          })

})
