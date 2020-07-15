import React from 'react';

import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

import { Modal } from './styles';
import { TypeModal } from '../../../types/types';

export default ({ data: { modalVisible, modalClose, jobSlug, companySlug} }: TypeModal) =>   
(
  <Modal className={modalVisible ? 'fade-in' : 'fade-out'}>
    <Button onClick={() => modalClose()}>X</Button>
    <Text>Job: {jobSlug} Company: {companySlug}</Text>
  </Modal>
);