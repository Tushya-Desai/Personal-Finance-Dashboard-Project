import React from 'react';
import { ArrowLeft, ShieldCheck, Download, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacySettings = () => {
    return (
        <div className="privacy-page">
            <header className="header" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Link to="/" style={{ color: '#000', marginRight: '16px' }}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 style={{ margin: 0, fontSize: '24px' }}>Privacy & Data</h1>
            </header>
            <p style={{ color: '#666', marginBottom: '24px', marginLeft: '40px' }}>Your data, your control.</p>

            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <ShieldCheck size={28} color="#2e7d32" />
                    <div>
                        <h3 style={{ margin: 0, fontSize: '16px' }}>End-to-End Encryption</h3>
                        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Your financial data is encrypted at rest and in transit.</p>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '16px' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '15px' }}>Data Management</h3>
                <button style={{
                    width: '100%',
                    padding: '14px',
                    background: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginBottom: '12px'
                }}>
                    <Download size={18} />
                    Export My Data (CSV)
                </button>
                <button style={{
                    width: '100%',
                    padding: '14px',
                    background: '#fff',
                    border: '1px solid #ef9a9a',
                    color: '#d32f2f',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}>
                    <Trash2 size={18} />
                    Delete Account & Data
                </button>
            </div>
        </div>
    );
};

export default PrivacySettings;
