import { AiOutlineDelete } from "react-icons/ai";

export default function TodoItem({id, description, handleDeleteTodoItem}) {
    return (
        <div className="todoitem">
            {description}
            <AiOutlineDelete onClick={() => handleDeleteTodoItem(id)}/>
        </div>
    );
}