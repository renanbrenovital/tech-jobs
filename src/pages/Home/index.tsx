import React, { useEffect, useState } from 'react';
import TemplateJobs from '../../components/templates/TemplateJobs';
import api from '../../services/api';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: '09a098df9a8',
      title: 'Frontend UX & UI',
      tags: [
        { name: 'React JS' },
        { name: 'React Native' },
        { name: 'Javascript' },
        { name: 'UX' },
        { name: 'UI' },
        { name: 'Flexbox' },
        { name: 'Grid' },
        { name: 'SASS' },
        { name: 'Figma' },
        { name: 'Git' },
        { name: 'GitHub' },
      ],
    }
  ]);

  // const query = `{
  //   jobs {
  //     id,
  //     title,
  //     tags {
  //       name
  //     },
  //   }
  // }`;

  // useEffect(() => {
  //   const graphqlQuery = async () => {
  //     setLoading(true);
  //     const response = await api('https://api.graphql.jobs/', query);
  //     const { data } = await response.json();
  //     setJobs(data.jobs);
  //     setLoading(false);
  //   } 

  //   graphqlQuery();
  // }, [query]);

  return <TemplateJobs data={{jobs, loading}} />;
};

export default Home;