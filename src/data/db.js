const DB_URL = "https://invitacion-nahuel-maximiliano-bustos.aws-us-west-2.turso.io";
const DB_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc1MjU0MTYsImlkIjoiMDFhMDMwZDAtODAwMS03ZGJmLTk1NDktYzUwNTZlZWNmOWU2Iiwia2lkIjoiSllpMmQ2ZXBMR0ZjMzRfY2FLbHJGcmN0bFB2eU5zYU9ja1RYWC1aYUN5ayIsInJpZCI6IjIyNDAwZmU4LWJlMDMtNDlkOC05ZTdmLTY1OGQ1ODMzNjJlOCJ9.IEOUUNIpeseEHlhjq3h_E12Bcp2-KFlkpNxiWlLgtw10UHjDUifgJa68CGR7VGdOWTA-cPmkOouNrcIVIU7_Aw";

export const executeQuery = async (sql, args = []) => {
  try {
    const response = await fetch(`${DB_URL}/v2/pipeline`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requests: [
          { type: "execute", stmt: { sql, args: args.map(a => ({ type: "text", value: String(a) })) } },
          { type: "close" }
        ]
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Turso HTTP Error:", errorText);
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.results && data.results[0] && data.results[0].type === "error") {
       console.error("Turso SQL Error:", data.results[0].error.message);
       throw new Error(data.results[0].error.message);
    }
    
    const result = data.results[0]?.response?.result;
    if (!result) return [];
    
    const cols = result.cols.map(c => c.name);
    const rows = result.rows.map(row => {
      const obj = {};
      row.forEach((cell, i) => {
        obj[cols[i]] = cell.value;
      });
      return obj;
    });
    
    return rows;
  } catch (error) {
    console.error("Database execution failed:", error);
    throw error;
  }
};

export const initDb = async () => {
  const sql = `CREATE TABLE IF NOT EXISTS guests (
    id TEXT PRIMARY KEY,
    name TEXT,
    status TEXT,
    message TEXT,
    date TEXT,
    companions TEXT
  )`;
  await executeQuery(sql);
};

export const getGuests = async () => {
  return await executeQuery("SELECT * FROM guests ORDER BY date DESC");
};

export const addGuest = async (guest) => {
  const sql = `INSERT INTO guests (id, name, status, message, date, companions) VALUES (?, ?, ?, ?, ?, ?)`;
  await executeQuery(sql, [
    guest.id, 
    guest.name, 
    guest.status, 
    guest.message || '', 
    guest.date, 
    guest.companions || '0'
  ]);
};

export const deleteGuest = async (id) => {
  await executeQuery("DELETE FROM guests WHERE id = ?", [id]);
};
