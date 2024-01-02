var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);
//deleting item
itemList.addEventListener('click', removeItem);

//Add item 
function addItem(e) {
    e.preventDefault();

    //get input value 
    var newItem = document.getElementById('item').value;

     if(newItem !== null && newItem !== ''){
        //create new li element & delete button
        var li = document.createElement('li');
        var del = document.createElement('button');

        //add class
        li.className = 'list-group-item';
        del.className = "btn btn-danger btn-sm float-end delete";

        //append the text 
        li.appendChild(document.createTextNode(newItem));
        del.appendChild(document.createTextNode('X'))

        li.appendChild(del);
        itemList.appendChild(li);
     }
     else{

         window.alert("Field cannot be null")
     }
}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are You Sure!!!!')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}