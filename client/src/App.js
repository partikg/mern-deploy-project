import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/health`)
      .then((res) => res.json())
      .then((json) => {
        setHealth(json);
      });
  }, []);

  return (
    <div>
      {health && `Server says: ${health.status}`}
    </div>
  );
}

export default App;
