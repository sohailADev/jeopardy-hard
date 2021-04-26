import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      fomrData: {
        firstName: "",
        lastName: "",
      },
    };
  }
  handleChange = (event) => {
    const _formData = { ...this.state.fomrData };
    _formData[event.target.name] = event.target.value;
    this.setState({ fomrData: _formData });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };
  handleReset = () => {
    this.setState({
      submitted: false,
      fomrData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    //conditional handling
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.fomrData.firstName}, for submitting the form.
          </p>
          <button onClick={this.handleReset}> Rest From</button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.fomrData.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.fomrData.lastName}
            />
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}
export default Contact;
