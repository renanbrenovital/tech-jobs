import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { Container, Main } from './styles';

type Job = {
  id: string;
  title: string;
}

type Data = {
  data?: Job[];
}

const Jobs = ({ data }:Data) => {
  return (
    <Container>
      <Header />
      <Main>
        <ul>
          {data?.map(job => <li key={job.id}>{job.title}</li>)}
        </ul>
      </Main>
      <Footer />
    </Container>
  )
};

export default Jobs;