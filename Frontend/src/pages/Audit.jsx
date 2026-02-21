import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Audit = () => {
    const [auditItems, setAuditItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/audit')
            .then(res => {
                setAuditItems(res.data.auditItems);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching audit data:", err);
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
        <div className="audit-page">
            <header className="header" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Link to="/" style={{ color: '#000', marginRight: '16px' }}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 style={{ margin: 0, fontSize: '24px' }}>Vampire Audit</h1>
            </header>
            <p style={{ color: '#666', marginBottom: '24px', marginLeft: '40px' }}>Plug your money leaks</p>

            {auditItems.length === 0 ? (
                <div className="card">No vampires detected! You're safe.</div>
            ) : (
                auditItems.map(item => {
                    const isPriceHike = item.issue === 'Price Increase!';
                    const borderColor = isPriceHike ? '#d32f2f' : '#ff9800';
                    const textColor = isPriceHike ? '#d32f2f' : '#e65100';

                    return (
                        <div key={item.id} className="card" style={{ borderLeft: `4px solid ${borderColor}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <h3 style={{ color: textColor, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <AlertTriangle size={18} />
                                    {item.issue}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
                                <div style={{ fontWeight: 600 }}>{item.merchant}</div>

                                {isPriceHike ? (
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px' }}>${item.oldPrice.toFixed(2)}</span>
                                        <span style={{ color: '#d32f2f', fontWeight: 'bold', marginLeft: '8px' }}>${item.amount.toFixed(2)}</span>
                                    </div>
                                ) : (
                                    <div style={{ fontWeight: 'bold' }}>${item.amount.toFixed(2)}/mo</div>
                                )}
                            </div>

                            {!isPriceHike && (
                                <p style={{ fontSize: '13px', color: '#555' }}>No activity detected in the last 60 days.</p>
                            )}

                            <button style={{
                                width: '100%',
                                padding: '12px',
                                background: '#fff',
                                border: `1px solid ${borderColor}`,
                                color: textColor,
                                borderRadius: '8px',
                                fontWeight: 600,
                                marginTop: '12px',
                                cursor: 'pointer'
                            }}>
                                Review & Cancel
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Audit;
