const sql = require('better-sqlite3');
const db = sql('meals.db');

async function dropData() {
  const stmt = db.prepare(`
  DROP TABLE meals 
  `);

  stmt.run();
}

dropData();
