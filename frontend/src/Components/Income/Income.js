import React, { useEffect } from 'react'
import styled from 'styled-components'

function Income(){
    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "income-content">
                    <div className = "form-container">
                    <div className = "incomes"></div>
                </div>
            </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Income
