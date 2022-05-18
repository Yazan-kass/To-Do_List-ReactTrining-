
import Button from "../Button";
import { Item, InnerTitle} from "./style.js";

function ListIem(props) {
  return (
    <Item>
      <InnerTitle >{props.title}</InnerTitle>
      <Button onClick={() => props.handleDelete(props.id)}>Delete</Button>
    </Item>
  );
}

export default ListIem;
