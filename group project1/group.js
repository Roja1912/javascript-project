window.onload = function(){

    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var age = document.getElementById("age");
    var addrs = document.getElementById("addrs");
    var button = document.getElementById("btn");

   // var data = JSON.parse(localStorage.getItem('inbox'));
 


    var addItemToTable = function(obj){
        var text = "<tr> \
                        <td>" + obj.name + "</td>\
                        <td>" + obj.age + "</td>\
                        <td>" +obj.phone+ "</td>\
                        <td>" +obj.address+ "</td>\
                        </tr>";
            list.innerHTML += text;
        

    }


    var isValid = function (){
        console.log('clicked',name.value,phone.value,age.value,addrs.value);
        var errName = document.getElementById("js-err-name");
        var errPhone = document.getElementById("js-err-phone");
        var errAge = document.getElementById("js-err-age");
        var errAddrs = document.getElementById("js-err-addrs");
        
        var mName = name.value.match(/^[a-z]{1,8}$/i);
        var mPhone = phone.value.match(/^789[0-9]{7}$/);
        var mAge = age.value.match(/^[0-9]+$/);
        var mAddrs= addrs.value.match(/^[#0-9a-z,]{10,250}$/);


        if(!mName){
            errName.innerHTML = "Name should contain only alphanumeric characters";
            return false;
        } 

        else if  (!mPhone){
            errName.innerHTML = '';
            errPhone.innerHTML = "Phone should contain only numeric characters";
            return false;
        }
        else if (!mAge || age.value>35) {
            errPhone.innerHTML = '';
            errAge.innerHTML = "age error";
            
            return false;
        }
        else if (!mAddrs){
            errAge.innerHTML = '';
            errAddrs.innerHTML = "address error";
            return false;
        }
         else {
            errName.innerHTML =errPhone.innerHTML= errAge.innerHTML=errAddrs.innerHTML= "";
            return true;
        }
    }

     var index = function(){
        var inBoxObj = localStorage.getItem("inbox");
         if(inBoxObj){
             inBoxObj = JSON.parse(inBoxObj)

         }else{
             inBoxObj = [];
        }



    
    for(var i = 0; i<inBoxObj.length; i++){
            addItemToTable(inBoxObj[i]);
        }


    
        var tempObj = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("addrs").value
            };
            
            inBoxObj.push(tempObj);
            localStorage.setItem("inbox", JSON.stringify(inBoxObj));
            addItemToTable(tempObj);

    }

        name.onkeyup = function(e){
            isValid();
        }
        phone.onkeyup = function(e){
            isValid();
        }
        age.onkeyup = function(e){
            isValid();
        }
        addrs.onkeyup = function(e){
            isValid();
        }
    

    button.onclick = function(){
    if(isValid()){
        alert("registration success");
         index();
    } 
    else {
        alert("invalid!");
    }
}



   // for(var i=0;i<data.length;i++) {
      //  addItemToTable(data[i])
    //}

}



