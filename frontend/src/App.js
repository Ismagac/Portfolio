import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Mi Portfolio</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  );
}

export default App;
