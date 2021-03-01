let user_name = prompt('Your name please:');
    alert('Welcome to the "Qalyn Calculator" ' + user_name + '.  Have a nice calculation!');

    const education = document.getElementById("education").value;
    const networth = document.getElementById("networth").value;
    const skills = document.getElementById("skills").value;
    const age = document.getElementById("age").value;
    const reputation = document.getElementById("reputation").value;
    const love_letter = document.getElementById("letter");
    const name = document.getElementById("name").value;
    const startingBid = document.getElementById("startingBid").value;
    const price = document.querySelector(".price");
    const submitQuote = document.getElementById("submit-quote");


let person = {
    brideOrGroom_name: name,
    brideOrGroom_price: price,
    letter_to_bride: love_letter
}   

submitQuote.addEventListener('click', function(){
    const education = document.getElementById("education").value;
    const networth = document.getElementById("networth").value;
    const skills = document.getElementById("skills").value;
    const age = document.getElementById("age").value;
    const reputation = document.getElementById("reputation").value;
    const love_letter = document.getElementById("letter");
    const name = document.getElementById("name").value;
    const startingBid = document.getElementById("startingBid");
    const submitQuote = document.getElementById("submit-quote");

        let price = Number(startingBid.value);

        price = price * education;
        price = price * networth;
        price = price + parseInt(skills);
        price = price * age;

        if(reputation.value == -200){
            price = price + parseInt(reputation);
        }
        else{
            price = price * reputation;
        }
price.innerHTML = "$" + price;
alert('Your qalyn mal = ' + price + ', your love letter: ' + love_letter.value);
});