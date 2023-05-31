import React, { useEffect, useState } from 'react';

function ActivityRecommendation() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivities();
  }, []);

  function fetchActivities() {
    fetch('http://www.boredapi.com/api/activity?participants=1&type=recreational&price=0')
      .then(response => response.json())
      .then(data => {
        setActivities(prevActivities => [...prevActivities, data.activity]);
      })
      .catch(error => {
        setError(error.message);
      });
  }

  function handleDelete(index) {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  }
  

  return (
    <div>
        <h4>I can suggest some Activities for you!</h4>
      <button onClick={fetchActivities}>Click me and keep clicking! </button>
      <div id="activity_recommendation_container">
        {activities.length > 0 ? (
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                {activity} <button onClick={() => handleDelete(index)}>x</button>
              </li>
            ))}
          </ul>
        ) : (
          error ? <p>{error}</p> : <p>No activities suggested.</p>
        )}
      </div>
    </div>
  );
}

export default ActivityRecommendation;
