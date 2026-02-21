const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ensure Database directory exists
const dbDir = path.resolve(__dirname, '../Database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir);
}

const dbPath = path.resolve(dbDir, 'savespend.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Initial setup
        db.serialize(() => {
            db.run(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    balance REAL DEFAULT 0,
                    clarity_score INTEGER DEFAULT 85
                )
            `);
            db.run(`
                CREATE TABLE IF NOT EXISTS transactions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER,
                    amount REAL,
                    merchant TEXT,
                    category TEXT,
                    date TEXT,
                    is_recurring BOOLEAN DEFAULT 0
                )
            `);
            db.run(`
                CREATE TABLE IF NOT EXISTS envelopes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER,
                    name TEXT,
                    budget REAL,
                    spent REAL DEFAULT 0
                )
            `);

            // Seed DB
            db.get("SELECT COUNT(*) as count FROM users", (err, row) => {
                if (row && row.count === 0) {
                    db.run("INSERT INTO users (name, balance, clarity_score) VALUES ('Dana', 124.50, 85)");
                    db.run("INSERT INTO envelopes (user_id, name, budget, spent) VALUES (1, 'Groceries', 200, 150)");
                    db.run("INSERT INTO envelopes (user_id, name, budget, spent) VALUES (1, 'Dining Out', 100, 80)");
                    db.run("INSERT INTO envelopes (user_id, name, budget, spent) VALUES (1, 'Transport', 50, 55)");
                    db.run("INSERT INTO transactions (user_id, amount, merchant, category, date, is_recurring) VALUES (1, 15.99, 'Netflix', 'Entertainment', datetime('now', '-2 days'), 1)");
                    db.run("INSERT INTO transactions (user_id, amount, merchant, category, date, is_recurring) VALUES (1, 40.00, 'Planet Fitness', 'Health', datetime('now', '-7 days'), 1)");
                    db.run("INSERT INTO transactions (user_id, amount, merchant, category, date, is_recurring) VALUES (1, 3.50, 'Starbucks', 'Dining Out', datetime('now', '-1 days'), 0)");
                    db.run("INSERT INTO transactions (user_id, amount, merchant, category, date, is_recurring) VALUES (1, 120.00, 'Whole Foods', 'Groceries', datetime('now', '-3 days'), 0)");
                    console.log('Database seeded with initial mock data.');
                }
            });
        });
    }
});

module.exports = db;
