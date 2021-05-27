class form{
constructor(){
}

display(){


    textFont('georgia');
    tittle = createElement('h1');
    tittle.html("To Do List");
    tittle.position(670,100)
    tittle.style("font-family","bodoni")

    e_2 = createElement('h3');
    e_2.html("Enter tasks");
    e_2.position(697,160);

    formInput = createInput("");
    formInput.position(660,200);
    
    clear = createButton("CLEAR");
    clear.position(380,270);
    clear.style('background-color', "red");
    clear.style("font-family", "Bodoni");

    button = createButton("ENTER");
    button.position(710,230);
    button.style('background-color', "lightgreen");
    button.style("font-family", "Bodoni");

    reset = createButton("RESET");
    reset.position(380,300);
    reset.style("font-family", "Bodoni");

    display = createButton("DONE");
    display.position(714,260);
    display.style("font-family", "Bodoni");

    button.mousePressed(function(){
    
    
    input = formInput.value();
    num = num+1
    

   

    play.updateCount(num);
    play.updateTasks(input)
    play.getTask();

   //len.push(num);
   

})

reset.mousePressed(function(){

background(screen1)
num = 0;

play.updateCount(0)
len = [];
pos = 230;
serial = 0;




})

clear.mousePressed(function(){


len.pop();


})








}



done(){

    display.mousePressed(function(){


        if(serial<11){

            for(var i=0;i<len.length;i++){ 
                pos+=30
                serial = serial+1
                 
                 fill("black")
                 textSize(20)
                 text(serial+"."+len[i],200,pos) }

        }else{

len.pop();
          text("*maximum task entered to be 10, clear the unwanted ",300,680)



        }
        
    
    
        })
    
    

    


}
}

