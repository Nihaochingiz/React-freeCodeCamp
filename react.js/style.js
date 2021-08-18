const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  }
  // Change code above this line
  class Colorful extends React.Component {
    render() {
      // Change code below this line
      return (
        <div style = {styles}>Style Me!</div>
      );
      // Change code above this line
    }
  };

  //CSS IN React
  class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
        </div>
      );
    }
  }