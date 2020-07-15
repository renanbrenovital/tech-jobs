import React from 'react';

import Image from '../../../components/atoms/Image';
import Title from '../../../components/atoms/Title';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';

import { Container, Card, Content } from './styles';
import { DataJob } from '../../../types/types';

const Job = ({ data: { job, index, modalOpen } }: DataJob) => {
  return (
    <Container>
      <Card>
        <Image src={`https://picsum.photos/500/300/?image=${index+1}`} />
        <Content>
          <div>
            <Title level={2}>{job.title}</Title>
            <Text><small>Company: {job.company.name}</small></Text>
          </div>
          <Button onClick={() => modalOpen(job.slug, job.company.slug)}>More Details</Button>
        </Content>
      </Card>
    </Container>
  );
}

export default Job;