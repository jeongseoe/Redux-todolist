import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <StAddDiv>
            <div>My Todo List</div>
            <div>React</div>
        </StAddDiv>
    );
}

export default Header;

const StAddDiv = styled.div`
        border: 1px solid rgb(120, 191, 233);
    border-radius: 4px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;