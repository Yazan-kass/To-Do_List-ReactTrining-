import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { useState } from "react";
import { InnerContener, Title } from "../../theme/global";

const initialItems = [
  {
    title: "watching a movie",
    id: Math.random() * 1000,
  },
  {
    title: "Playing football",
    id: Math.random() * 1000,
  },
  {
    title: "Reading a book",
    id: Math.random() * 1000,
  },
  {
    title: "Go to gym",
    id: Math.random() * 1000,
  },
];
function Home() {
  const [value, setValue] = useState("");

  const [items, setItems] = useState(initialItems);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setItems([
      {
        title: value,
        id: Math.random() * 1000,
      },
      ...items,
    ]);

    setValue("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <InnerContener>
      <Title>List Task</Title>
      <InputBox
        value={value}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <List items={items} handleDelete={handleDelete} />
    </InnerContener>
  );
}
export default Home;
