import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // PENTING: Import CSS kustom untuk styling

function App() {
  // State untuk menyimpan data tugas
  const [tasks, setTasks] = useState([
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Handler untuk menampilkan modal form
  const handleShowForm = () => setShowForm(true);

  // Handler untuk menutup modal form dan mereset taskToEdit
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null); // PENTING: Mereset data edit
  };

  // Handler untuk menambahkan tugas baru (Create)
  const addTask = (task) => {
    // Menambah ID unik menggunakan timestamp
    setTasks([...tasks, { ...task, id: Date.now() }]);
    handleCloseForm(); // Tutup form setelah submit
  };

  // Handler untuk mengedit tugas (Update)
  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    handleCloseForm(); // Tutup form setelah submit
  };

  // Handler untuk menghapus tugas (Delete)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handler untuk menyiapkan form dalam mode edit atau update cepat (seperti status "Done")
  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Task List</h1>
      
      {/* Tombol Tambah Tugas */}
      <Button variant="primary" onClick={handleShowForm} className="float-end">
        + Add Task
      </Button>

      <div className="clearfix mb-4"></div> {/* Clearfix untuk float */}

      <div className="mt-4">
        {/* Komponen Daftar Tugas (Read) */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />
        
        {/* Komponen Form (Create/Update) */}
        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </div>
    </Container>
  );
}

export default App;