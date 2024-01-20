import { useEffect, useState } from "react";

const Shimmer = () => {
  //   const [arr, setArr] = useState([]);
  //   useEffect(() => {
  //     apply();
  //   }, []);
  //   const apply = () => {
  //     setArr(new Array(20).fill(<div className="shimmer-card"></div>));
  //   };
  //   return <div className="shimmer-container">{arr}</div>;

  //Shimmer-UI That use For better UX
  const shimmerCards = [];
  for (let i = 0; i < 20; i++) {
    shimmerCards.push(
      <div
        key={i}
        className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100"
      ></div>
    );
  }
  return <div className="flex flex-wrap justify-around">{shimmerCards}</div>;
};

export default Shimmer;
