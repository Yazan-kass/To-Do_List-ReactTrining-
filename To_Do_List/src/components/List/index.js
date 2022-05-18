import ListIem from "../ListIem";
import "./style.js";
import { ListBox } from "./style.js";
  
function List(props) {
  return (
    <ListBox>
      {props.items.map((item, id) => (
         <ListIem
         handleDelete = {props.handleDelete}
         title={item.title}
         id={item.id}
         key={`${item.id}`}
       />
      ))}
  
    </ListBox>
  );
}

export default List;
