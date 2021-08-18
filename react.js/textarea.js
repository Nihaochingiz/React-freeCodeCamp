class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      
  
  }
  handleChange(event) {
      this.setState({
        input: event.target.value
      });
  }
      // Change code above this line
    
    // Change code below this line
  
    // Change code above this line
    render() {
      return (
        <div>
          { /* ТУТ НЕ ПРАВИЛЬНО!!! */}
   <  input type="text" value={this.state.value} onChange={this.handleChange} />
   <input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
          { /* ТУТ  ПРАВИЛЬНО!!! */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };