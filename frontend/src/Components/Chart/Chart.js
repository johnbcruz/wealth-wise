// Use for main chart in Dashboard

import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                tension: 0.2
            },
            {
                label: 'Expense',
                data: expenses.map((expense) => expense.amount),
                tension: 0.2
            }
        ]
    }


    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default Chart