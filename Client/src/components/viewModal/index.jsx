import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import { UPDATE_TASK } from '../../services/api';

const ViewModal = ({record}) => {
    
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

    const onFinish = async(values) => {
        console.log('Received values of form: ', values);
        const result = await UPDATE_TASK(values)
        console.log(result,'result after post')
    };

    
    console.log(record,'from viewmodal')
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
               View
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
                'input-number': 3,
                'checkbox-group': ['A', 'B'],
                rate: 3.5,
                'color-picker': null,
            }}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name='Discription' label="Discription" 
            >
                <TextArea rows={4}  value={record?.Discription}/>
            </Form.Item>

            <Form.Item
                name="Heading"
                label="Heading"
                hasFeedback
            >
                <Input defaultValue={record?.Heading} />
            </Form.Item>
            <Form.Item
                name="Status"
                label="Status"
            >
                <Select placeholder="Please select a status" defaultValue={record?.Status}>
                    <Option value="High">High</Option>
                    <Option value="Medium">Medium</Option>
                    <Option value="Low">Low</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="Image"
                label="Image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="reset">reset</Button>
                </Space>
            </Form.Item>
        </Form>
            </Modal>
        </>
    );
};
export default ViewModal;
