import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1 className="font-bold text-2xl m-4">About</h1>
        <UserClass name={"First"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User name={"Yash Gohel(function)"} location={"Ahmedabad"} />
//       <UserClass name={"Yash Gohel(class)"} location={"Ahmedabad"} />
//     </div>
//   );
// };

export default About;
