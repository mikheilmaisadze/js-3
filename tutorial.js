
var pattern1 = /^[0-9]+$/;
var str1 = "234";
const result1 = pattern1.test(str1);
if (result1) {
    document.write("<p style = 'color: green;'> სწორია </p>");
} else {
    window.alert("არასწორია");
}