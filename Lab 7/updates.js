var index =0;

function init()
{
localStorage.setItem('phrase', '');
}

function reload()
{
elem = document.getElementById("status");
output = "";
for (var i = 0; i <localStorage.length; i++) {
output = "<p>" + localStorage[i] + output+ "</p>\n";
}
elem.innerHTML = output;
}

function store()
{
var x=document.getElementById("msg").value;
var time = new Date();
var month = time.getMonth()+1;
var year = time.getFullYear();
var day = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();

tstamp = month + "/" + day + "/" + year + " " + hour + ":" + min + " - "; 
var node = document.getElementById("status");

localStorage[index] = tstamp + x;
reload();
index++;
} 
