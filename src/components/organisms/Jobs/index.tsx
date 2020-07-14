import React, { useState } from 'react';

import Loader from '../../atoms/Loader';
import Job from '../../molecules/Job';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

import { Container, List, Pagination } from './styles';
import { DataJobs } from '../../../types/types';

const Jobs = ({ data }: DataJobs) => {
  const { jobs, loading } = data;

  const [page, setPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  const indexLast = jobsPerPage * page;
  const indexFirst = indexLast - jobsPerPage;
  const currentJobs = jobs.slice(indexFirst, indexLast);

  const totalPages = Math.round(jobs.length / jobsPerPage);
  const pages = Array(totalPages).fill(0).map((_,i) => i + 1);

  return (      
    <>
      {loading
        ?
          <Loader />
        : 
        <Container>
          <List>
            {currentJobs?.map((job,index) => <Job key={index} data={{ job, index }} />)}
          </List>
          <Pagination>
            {pages.map(page => <Button key={page} onClick={() => setPage(page)}>{page}</Button>)}
            <div>
              <Text>Jobs per page:</Text>
              <select onChange={e => {
                  setJobsPerPage(Number(e.target.value));
                  setPage(1);
                }
              }>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </Pagination>
        </Container>
      }
    </>
  )
};

export default Jobs;