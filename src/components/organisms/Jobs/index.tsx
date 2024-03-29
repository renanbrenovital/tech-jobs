import React, { useState, useCallback } from 'react';

import Loader from '../../atoms/Loader';
import Button from '../../atoms/Button';
import Select from '../../atoms/Select';
import Modal from '../../../components/atoms/Modal';
import Text from '../../atoms/Text';
import Job from '../../molecules/Job';
import JobDetails from '../../molecules/JobDetails';

import { Container, List, Pagination, Options, Buttons, Setting } from './styles';
import { DataJobs, EventSelectElement } from '../../../types/types';

import api from '../../../services/api';

const Jobs = ({ data: { jobs, loading } }: DataJobs) => 
{
  const functionComponentElement = React.createElement(React.Fragment);
  const [modalData, setModalData] = useState({modalVisible: false, modalClose: () => {}, modalContent: functionComponentElement});
  
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const indexLast = perPage * page;
  const indexFirst = indexLast - perPage;
  const currentJobs = jobs.slice(indexFirst, indexLast);

  const totalPages = Math.round(jobs.length / perPage);
  const pages = Array(totalPages).fill(0).map((_,i) => i + 1);

  const selectPage = useCallback((event: EventSelectElement) => {
    setPage(Number(event.currentTarget.value));
  }, [setPage]);
  
  const jobsPerPage = useCallback((event: EventSelectElement) => {
    setPerPage(Number(event.currentTarget.value));
    setPage(1);
  }, [setPage, setPerPage]);

  const modalClose = () => {
    setModalData({modalVisible: false, modalClose, modalContent: functionComponentElement});
  }
  
  const modalOpen = async (jobSlug:string, companySlug:string, index:number) => {    
    const query = `{
      job(input:{jobSlug:"${jobSlug}", companySlug:"${companySlug}"}) {
        slug,
        title,
        description,
        locationNames,
        tags {
          name
        },
        commitment {
          title
        },
        company {
          name,
          slug,
          websiteUrl
        }
      }
    }`;

    const response = await api('https://api.graphql.jobs/', query);
    const { data: { job } } = await response.json();
    
    setModalData({
      modalVisible: true,
      modalClose,
      modalContent: <JobDetails data={{ job, index }} />
    });
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
          <Pagination id='pagination'>
            <Options>
              <Text>Select page:</Text>
              <Select onChange={selectPage} defaultValue={page}>
                {pages.map(number => 
                  <option
                    key={number}
                    value={number}
                  >
                    {number}
                  </option>
                )}
              </Select>
            </Options>
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
              <Text>Per page:</Text>
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