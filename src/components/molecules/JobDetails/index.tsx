import React from 'react';

import Image from '../../../components/atoms/Image';
import Title from '../../../components/atoms/Title';
import Text from '../../../components/atoms/Text';

import { Container, Card, Content } from './styles';
import { DataJobDetails } from '../../../types/types';

const JobDetails = ({ data: { job, index } }: DataJobDetails) => {
  return (
    <Container>
      <Card>
        <Image src={`https://picsum.photos/500/300/?image=${index+1}`} />
        <Content>
          <div>
            <Title level={2}>{job.title}</Title>
            <Text>Company: {job.company.name}</Text>
            <Text>Skills: {job.tags.map(tag => tag.name).join(', ')}</Text>
          </div>
        </Content>
      </Card>
    </Container>
  );
}

export default JobDetails;