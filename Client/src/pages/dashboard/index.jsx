import React, { useEffect, useState } from 'react'
import DataTable from '../../components/table'
import { GET_ALL_TASKS } from '../../services/api'
import FormModal from '../../components/formModal'

const Dashboard = () => {
  const [task, setTask] = useState('')

  const getAllTasks = async () => {
    const data = await GET_ALL_TASKS()
    console.log(data, 'data')
    setTask(data?.getAllTasks)
  }

  useEffect(() => {
    getAllTasks()
  }, [])


  return (
    <div>
      <div>
        <FormModal/>
      </div>
      <DataTable task={task} />
    </div>
  )
}

export default Dashboard