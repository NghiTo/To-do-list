import { useState } from "react";
import "./App.css";
import AddList from "./components/AddList/AddList";
import ContentList from "./components/ContentList/ContentList";

interface Task {
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "todo") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container">
      <AddList addTask={addTask} />
      <ContentList
        tasks={filteredTasks}
        onToggle={toggleTaskCompletion}
        onRemove={removeTask}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
export default App;
