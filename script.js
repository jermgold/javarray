var items = ['pig','chicken','cow']
//var itemsAsString = items.join(', ')

//It should have a function to display tools.

function displayItems(){
    document.getElementById("items").innerHTML = (items);
    console.log('List of items: ', items);
}

//It should have a function to add todos.

function addItem(newitem){
    items.push(document.getElementById('newitem').value);
    displayItems();
    //alert("Your item has been added!");
}

//It should have a function to change todos.

function changeItem(){
    var userOldItem = document.getElementById('oldItem').value;
    var userNewItem = document.getElementById('newItem').value;
    var foundMatch = false;
    for (i = 0; i < items.length; i++) {
        if (userOldItem === items[i]) {
            items[i] = userNewItem;
            foundMatch = true;
        }
    }
    if (!foundMatch) {
        alert("Hey, nothing matched " + userOldItem);
    }
    displayItems();
}

//It should have a function to delete todos.

function deleteItem(position){
    
    items.splice(position, 1);
    
    displayItems();
  
}

