const calculatetemp = () =>{
    const numbertemp = document.getElementById('temp').value;
    const temptype = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[temptype.selectedIndex].value;
    console.log(valueTemp);
    const celTOfah = (cel)=>{
        let fahrenheit = Math.round((cel * 9 / 5) + 32); 
        return fahrenheit;
    }     
    const fahTOcel = (fah)=>{
        let celsius = Math.round((fah- 32)* 5/9); 
        return celsius;
    }     
    let result;
    if (valueTemp=='celsius') {
        result = celTOfah(numbertemp);
        document.getElementById('result').innerHTML= `= ${result} °Fahrenheit`;
    } else {
        result = fahTOcel(numbertemp);
        document.getElementById('result').innerHTML= `= ${result} °Celsius`;
    } 
}