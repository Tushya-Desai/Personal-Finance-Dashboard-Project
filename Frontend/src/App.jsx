import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Audit from './pages/Audit';
import Simulator from './pages/Simulator';
import PrivacySettings from './pages/PrivacySettings';
import './index.css';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/audit" element={<Audit />} />
                    <Route path="/simulator" element={<Simulator />} />
                    <Route path="/privacy" element={<PrivacySettings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
