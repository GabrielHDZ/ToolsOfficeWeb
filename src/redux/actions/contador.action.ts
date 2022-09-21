
interface actionUno {
    type: string,
    payload: string
}
//is a object
const addTodoAction: actionUno = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
}
//action creator is a function
const addTodo = (text: string) => {
    return {
        type: 'todos/todoAdded',
        payload: text
    }
}

function suma(numero: number = 0): void {
    var numero1 = 5;
    var array = [4, 3, 2, 7];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}

export { addTodoAction, addTodo }