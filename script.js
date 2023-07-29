var minutes;
var seconds;
function work(){
    
    minutes = 25;
    seconds = 0;

    var interval = setInterval(
        function(){

            
            var dots = document.getElementById("timer");
            if (seconds==0 && minutes==0){
                clearInterval(interval)
                dots.innerHTML = "00:00"
                dots.style.backgroundColor = "green"

            }

            else if(seconds==0){
            minutes = minutes -1;
            seconds = 59;
            dots.innerHTML = minutes + ":" + seconds
            }else if(seconds>0){
            seconds = seconds -1;
            dots.innerHTML = minutes + ":" + seconds
            }

        },
        1000
    )

    


}