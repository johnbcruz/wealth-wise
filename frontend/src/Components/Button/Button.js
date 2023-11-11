// Use for Incomes and Expenses enter button

import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export default Button