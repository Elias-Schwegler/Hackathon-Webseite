type="text/javascript"
src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"

function Button1() {
    document.getElementById("1").innerHTML = "1";
    const dict_values = {Document} //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    console.log(s); // Prints the variables to console window, which are in the JSON format
    window.alert(s)
    $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
}

function Button2() {
    document.getElementById("1").innerHTML = "2";
}