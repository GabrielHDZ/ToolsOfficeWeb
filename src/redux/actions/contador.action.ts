
interface actionUno{
    type: string,
    payload:string
}
//is a object
const addTodoAction:actionUno = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
}
//action creator is a function
const addTodo= (text:string) => {
    return {
      type: 'todos/todoAdded',
      payload: text
    }
}
  

  
export {addTodoAction,addTodo}