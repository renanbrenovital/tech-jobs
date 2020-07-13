import React, { useEffect, useState } from 'react';
import Jobs from '../../components/templates/Jobs';
import qraphql_api from '../../services/api';

const Home = () => {
  const [data, setData] = useState([]);

  const query = `{
    jobs {
      id,
      title,
    }
  }`;

  useEffect(() => {
    qraphql_api('https://api.graphql.jobs/', query)
    .then(function(response) {
      return response.json();
    })
    .then(function({ data }) {
      setData(data.jobs);
    });
  }, [query]);

  return <Jobs data={data} />;
};

export default Home;