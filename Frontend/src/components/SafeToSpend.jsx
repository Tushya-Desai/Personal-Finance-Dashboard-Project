import React from 'react';

const SafeToSpend = ({ balance }) => {
    return (
        <section className="card safe-to-spend">
            <h2>Safe to Spend Today</h2>
            <div className="amount">${Number(balance).toFixed(2)}</div>
            <p className="subtitle">After upcoming bills and goals</p>
        </section>
    );
};

export default SafeToSpend;
