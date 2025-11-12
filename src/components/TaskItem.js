import React from 'react';
import { Card, Badge, Button, Row, Col, Form } from 'react-bootstrap'; 
import { Trash, Edit3 } from 'react-feather'; 

const TaskItem = ({ task, deleteTask, showEditForm }) => {
  
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Done': return 'success';
      case 'In Progress': return 'primary';
      case 'To Do': return 'secondary';
      default: return 'secondary';
    }
  };


  const handleToggleDone = () => {

    const newStatus = task.status === 'Done' ? 'To Do' : 'Done';

    showEditForm({ ...task, status: newStatus });
  };

  return (
    <Card className="mb-3 shadow-sm rounded-3">
      <Card.Body>
        <Row className="align-items-center">
          

          <Col md={3} className="fw-bold">
            <span className="text-muted d-block small mb-1">Task</span>
            {task.name}
          </Col>


          <Col md={2} className="text-center">
            <span className="text-muted d-block small mb-1">Priority</span>
            <Badge bg={getPriorityVariant(task.priority)} className="py-2 px-3 rounded-pill">
              {task.priority}
            </Badge>
          </Col>


          <Col md={2} className="text-center">
            <span className="text-muted d-block small mb-1">Status</span>
            <Badge bg={getStatusVariant(task.status)} className="py-2 px-3 rounded-pill">
              {task.status}
            </Badge>
          </Col>
          

          <Col md={2} className="text-center">
            <Form.Check 
              type="radio" 
              checked={task.status === 'Done'}
              onChange={handleToggleDone}
              className="mt-2"

              style={{ transform: 'scale(1.2)' }}
            />
          </Col>

 
          <Col md={3} className="text-end">

            <Button 
              variant="outline-primary" 
              size="sm" 
              className="me-2 rounded-circle"
              onClick={() => showEditForm(task)}
            >
              <Edit3 size={18} />
            </Button>


            <Button 
              variant="outline-danger" 
              size="sm" 
              className="rounded-circle"
              onClick={() => deleteTask(task.id)}
            >
              <Trash size={18} />
            </Button>
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
