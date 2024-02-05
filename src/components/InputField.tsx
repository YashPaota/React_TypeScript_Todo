import { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo ,handleAdd }: props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
        }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter The Task"
        className="input__field"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__button" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
