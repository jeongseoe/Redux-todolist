import React, { useState } from "react";
import './style.css';

let number = 3;
function Form({ setTodos, todos }) {

    const upDate = {
        id: 0,
        title: "",
        body: "",
        isDone: false,
    };


    const [todo, setTodo] = useState(upDate);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, { ...todo, id: number }]);
        setTodo(upDate);
        number++;
    };

    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className="input-list">
                <label className="form-label">제목</label>
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    className="add-input title"
                    onChange={onChangeHandler}
                />
                <label className="form-label">내용</label>
                <input
                    type="text"
                    name="body"
                    value={todo.body}
                    className="add-input body"
                    onChange={onChangeHandler}
                />
            </div>
            <button className="add">추가하기</button>
        </form>
    );
}

export default Form;