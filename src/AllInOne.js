import { useState } from "react";

const AllInONe = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    {
      id: 1,
      checked: true,
      name: "item1",
    },
    {
      id: 2,
      checked: true,
      name: "item2",
    },
    {
      id: 3,
      checked: false,
      name: "item3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(listItems);
  };
  const handleClick = () => {
    console.log("clicked");
    setCount(Math.floor(Math.random() * 5));
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handleClick2("rahul")}>Click Here</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllInONe;
