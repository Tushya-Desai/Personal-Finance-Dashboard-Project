import React from 'react';
import { CalendarCheck } from 'lucide-react';

const SafeToSpend = ({ balance }) => {
    return (
        <section className="card safe-to-spend">
            <h2>Safe to Spend Today</h2>
            <div className="amount">${Number(balance).toFixed(2)}</div>
            <p className="subtitle" style={{ marginBottom: '12px' }}>After upcoming bills and goals</p>

            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fff',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                color: '#2e7d32',
                border: '1px solid #b2ebb4'
            }}>
                <CalendarCheck size={14} />
                <span>Calendar Synced: 2 Events Found</span>
            </div>
        </section>
    );
};

export default SafeToSpend;
