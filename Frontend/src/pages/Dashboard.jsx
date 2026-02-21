import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SafeToSpend from '../components/SafeToSpend';
import EnvelopeList from '../components/EnvelopeList';
import ClarityScore from '../components/ClarityScore';
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
            <header className="header">
                <h1>Save&Spend</h1>
                <p>Welcome back, {user.name}!</p>
            </header>

            <SafeToSpend balance={user.balance} />

            <EnvelopeList envelopes={envelopes} />

            <ClarityScore score={user.clarity_score} />
        </>
    );
};

export default Dashboard;
