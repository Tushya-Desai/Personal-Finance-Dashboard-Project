import React from 'react';

const ClarityScore = ({ score }) => {
    // Determine text based on score
    let text = "Good";
    let subtext = "You're doing well.";

    if (score >= 80) {
        text = "Excellent";
        subtext = "You're well prepared for the week ahead.";
    } else if (score < 50) {
        text = "Needs Attention";
        subtext = "Review your upcoming vampires and bills.";
    }

    return (
        <section className="card clarity-score">
            <h2>Clarity Score</h2>
            <div className="score-container">
                <div className="score-circle">{score}</div>
                <div className="score-text">
                    <strong>{text}</strong>
                    <p>{subtext}</p>
                </div>
            </div>
        </section>
    );
};

export default ClarityScore;
