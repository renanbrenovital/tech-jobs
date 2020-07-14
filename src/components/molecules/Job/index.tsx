import React from 'react';
import Image from '../../../components/atoms/Image';
import Title from '../../../components/atoms/Title';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';
import { Container, Card, Content } from './styles';
import { DataJob } from '../../../types/types';

const Job = ({ data }: DataJob) => {
  const { job, index } = data;
  return (
    <Container>
      <Card>
        <Image src={`https://picsum.photos/500/300/?image=${index+1}`} />
        <Content>
          <Title level={2}>{job.title}</Title>
          <Text>{job.tags.map(tag => tag.name).join(', ')}</Text>
          <Button>Read More</Button>
        </Content>
      </Card>
    </Container>
  );
}

export default Job;