window.onload = function(){

var ul = document.getElementById('list');
var add = document.getElementById('addTask');
var remove = document.getElementById('removeAll');

function addLi(targetUL) {
  var inputText = document.getElementById('text').value,
      li = document.createElement('li'),
      textNode = document.createTextNode(inputText + " "),
      removeButton = document.createElement('button');

      if (inputText.split(' ').join('').length === 0) {
        //checks for empty input field
        alert("You have to type in a task first!");
        return false;
      }
      removeButton.className = "removeMe";
      removeButton.innerHTML = "DONE!";
      removeButton.setAttribute('onClick', 'removeMe(this);');

      li.appendChild(textNode);
      li.appendChild(removeButton);

      targetUL.appendChild(li);
}

  function removeMe (item){
    alert('remove Clicked')
    var parent = item.parentElement;
      parent.parentElement.removeChild(parent);
      }



$("#add").click(function(){
    addLi(ul);
    alert("Add clicked")
});



}
