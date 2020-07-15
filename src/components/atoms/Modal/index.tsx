import React from 'react';

import Button from '../../atoms/Button';

import { Modal } from './styles';
import { TypeModal } from '../../../types/types';

export default ({ data: { modalVisible, modalClose, modalContent} }: TypeModal) =>   
(
  <Modal className={modalVisible ? 'fade-in' : 'fade-out'}>
      <Button onClick={() => modalClose()}>X</Button>
      {modalContent}
  </Modal>
);