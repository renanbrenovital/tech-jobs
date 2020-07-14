import React, { useEffect, useState } from 'react';
import JobsTemplate from '../../components/templates/JobsTemplate';
import api from '../../services/api';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const query = `{
    jobs {
      id,
      title,
      tags {
        name
      },
    }
  }`;

  useEffect(() => {
    const graphqlQuery = async () => {
      setLoading(true);
      const response = await api('https://api.graphql.jobs/', query);
      const { data } = await response.json();
      setJobs(data.jobs);
      setLoading(false);
    } 

    graphqlQuery();
  }, [query]);

  return <JobsTemplate data={{jobs, loading}} />;
};

export default Home;