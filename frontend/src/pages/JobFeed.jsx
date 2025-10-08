import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobFeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:5000/search", {
      query: "React developer"
    })
    .then(res => setFeed(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Matched Jobs</h2>
      {feed.map((job, i) => (
        <div key={i}>
          <h3>{job.job}</h3>
          <p>Match Score: {job.score}%</p>
        </div>
      ))}
    </div>
  );
}

export default JobFeed;
