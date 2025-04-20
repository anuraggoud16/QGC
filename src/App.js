import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/quote")
      .then(res => res.json())
      .then(data => setQuote(data.quote))
      .catch(err => setQuote("Failed to fetch quote."));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Quote Generator</h1>
      <p>"{quote}"</p>
    </div>
  );
}

export default App;
