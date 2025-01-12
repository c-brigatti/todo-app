import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

import {useState, useEffect} from "react";

function App() {
    // const todos = [
    //     { input: 'Hello! Add your first todo!', complete: false },
    //     { input: 'Test2', complete: true },
    //     { input: 'Test3', complete: true },
    //     { input: 'Test4', complete: false },
    // ]

    const [todos, setTodos] = useState([
        { input: 'Hello! Add your first todo!', complete: true }
    ])
    const [selectedTab, setSelectedTab] = useState("All")

    function handleAddTodo(newTodo) {
        const newTodoList =
            [...todos,
            { input: newTodo, complete: false }]
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleCompleteTodo(i) {
        const newTodoList = todos.map((val, valIndex) => {
            if (valIndex === i) return {input: val.input, complete: true }
            else return val
        })
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleDeleteTodo(i) {
        const newTodoList = todos.filter((val, valIndex) =>
            valIndex !== i
        )
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleSaveData(currentTodos) {
        localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }))
    }

    useEffect(() => {
        if(!localStorage || !localStorage.getItem("todo-app")) { return }
        let db = JSON.parse(localStorage.getItem("todo-app"))
        setTodos(db.todos)
    }, [])

    return (
    <>
        <Header todos={todos} />
        <Tabs
            todos={todos}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}/>
        <TodoList
            todos={todos}
            selectedTab={selectedTab}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}/>
        <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
