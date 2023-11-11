import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                        <div className="history-con">
                            <History />
                            <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...incomes.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...incomes.map(item => item.amount))}
                                </p>
                            </div>
                            <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...expenses.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...expenses.map(item => item.amount))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        .chart-con{
            .amount-con{
                margin-top: 1rem;
                .income, .expense, .balance{
                    border: 2px solid #000000;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }
            }
        }

        .history-con{
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                border: 2px solid #000000;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
`;

export default Dashboard