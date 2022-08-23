//player add

function playerAdd(player,disable)
{
    const playerTitle=document.getElementById(player);
    const playerTitleInnerText=playerTitle.innerText;
    const childCount=document.querySelectorAll('#orderd-list li');
    if(childCount.length<5)
    {
        const item = document.createElement("li");
        item.innerText=playerTitleInnerText;
        const parrentItem=document.getElementById('orderd-list');
        parrentItem.appendChild(item);  
        const disableButton=document.getElementById(disable);
        disableButton.style.backgroundColor="#A2A9AF";
        disableButton.disabled=true;  
       
    }
    else{
        alert('Max 5 player are allowed');  
    } 
}

document.getElementById('btn-1').addEventListener('click',function(){

    playerAdd('playerTitleOne','btn-1');
})
document.getElementById('btn-2').addEventListener('click',function(){

    playerAdd('playerTitleTwo','btn-2');  
})
document.getElementById('btn-3').addEventListener('click',function(){

    playerAdd('playerTitleThree','btn-3');
})
document.getElementById('btn-4').addEventListener('click',function(){

    playerAdd('playerTitleFour','btn-4');
})
document.getElementById('btn-5').addEventListener('click',function(){

    playerAdd('playerTitleFive','btn-5');
})
document.getElementById('btn-6').addEventListener('click',function(){

    playerAdd('playerTitleSix','btn-6');
})

//calculation part
document.getElementById('calculate').addEventListener('click',function(){

    const perPlayerCost=document.getElementById('input-field');
    const perPlayerCostValue=perPlayerCost.value;
    const perPlayerCostValueStringToNumber=parseFloat(perPlayerCostValue);
    const childCount=document.querySelectorAll('#orderd-list li');
    const totalChild=childCount.length;
    const playerTotalExpense=perPlayerCostValueStringToNumber*totalChild;
    const playerExpenseGet=document.getElementById('player-expense');
    playerExpenseGet.innerText=playerTotalExpense;
    

})
document.getElementById('total-calculation').addEventListener('click',function(){
    const totalCostField=document.getElementById('total-cost');
    const playerExpenseGet=document.getElementById('player-expense');
    const playerExpenseGetString=playerExpenseGet.innerText;
    const playerExpenseGetStringToNumber=parseFloat(playerExpenseGetString);
    const managerCost=document.getElementById('manager-input-field');
    const managerCostValue=managerCost.value;
    const managerCostStringToNumber=parseFloat(managerCostValue);
    const coachCost=document.getElementById('coach-input-field');
    const coachCostValue=coachCost.value;
    const coachCostStringToNumber=parseFloat(coachCostValue);
    const totalCost=(playerExpenseGetStringToNumber+managerCostStringToNumber+coachCostStringToNumber);
    totalCostField.innerText=totalCost;
    

})