var sub = document.getElementById("sb"); 
sub.onclick = function validate(){ 
    var n = document.getElementById("fn"); 
    var m = document.getElementById("pw"); 
    var o = document.getElementById("nid"); 
 
    if(o.value == ""){ 
        alert("Nid Should be numeric"); 
    } 
    if(n.value == '' || m.value == ''){ 
        alert("Password dao"); 
    } 
    else{} 
 
    if(m.value.length <3 || m.value.length >10){ 
        alert("Password thik koro"); 
    } 
 
    var str = n.value.slice(0,1); 
    if(str == '_' || str=='$'){ 
        alert("Enter valid name!"); 
    } 
}