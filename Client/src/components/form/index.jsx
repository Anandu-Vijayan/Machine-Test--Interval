import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

import {
    Button,
    Form,
    Select,
    Space,
    Upload,
} from 'antd';
import Input from 'antd/es/input/Input';
import TextArea from 'antd/es/input/TextArea';
import { CREATE_TASK } from '../../services/api';

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e.fileList)) {
        const fileNames = e.fileList.map(file => file.name);
        console.log(fileNames);
        return fileNames;
    } else {
        console.log(e.fileList);
        return [];
    }
};







const DataForm = ({handleCancel}) => {

    const onFinish = async(values) => {
        console.log('Received values of form: ', values);
        const result = await CREATE_TASK(values)
        console.log(result,'result after post')
    };

    return (
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
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Discription!',
                    },
                ]}
            >
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item
                name="Heading"
                label="Heading"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Heading!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Status"
                label="Status"
                hasFeedback
                rules={[{ required: true, message: 'Please select the status' }]}
            >
                <Select placeholder="Please select a country">
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
    )
}

export default DataForm