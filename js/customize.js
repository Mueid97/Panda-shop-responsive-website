
const lightBlue = document.getElementById('catagories');
lightBlue.style.color='lightblue';
const bagPack = document.getElementById('bag-pack');
bagPack.style.color='lightblue';
const shoe = document.getElementById('shoes');
shoe.style.color='lightblue';



const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

/* document.getElementsByClassName('btn-buy-now').addEventListener('click',function(){
    document.getElementsByClassName('btn-buy-now').style.display = 'none';
});
 */
document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('btn').style.display = 'none';
});


document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('delete-btn').style.display = 'none';
});


//keyup

document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const dltbtn = document.getElementById('delete-btn');
    if(event.target.value=='@gmail.com'){
        dltbtn.removeAttribute('disabled');
    }
    else{
        dltbtn.setAttribute('disabled', true);
    };
});

document.getElementById('delete-confirm').addEventListener('change',function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
});
