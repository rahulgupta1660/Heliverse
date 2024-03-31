import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 container mx-auto">
      {data.map((user) => (
        <div className="p-4 rounded-md shadow-lg" key={user.id}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Domain: {user.domain}</p>
          <p>Available: {user.available ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
