var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');

var paras = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
             "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
              "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", 
              "“A friend is someone who knows all about you and still loves you.”", 
              "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"];
var authors = ["― Albert Einstein", "― Bernard M. Baruch", "― Dr. Seuss", "― Elbert Hubbard", "― Ralph Waldo Emerson"];

var para = document.getElementById("para");
var author = document.getElementById("auhtor");

var i = 0;
para.innerHTML = paras[i];   
author.innerHTML = authors[i];


nextBtn.addEventListener("click", function(next) {

    if(i<paras.length - 1) {
        i++;
        console.log("nxt " +i);
    }
    else {
        i = 0;
    }  
    para.innerHTML = paras[i];   
    author.innerHTML = authors[i];
    
});

prevBtn.addEventListener("click", function(pre) {
    if(i>0) {
        i--;
        console.log("pre " +i);
    }
    else {
        i = paras.length - 1;
        console.log("pre else" +i);

    }
    para.innerHTML = paras[i];  
    author.innerHTML = authors[i];


});


setInterval(function(next) { 
      
    if(i<paras.length - 1) {
        i++;
        console.log("nxt " +i);

    }
    else {
        i = 0;
    }  
    para.innerHTML = paras[i];   
    author.innerHTML = authors[i];

    
}, 4000);