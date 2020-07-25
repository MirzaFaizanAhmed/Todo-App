
var item = document.getElementById('items');
function add(){
    document.getElementById('add').style.display = "none";
    document.getElementById('save').style.display = "inline";
    document.getElementById('input').style.display = "inline";
}
function save(){
    document.getElementById('add').style.display = "inline";
    document.getElementById('save').style.display = "none";
    document.getElementById('input').style.display = "none";

    //Add Items
    var todo_item = document.getElementById('todo_item');
    var li = document.createElement("li");
    li.setAttribute("id","list");
    var divInLi = document.createElement("div");
    divInLi.setAttribute("id","listDiv");
    var para = document.createElement("p");
    para.setAttribute("id","para");
    var paratext  = document.createTextNode(todo_item.value);
     li.appendChild(divInLi);
     divInLi.appendChild(para);
     para.appendChild(paratext);
     item.appendChild(li);


     //Update Input
     
     var inputUpdate = document.createElement('input');
     inputUpdate.setAttribute("id","updateInput");
     divInLi.appendChild(inputUpdate);
     console.log(divInLi);

     var updteInputBtn = document.createElement('i');
     updteInputBtn.setAttribute("class","fa fa-pencil-square-o");
     updteInputBtn.setAttribute("area-hidden","true");
     updteInputBtn.setAttribute("id","update")
     updteInputBtn.setAttribute("onclick","updateInput2(this)");

     divInLi.appendChild(updteInputBtn);


     //Delete

     var dltbtn = document.createElement('i');
     dltbtn.setAttribute("class","fa fa-trash-o");
     dltbtn.setAttribute("area-hidden","true");
     dltbtn.setAttribute("onclick","deleteItem(this)");

     li.appendChild(dltbtn);


     //update 

     var updbtn = document.createElement('i');
     updbtn.setAttribute("class","fa fa-pencil");
     updbtn.setAttribute("area-hidden","true");
     updbtn.setAttribute("onclick","update(this)");

     li.appendChild(updbtn);



     todo_item.value='';
     console.log(li);
     return divInLi;
}

function deleteItem(d){
    d.parentNode.remove();
}

function removeAll(){
    item.innerHTML='';
}

function update(u){

    var input = document.getElementById('updateInput');
    input.style.display = 'inline';
    document.getElementById('para').style.display = 'none';
    document.getElementById('update').style.display = "inline";
    var a = u.parentNode.childNodes[0].childNodes[0].innerHTML;
    input.value = a;

}

function updateInput2(u){
    var input = document.getElementById('updateInput');
    u.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML = input.value;
    input.value = "";
    input.style.display = 'none';
    document.getElementById('para').style.display = 'inline';
    document.getElementById('update').style.display = "none";
}