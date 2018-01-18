var todos =[];



var quit = false;
while(!quit){
  var input = prompt("What would you like to do?");
  if (input === "list"){
    console.log(todos);
  }

  else if(input === "new"){
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
  }

  else if (input === "quit"){
    quit = true;
  }
}
