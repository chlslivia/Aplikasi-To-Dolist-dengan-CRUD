import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
 
  const [task, setTask] = useState(
    taskToEdit || { name: '', priority: 'Medium', status: 'To Do' }
  );

  React.useEffect(() => {
    setTask(taskToEdit || { name: '', priority: 'Medium', status: 'To Do' });
  }, [taskToEdit]);


  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.name.trim()) {
      alert("Nama tugas tidak boleh kosong!");
      return;
    }

    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }

  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formTaskName" className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
              required
            />
          </Form.Group>


          <Form.Group controlId="formTaskPriority" className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Control 
              as="select" 
              name="priority" 
              value={task.priority} 
              onChange={handleChange}
            >
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formTaskStatus" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control 
              as="select" 
              name="status" 
              value={task.status} 
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskForm;
