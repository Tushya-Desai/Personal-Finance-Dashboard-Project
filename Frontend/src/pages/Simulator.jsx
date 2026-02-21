import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Simulator = () => {
    const [purchaseName, setPurchaseName] = useState('MacBook Pro');
    const [purchaseAmount, setPurchaseAmount] = useState('1200');
    const [simulated, setSimulated] = useState(false);

    const handleSimulate = (e) => {
        e.preventDefault();
        setSimulated(true);
    };

    return (
        <div className="simulator-page">
            <header className="header" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Link to="/" style={{ color: '#000', marginRight: '16px' }}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 style={{ margin: 0, fontSize: '24px' }}>Simulator</h1>
            </header>
            <p style={{ color: '#666', marginBottom: '24px', marginLeft: '40px' }}>Test before you spend</p>

            <div className="card">
                <h3>What if I purchase...</h3>
                <form onSubmit={handleSimulate}>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#555' }}>Item Name</label>
                        <input
                            type="text"
                            value={purchaseName}
                            onChange={(e) => setPurchaseName(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#555' }}>Amount ($)</label>
                        <input
                            type="number"
                            value={purchaseAmount}
                            onChange={(e) => setPurchaseAmount(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
                        />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', background: '#000', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
                        Simulate Impact
                    </button>
                </form>
            </div>

            {simulated && (
                <div className="card" style={{ background: '#fff8e1', borderColor: '#ffe082', marginTop: '16px' }}>
                    <h3 style={{ color: '#f57f17' }}>Simulation Results</h3>
                    <p style={{ marginBottom: '12px' }}>If you purchase the <strong>{purchaseName}</strong> (${purchaseAmount}) today:</p>
                    <ul style={{ fontSize: '14px', color: '#333', paddingLeft: '20px', lineHeight: 1.6, margin: 0 }}>
                        <li>Your <strong>Safe-to-Spend</strong> drops to <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>$15/day</span> for the rest of this month.</li>
                        <li>Your "Vacation" goal will be delayed by <strong>1 month</strong>.</li>
                        <li><span style={{ color: '#2e7d32', fontWeight: 500 }}>You will still be able to cover all upcoming bills.</span></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Simulator;
