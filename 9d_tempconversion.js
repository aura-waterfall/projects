function converttemp() {
    var ctemp = document.getElementById("celsius").value,
        ftemp = document.getElementById("fahrenheit").value;
    if ((ctemp=="") && (ftemp=="")) {
        window.alert("Please enter a value in one box!");
    } else if (ftemp=="") {
        newftemp = (ctemp*(9/5))+32;
        document.getElementById("fahrenheit").value = newftemp;
        //window.alert(typeof newftemp);
    } else {
        newctemp = (ftemp-32)*(5/9);
        document.getElementById("celsius").value = newctemp;
    }
    
}