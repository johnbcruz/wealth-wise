import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

function Income() {
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
`;

export default Income;
