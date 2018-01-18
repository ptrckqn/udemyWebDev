var todos =[];



var quit = false;
while(!quit){
  var input = prompt("What would you like to do?");
  if (input === "list"){
  todos.forEach(function(todo, i){
    console.log("*************")
    console.log(i + ": " + todo);
  });
  }

  else if(input === "new"){
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
  }

  else if(input === "delete"){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
  }

  else if (input === "quit"){
    quit = true;
  }
}
