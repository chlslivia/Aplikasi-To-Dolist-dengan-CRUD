import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    <div>
 
      {tasks.length === 0 ? (
        <div className="text-center p-5 bg-light rounded-3">
          <p className="lead">Tidak ada tugas. Klik "+ Add Task" untuk memulai.</p>
        </div>
      ) : (

        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            showEditForm={showEditForm}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
