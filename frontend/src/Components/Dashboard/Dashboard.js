import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Display Dashboard/Transactions</h1>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    display: flex;
    overflow: auto;
`;

export default Dashboard;
