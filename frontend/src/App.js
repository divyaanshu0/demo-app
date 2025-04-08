import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://35.173.130.104:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(`${data.message} (Server time: ${data.time})`));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
