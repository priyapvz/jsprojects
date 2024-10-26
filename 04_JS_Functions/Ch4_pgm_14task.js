var displayMenu;
var option;

option = {
    op1:"(1) Print log",
    op2:"(2) Upload file",
    op3:"(9) Quit"
};

displayOption1 = function () {
    console.log(option.op1)
};

displayOption2 = function () {
    console.log(option.op2)
};

displayOption3 = function () {
    console.log(option.op3)
};



displayMenu = function () {
	console.log("Please choose an option:");
	displayOption1();
displayOption2();
displayOption3();

};

displayMenu()





let func1 = function() {
    console.log("func1 called", func2());
}

let func2 = function() {
    console.log("func2 called", func1());
}

//func1(); // Deadlock function
