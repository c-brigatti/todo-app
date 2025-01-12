import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const { todos, selectedTab } = props
    
    const filterTodosList = () => {
        if(selectedTab === 'All') {
            return todos
        }
        else if(selectedTab === 'Completed') {
            return todos.filter(val => val.complete)
        }
        else {
            return todos.filter(val => !val.complete)
        }
    }

    return (
        <>
            {filterTodosList().map((todo, i) => {
                return (
                    <TodoCard
                        key={i}
                        todo={todo}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}/>
                )
            })}
        </>
    )
}