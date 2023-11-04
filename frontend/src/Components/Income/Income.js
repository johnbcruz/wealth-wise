import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Income(){
    return(
        <IncomesStyled>
            <InnerLayout>
                <h1>Display Income</h1>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: auto;
`;

export default Income;
