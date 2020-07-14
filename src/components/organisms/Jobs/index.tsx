import React from 'react';

import Loader from '../../atoms/Loader';
import Job from '../../molecules/Job';

import { List } from './styles';
import { DataJobs } from '../../../types/types';

const Jobs = ({ data }: DataJobs) => {
  const { jobs, loading } = data;
  return (      
    <>
      {loading
        ?
          <Loader />
        :
          <List>
            {jobs?.map((job,index) => <Job key={job.id} data={{ job, index }} />)}
          </List>
      }
    </>
  )
};

export default Jobs;