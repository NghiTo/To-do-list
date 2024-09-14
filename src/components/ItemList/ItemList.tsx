import React from "react";
import "./ItemList.css";

interface Task {
  text: string;
  completed: boolean;
}

interface ItemProps {
  task: Task;
  index: number;
  onToggle: () => void;
  onRemove: () => void;
}

const ItemList: React.FC<ItemProps> = ({ task, index, onToggle, onRemove }) => {
  return (
    <div className="child">
      <div className={task.completed ? "completed" : ""} onClick={onToggle}>
        {index}. {task.text}
      </div>
      <i
        className="fa-solid fa-trash"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      ></i>
    </div>
  );
};

export default ItemList;
