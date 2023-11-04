import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Expenses(){
    return(
        <ExpensesStyled>
            <InnerLayout>
                {/* Add any content you want within the InnerLayout here */}
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    /* Add any styles you want for ExpensesStyled here */
`;

export default Expenses;
