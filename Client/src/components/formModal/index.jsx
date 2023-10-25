import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DataForm from '../form';

const FormModal= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Task
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DataForm handleCancel={handleCancel}/>
      </Modal>
    </>
  );
};

export default FormModal;