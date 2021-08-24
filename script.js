function changeName(){
    myEle = document.querySelector(".user-name");
    result = window.prompt("What would you like to change your name into?");
    myEle.innerHTML = result;
}


var connectionRequests = 2;
var yourConnections = 500;
function acceptReq1(){
    myEle = document.querySelector(".person1");
    myEle.remove();

    yourConnections++;
    myEle = document.querySelector(".oval");
    myEle.innerHTML = yourConnections;

    connectionRequests--;
    myEle = document.querySelector(".circle");
    myEle.innerHTML = connectionRequests;
}
function acceptReq2(){
    myEle = document.querySelector(".person2");
    myEle.remove();

    yourConnections++;
    myEle = document.querySelector(".oval");
    myEle.innerHTML = yourConnections;

    connectionRequests--;
    myEle = document.querySelector(".circle");
    myEle.innerHTML = connectionRequests;
}



function declineReq1(){
    myEle = document.querySelector(".person1");
    myEle.remove();

    connectionRequests--;
    myEle = document.querySelector(".circle");
    myEle.innerHTML = connectionRequests;
}
function declineReq2(){
    myEle = document.querySelector(".person2");
    myEle.remove();

    connectionRequests--;
    myEle = document.querySelector(".circle");
    myEle.innerHTML = connectionRequests;
}