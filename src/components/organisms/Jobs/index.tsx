import React, { useState } from 'react';

import Loader from '../../atoms/Loader';
import Button from '../../atoms/Button';
import Select from '../../atoms/Select';
import Modal from '../../../components/atoms/Modal';
import Text from '../../atoms/Text';
import Job from '../../molecules/Job';

import { Container, List, Pagination, Buttons, Setting } from './styles';
import { DataJobs, EventSelectElement } from '../../../types/types';

const Jobs = ({ data: { jobs, loading } }: DataJobs) => 
{
  const modalDataInitial = {modalVisible: false, modalClose: () => {}, jobSlug: '', companySlug: ''};
  const [modalData, setModalData] = useState(modalDataInitial);
  
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const indexLast = perPage * page;
  const indexFirst = indexLast - perPage;
  const currentJobs = jobs.slice(indexFirst, indexLast);

  const totalPages = Math.round(jobs.length / perPage);
  const pages = Array(totalPages).fill(0).map((_,i) => i + 1);

  const jobsPerPage = (event: EventSelectElement) => {
    setPerPage(Number(event.currentTarget.value));
    setPage(1);
  }

  const modalClose = () => {
    setModalData(modalDataInitial);
  }
  
  const modalOpen = (jobSlug:string, companySlug:string) => {
    setModalData({modalVisible: true, modalClose, jobSlug, companySlug});
  }

  return (      
    <>
      {loading
        ?
          <Loader />
        : 
        <Container>
          <Modal data={modalData} />
          <List>
            {currentJobs?.map((job, index) => 
              <Job
                key={index}
                data={{ job, index, modalOpen }}
              />
            )}
          </List>
          <Pagination>
            <Buttons>
              {pages.map(number => 
                <Button
                  key={number}
                  className={page === number ? 'active': ''}
                  onClick={() => setPage(number)}
                >
                  {number}
                </Button>
              )}
            </Buttons>
            <Setting>
              <Text>Jobs per page:</Text>
              <Select onChange={jobsPerPage} defaultValue={perPage}>
                {[5,10,15,20].map(option => 
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                )}
              </Select>
            </Setting>
          </Pagination>
        </Container>
      }
    </>
  )
};

export default Jobs;