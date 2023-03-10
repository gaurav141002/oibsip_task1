
let output = document.getElementById("display")

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        output.value="Syntax Error";
    }
}

function allclear(){
    output.value = '';
} 

function del(){
    output.value = output.value.slice(0,-1);
}