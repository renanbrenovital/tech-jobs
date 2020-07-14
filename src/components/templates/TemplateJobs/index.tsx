import React from 'react';

import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import Footer from '../../organisms/Footer';

import { DataJobs } from '../../../types/types';
import Jobs from '../../organisms/Jobs';

const TemplateJobs = ({ data }: DataJobs) => {
  return (
    <>
      <Header />
      <Main>
        <Jobs data={data} />
      </Main>
      <Footer />
    </>
  )
};

export default TemplateJobs;