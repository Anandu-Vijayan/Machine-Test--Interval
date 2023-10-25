import React from 'react';
import { Avatar, Button, Popconfirm, Table } from 'antd';
import ViewModal from '../viewModal';
import { DELETE_TASK } from '../../services/api';




const DataTable = ({ task }) => {


    const handleDelete =  async(rowId) => {
        console.log(rowId, 'rowid')
        const result = await DELETE_TASK(rowId)
        console.log(result,'deleted result')
    };

    const columns = [
        {
            title: 'Discription',
            dataIndex: 'Discription',
        },
        {
            title: 'Heading',
            dataIndex: 'Heading',
            defaultSortOrder: 'descend',
            // sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            filters: [
                {
                    text: 'High',
                    value: 'High',
                },
                {
                    text: 'Medium',
                    value: 'Medium',
                },
                {
                    text: 'Low',
                    value: 'Low',
                },
            ],
            onFilter: (value, record) => record.Status.indexOf(value) === 0,
            sortDirections: ['descend'],
        },
       {
  title: 'Image',
  dataIndex: 'Image',
  render: (text, record) => (
    <Avatar src={`http://localhost:5000/public/${record?.Image}`} />
  )
},
        {
            title: 'View',
            dataIndex: 'View',
            render: (text, record) => (
                <ViewModal record={record}/>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            render: (text, record) => (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            ),
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    console.log(task, 'task')
    return (
        <div>
            <Table columns={columns} dataSource={task} onChange={onChange} pagination={false} />
        </div>
    )
}

export default DataTable