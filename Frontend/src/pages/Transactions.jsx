import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/transactions')
            .then(res => {
                setTransactions(res.data.transactions);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching transactions:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <Loader2 className="animate-spin" size={32} />
            </div>
        );
    }

    return (
        <div className="transactions-page">
            <header className="header" style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Link to="/" style={{ color: '#000', marginRight: '16px' }}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 style={{ margin: 0, fontSize: '24px' }}>Transactions</h1>
            </header>

            <div className="card">
                {transactions.length === 0 ? (
                    <p>No recent transactions.</p>
                ) : (
                    transactions.map(t => (
                        <div key={t.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            borderBottom: '1px solid #eee'
                        }}>
                            <div>
                                <div style={{ fontWeight: 500 }}>{t.merchant}</div>
                                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{t.category}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 600 }}>${t.amount.toFixed(2)}</div>
                                <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
                                    {new Date(t.date).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Transactions;
