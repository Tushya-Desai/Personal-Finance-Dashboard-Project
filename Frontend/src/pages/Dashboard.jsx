import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SafeToSpend from '../components/SafeToSpend';
import EnvelopeList from '../components/EnvelopeList';
import ClarityScore from '../components/ClarityScore';
import BottomNav from '../components/BottomNav';
import NotificationBanner from '../components/NotificationBanner';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch dashboard data from our backend
        axios.get('http://localhost:3001/api/dashboard')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <Loader2 className="animate-spin" size={32} />
                <span style={{ marginLeft: '12px' }}>Loading Save&Spend...</span>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="error">
                Error loading data. Make sure the API is running on port 3001.
            </div>
        );
    }

    const { user, envelopes } = data;

    return (
        <>
            <NotificationBanner />
            <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ margin: 0, fontSize: '28px', letterSpacing: '-0.5px' }}>Save&Spend</h1>
                    <p style={{ margin: 0, color: '#666', fontSize: '15px' }}>Welcome back, {user.name}!</p>
                </div>
                <Link to="/privacy" style={{
                    width: '36px', height: '36px', borderRadius: '18px',
                    background: '#eee', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', textDecoration: 'none', color: '#333',
                    fontWeight: 'bold', fontSize: '14px'
                }}>
                    {user.name.charAt(0)}
                </Link>
            </header>

            <SafeToSpend balance={user.balance} />

            <EnvelopeList envelopes={envelopes} />

            <ClarityScore score={user.clarity_score} />

            <BottomNav />
        </>
    );
};

export default Dashboard;
