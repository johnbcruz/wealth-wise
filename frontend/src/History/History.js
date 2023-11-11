import React from 'react';
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();

    return (
        <div>
            <h2>Recent History</h2>
            {transactionHistory().map(item => (
                <div key={item._id}>
                    <p>{item.title} - {item.type === 'expense' ? '-' : '+'}{Math.max(0, item.amount)}</p>
                </div>
            ))}
        </div>
    );
}

export default History;
