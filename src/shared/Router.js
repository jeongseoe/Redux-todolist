import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from '../pages/TodoList';
import Detail from '../pages/Detail';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/:index" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;