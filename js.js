var todosArray = [
    {id : 1 , title : 'learn js', isDoing: false },
    {id : 2 , title : 'makefooter', isDoing: true },
    {id : 3 , title : 'design', isDoing: false },
]

var userMenu = prompt('chose one of them: \n 1.Add todo \n 2.Remove todo \n 3.do todo')

if (userMenu === '1'){
    // alert('Add')
    var newTodoName = prompt('enter the new todo name:', '')

    var newtodoObject = {
        id: todosArray.length + 1,
        title: newTodoName,
        isDoing: false,
    }
    todosArray.push(newtodoObject)
    console.log("todos array: ", todosArray)

} else if (userMenu ==='2'){
    // alert('Remove')
    var removeTodoName = prompt('enter the new todo name:', '')
    var removeTodoIndex = todosArray.findIndex(function(todo){
        return todo.title === removeTodoName
    })
    todosArray.splice(removeTodoIndex, 1)
    console.log("todo array: ", todosArray)
} else if (userMenu === '3'){
    // alert('Doing')
    var editableTodoName = prompt(' enter the editable to do name: ', ' ')
    todosArray.forEach(function(todo) {
        if (todo.title === editableTodoName) {
            todo.isDoing = true
        }
    })
    console.log('todos Array: ', todosArray)
} else {
    alert('گزینه وارد شده معتبر نمی باشد')
}