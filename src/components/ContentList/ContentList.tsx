import React from "react";
import './ContentList.css'
import ItemList from "../ItemList/ItemList";

interface Task {
  text: string;
  completed: boolean;
}

interface ListProps {
  tasks: Task[];
  onToggle: (index: number) => void;
  onRemove: (index: number) => void;
  filter: string;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const List: React.FC<ListProps> = ({
  tasks,
  onToggle,
  onRemove,
  filter,
  onFilterChange,
}) => {
  return (
    <div className="box-list">
      <div className="list-head">
        <p>List:</p>
        <select value={filter} onChange={onFilterChange}>
          <option value="all">All</option>
          <option value="todo">To do</option>
          <option value="completed">Done</option>
        </select>
      </div>
      <div className="content">
        {tasks.map((task, index) => (
          <ItemList
            key={index}
            task={task}
            index={index + 1}
            onToggle={() => onToggle(index)}
            onRemove={() => onRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
