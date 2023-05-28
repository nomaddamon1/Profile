document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var inputValue = document.querySelector('.todo-input').value.trim();
    if (inputValue !== '') {
      var listItem = document.createElement('li');
      var textSpan = document.createElement('span');
      textSpan.innerText = inputValue;
      listItem.appendChild(textSpan);
  
      var deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function() {
        listItem.remove();
      });
      listItem.appendChild(deleteButton);
  
      listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });
  
      document.querySelector('.list').appendChild(listItem);
      document.querySelector('.todo-input').value = '';
    }
  });
  