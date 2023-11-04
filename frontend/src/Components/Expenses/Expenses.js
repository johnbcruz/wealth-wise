import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Expenses(){
    return(
        <ExpensesStyled>
            <InnerLayout>
                <h1>Display Expenses</h1>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
`;

export default Expenses