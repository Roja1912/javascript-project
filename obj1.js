window.onload = function() {
var inBoxObj = [
{
msg: "Hi",
time: "july",
user: {
name: "vinay",
id: 2,
emailId: "vinay@gmail.com"
}
},
{
msg: "How are you",
time: "july",
user: {
name: "yadav",
id: 2,
emailId: "yadav@gmail.com"
}
},
{
msg: "Fine!!!!!",
time: "july",
user: {
name: "Raj",
id: 2,
emailId: "raj@gmail.com"
}
}

];


var list = document.getElementById("list");
for(var i=0;i<inBoxObj.length;i++) {
var text = "<tr> \
<td>" + inBoxObj[i].msg + "</td>\
<td>" + inBoxObj[i].time + "</td>\
<td>" + inBoxObj[i].user.name + "</td>\
<td>" + inBoxObj[i].user.emailId + "</td>\
</tr>";
list.innerHTML += text;
}


}

