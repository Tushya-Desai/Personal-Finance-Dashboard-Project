import React from 'react';
import EnvelopeItem from './EnvelopeItem';

const EnvelopeList = ({ envelopes }) => {
    return (
        <section className="card envelopes">
            <div className="card-header">
                <h2>Envelopes</h2>
                <button className="text-btn">+ Add</button>
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
