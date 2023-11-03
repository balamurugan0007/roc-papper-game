const bot=document.getElementById('bot-choice')
const player =document.getElementById("player-choice")
const result =document.getElementById("result")

const possible_choice=document.querySelectorAll('button')

possible_choice.forEach(possible_choice =>possible_choice.addEventListener('click',(e)=>{
    player_choice=e.target.id;
    player.innerHTML=player_choice;
    botgenerate();
    result_value();
}))


function botgenerate(){
    const random =Math.floor(Math.random()*3)+1;
    console.log(random)
    if(random === 1){
        botchoice_value='Rock';
    }
    if(random === 2){
        botchoice_value='Papper';
    }
    if(random === 3){
        botchoice_value='Sissor';
    }

    bot.innerHTML=botchoice_value;

    

}


function result_value(){
    if(bot === player){
        final_result='Its draw'
    }
    if(bot === 'Rock' && player==='Papper'){
        final_result='Player wins match'
    }
    if(bot === 'Papper' && player==='Rock'){
        final_result='Bot wins the match'
    }


    result.innerHTML=final_result;
}