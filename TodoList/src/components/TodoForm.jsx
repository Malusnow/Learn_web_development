import { useRef } from 'react';

export default function TodoForm({handleAddTodoItem}) {
    const inputRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        if (inputValue.trim() !== '') {
            handleAddTodoItem(inputValue);
            inputRef.current.value = '';
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new todo" ref={inputRef} />
        <button type="submit" className='add'>Add</button>
    </form>
  );
}