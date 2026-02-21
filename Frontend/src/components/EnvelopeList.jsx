import React from 'react';
import axios from 'axios';
import EnvelopeItem from './EnvelopeItem';

const EnvelopeList = ({ envelopes }) => {
    const handleAddEnvelope = async () => {
        const name = window.prompt("Enter envelope name (e.g., Entertainment):");
        if (!name) return;
        const budget = window.prompt(`Enter budget for ${name} ($):`);
        if (!budget || isNaN(budget)) return alert("Invalid budget");

        try {
            await axios.post('http://localhost:3001/api/envelopes', {
                name,
                budget: parseFloat(budget)
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert("Error adding envelope");
        }
    };

    return (
        <section className="card envelopes">
            <div className="card-header">
                <h2>Envelopes</h2>
                <button className="text-btn" onClick={handleAddEnvelope}>+ Add</button>
            </div>
            <div className="envelope-list">
                {envelopes.map(env => (
                    <EnvelopeItem key={env.id} env={env} />
                ))}
            </div>
        </section>
    );
};

export default EnvelopeList;
