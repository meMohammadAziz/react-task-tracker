import "./App.css";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import { Route } from "react-router";
import About from "./component/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const getTasksFromServer = await fetchData();
      setTasks(getTasksFromServer);
    };
    getTasks();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchDataS = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Delete Task

  const onDelete = (fak) => {
    // await fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    // const tasksAfter = tasks.filter((task) => task.id !== id);
    // setTasks(tasksAfter);
    console.log(fak)
  };

  //Toggle Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchDataS(id);
    const latestTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(latestTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //Add Task

  const onAdd = async (task) => {
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Header toggler={toggler} setToggler={setToggler}></Header>
      <Route
        exact
        path="/"
        render={(props) => (
          <>
            {toggler && <AddTask onAdd={onAdd}></AddTask>}
            {tasks.length > 0 ? (
              <Tasks
                onDelete={onDelete}
                onReminder={toggleReminder}
                tasks={tasks}
              ></Tasks>
            ) : (
              "No Tasks To Show"
            )}
            <Footer></Footer>
          </>
        )}
      ></Route>
      <Route exact component={About} path="/about"></Route>
    </div>
  );
}

export default App;
