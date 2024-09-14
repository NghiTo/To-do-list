import { useState } from "react";
import "./AddList.css";

interface AddProps {
  addTask: (task: string) => void;
}

const AddList: React.FC<AddProps> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddClick = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <>
      <div className="box-add">
        <div>
          <h1>Let's add what you have to do!</h1>
          <p>
            Fill the input and click button or "Enter" to add a new task into
            the list. To mark as completed, just click directly to the task
          </p>
        </div>
        <div className="form">
          <input
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            onKeyDown={handleKeyDown}
            className="input-list"
            type="text"
          />
          <button onClick={handleAddClick} className="add-btn">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default AddList;
