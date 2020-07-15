import React, { useState } from 'react';

import Image from '../../../components/atoms/Image';
import Title from '../../../components/atoms/Title';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import Loader from '../../../components/atoms/Loader';

import { Container, Card, Content, Form } from './styles';
import { DataJobDetails } from '../../../types/types';

import api from '../../../services/api';

const JobDetails = ({ data: { job, index } }: DataJobDetails) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const apply = async () => { 
    setError('');
    
    if(name === '' || email === ''){
      setError('Name and Email are required');
      setLoading(false);
      return;
    } 

    setLoading(true);

    const mutation = `mutation {
      subscribe(input:{name: "${name}", email: "${email}"}) {
        subscribe
      }
    }`;

    const response = await api('https://api.graphql.jobs/', mutation);
    const { data } = await response.json();
    
    if(data.subscribe.subscribe) {
      setSubscribe(true);
    }
    else {
      setError('Error when trying to apply for work, try later please!');
    }

    setLoading(false);
  }

  return (
    <Container>
      <Card>
          <Image src={`https://picsum.photos/500/300/?image=${index+1}`} />
          <Content>
            <Title level={2}>{job.title}</Title>
            {job.locationNames && <Text><b>Location:</b> {job.locationNames}</Text>}
            <Text>
              <b>Company: </b> 
              <a
                href={job.company.websiteUrl}
                title={`Website ${job.company.name}`}
                target="blank"
              >
                {job.company.name}
              </a>
            </Text>
            <Text><b>Skills:</b> {job.tags.map(tag => tag.name).join(', ')}</Text>
            <Text><b>Time:</b> {job.commitment.title}</Text>
            <Text><b>Description:</b> {job.description.slice(0, 200)} . . .</Text>
            {error !== '' && <Text>{error}</Text>}
            {loading ? <Loader /> : 
              subscribe ? <Text>Your application was successful!</Text>
                :
                <Form>
                  <Input name="name" type="text" onChange={e => setName(e.target.value)} />
                  <Input name="email" type="email" onChange={e => setEmail(e.target.value)} />
                  <Button onClick={() => apply()}>Apply</Button>
                </Form>
            }
          </Content>
      </Card>
    </Container>
  );
}

export default JobDetails;