var messageWritted;

function btcrip() {
    var message = document.getElementById("inMessage").value; 
    var answer = document.getElementById("outanswer");

    messageWritted = message;

    var messagesInArray = message.split('');

    var pairsPosition;
    var oddPosition;

    for(var i = 0; i === messagesInArray.lenght - 1; i++){
        if(i % 2 === 0 ){
            pairsPosition.push(messagesInArray[i]);
        }else{
            oddPosition.push(messagesInArray[i]);
        }
    }

    console.log(pairsPosition)
    console.log(oddPosition)

}