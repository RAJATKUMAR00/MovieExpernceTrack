let form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

 // Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();

 // Get input value
var newItem1 = document.getElementById('item1').value;
var newItem2 = document.getElementById('item2').value;

// console.log(newItem1+"  "+newItem2);
// Create new li element
var li1 = document.createElement('li');
var li2 = document.createElement('li');
// Add class
   li1.className = 'list-group-item';
   li2.className = 'list-group-item';

// Add text node with input value
li1.appendChild(document.createTextNode(newItem1));
li2.appendChild(document.createTextNode(newItem2));

 // Create del button element
  var deleteBtn = document.createElement('button');
  var editbtn = document.createElement('button');


 // Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   editbtn.className='btn btn-sm float-right edit0th';

 // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   editbtn.appendChild(document.createTextNode('EDIT'));

// Append button to li
   li1.appendChild(deleteBtn);
   li1.appendChild(editbtn);


// Append li to list
    itemList.appendChild(li1);
    
    localStorage.setItem(newItem1, newItem2);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
 
