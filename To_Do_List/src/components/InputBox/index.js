import "./style.js";
import Button from "../Button";
import { InnerInput, Input } from "./style.js";

function InputBox(props) {
  return (
    <InnerInput >
      <Input
        onChange={(e)=>props.handleChange(e)}
        value={props.value}
        type="text"
        placeholder={"Enter task"}
        max={150}
      />
      <Button
        disabled={!props.value}
        isWhite={true}
        onClick={props.handleAdd}
        id={"add"}
        style={{
          background: !props.value && "lightgray",
        }}
      >
        Add
      </Button>
    </InnerInput>
  );
}

export default InputBox;
