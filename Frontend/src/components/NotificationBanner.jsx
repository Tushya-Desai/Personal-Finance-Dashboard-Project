import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

const NotificationBanner = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/notifications')
            .then(res => res.json())
            .then(data => {
                if (data.notifications) {
                    setNotifications(data.notifications);
                }
            })
            .catch(err => console.error("Error fetching notifications:", err));
    }, []);

    if (notifications.length === 0) return null;

    const removeNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
        <div style={{
            position: 'fixed',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '440px',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            {notifications.map(n => {
                const isWarning = n.type === 'warning';
                return (
                    <div key={n.id} style={{
                        background: isWarning ? '#fff3e0' : '#ffebee',
                        border: `1px solid ${isWarning ? '#ffcc80' : '#ef9a9a'}`,
                        padding: '12px 16px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Bell size={18} color={isWarning ? '#e65100' : '#c62828'} />
                            <span style={{ fontSize: '13px', fontWeight: 500, color: isWarning ? '#e65100' : '#c62828' }}>
                                {n.message}
                            </span>
                        </div>
                        <button
                            onClick={() => removeNotification(n.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#666' }}
                        >
                            <X size={16} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default NotificationBanner;
