import React from "react";
class UserClass extends React.Component {
  //loading(mounting) the class component means we create instance of the class

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  // To Make An API Call
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "Child");
  }
  componentDidUpdate() {
    console.log("Component Update");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    console.log(this.props.name + "Child Render");
    return (
      <div className="w-[250px] h-[250px] p-2 m-2 bg-gray-100">
        <img className="rounded-lg w-44" src={this.state.userInfo.avatar_url} />
        <h2 className="font-bold text-lg">Name : {this.state.userInfo.name}</h2>
        <h3 className="font-bold">Location : {this.state.userInfo.location}</h3>
      </div>
    );
  }
}
export default UserClass;
