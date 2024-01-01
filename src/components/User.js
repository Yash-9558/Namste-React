import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Yash");
  //   }, 1000);
  //   every state change in component mounting and munounting happen
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Yash");
  //   }, 1000);
  //   only when first time this render
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h4>Contact : @Yash-9558</h4>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default User;
