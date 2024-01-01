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
      <div className="user-card">
        <img
          src={this.state.userInfo.avatar_url}
          style={{ height: "100px", width: "100px" }}
        />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
      </div>
    );
  }
}
export default UserClass;
