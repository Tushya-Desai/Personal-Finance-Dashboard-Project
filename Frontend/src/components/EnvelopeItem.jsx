import React from 'react';

const EnvelopeItem = ({ env }) => {
    const left = env.budget - env.spent;
    const percent = Math.min(100, (env.spent / env.budget) * 100);

    // Determine progress bar color based on category/spent
    let barColor = 'bg-black'; // Default primary

    // Custom colors for MVP visual logic
    if (env.name === 'Transport') barColor = 'bg-red';
    else if (env.name === 'Dining Out') barColor = 'bg-orange';

    // Dynamic color if over budget
    if (left < 0) barColor = 'bg-red';

    return (
        <div className="envelope-item">
            <div className="env-header">
                <span>{env.name}</span>
                <strong className={left < 0 ? 'text-red' : ''}>
                    {left < 0 ? `-$${Math.abs(left).toFixed(2)} over` : `$${left.toFixed(2)} left`}
                </strong>
            </div>
            <div className="progress-bg">
                <div className={`progress-fill ${barColor}`} style={{ width: `${percent}%` }}></div>
            </div>
            <div className="env-footer">
                ${env.spent.toFixed(2)} / ${env.budget.toFixed(2)} spent
            </div>
        </div>
    );
};

export default EnvelopeItem;
