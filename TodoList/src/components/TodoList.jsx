import TodoItem from "./TodoItem.jsx";

export default function TodoList({Todo, handleDeleteTodoItem}) {

    return (
        <div className="todolist">
            {
                Todo.map(item => <TodoItem key={item.id} id={item.id} description={item.description} handleDeleteTodoItem={handleDeleteTodoItem} />)
            }
        </div>
    );
}