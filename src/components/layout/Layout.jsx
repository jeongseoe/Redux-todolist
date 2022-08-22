import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
    return <StAddDiv>{children}</StAddDiv>;
};

export default Layout;

const StAddDiv = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;    
`;