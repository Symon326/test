var countdown = document.getElementById("counter");
setTimeout(function(){
    debugger
    countdown.innerHTML="9";
    setTimeout(function(){
        countdown.textContent="8";
        setTimeout(function(){
            countdown.textContent="7";
            setTimeout(function(){
                countdown.textContent="6";
                setTimeout(function(){
                    countdown.textContent="5";
                    setTimeout(function(){
                        countdown.textContent="4";
                        setTimeout(function(){
                            countdown.textContent="3"
                            setTimeout(function(){
                                countdown.textContent="2";
                                setTimeout(function(){
                                    countdown.textContent="1";
                                    setTimeout(function(){
                                        countdown.textContent="Happy Independence ";
                                        countdown.style.color ="blue";
                                        document.getElementById("day").textContent="Day";
                                        document.getElementById("container").style.backgroundImage = "linear-gradient(red,white,green)";
                                        document.getElementById("container").style.color = "blue";
                                    },1000);
                                },1000);
                            },1000);;
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000)