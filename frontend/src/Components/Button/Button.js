// Use for Incomes and Expenses enter button

import React from 'react'
import styled from 'styled-components'

function Button({ name, icon, onClick, bg = '#0077b6', bPad = '10px 20px', color = 'white', bRad = '5px' }) {
    return (
        <ButtonStyled
            style={{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }}
            onClick={onClick}
        >
            {icon && <IconContainer>{icon}</IconContainer>}
            {name}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
        background-color: #0077b6; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const IconContainer = styled.span`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

export default Button
