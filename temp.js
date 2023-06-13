const calculateTemp=()=>{
    const inputTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    const cToF=(C)=>{
        let fahren=((C*9/5)+32).toFixed(1);
        return fahren;
    }
    const fToC=(F)=>{
        let cels=((F-32)*5/9).toFixed(1);
        return cels;
    }
    if(valueTemp=='F'){
        document.getElementById("result").innerHTML=cToF(inputTemp)+"Celsius";
    }
    else {
        document.getElementById("result").innerHTML= fToC(inputTemp) + "Fahrenheit";
    }
}