import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ListOrdered, AlertTriangle, Calculator } from 'lucide-react';

const BottomNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="bottom-nav">
            <Link to="/" className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                <Home size={24} />
                <span>Home</span>
            </Link>

            <Link to="/transactions" className={`nav-item ${currentPath === '/transactions' ? 'active' : ''}`}>
                <ListOrdered size={24} />
                <span>Transactions</span>
            </Link>

            <Link to="/simulator" className={`nav-item ${currentPath === '/simulator' ? 'active' : ''}`}>
                <Calculator size={24} />
                <span>Simulator</span>
            </Link>

            <Link to="/audit" className={`nav-item ${currentPath === '/audit' ? 'active' : ''}`}>
                <AlertTriangle size={24} />
                <span>Audit</span>
            </Link>
        </nav>
    );
};

export default BottomNav;
