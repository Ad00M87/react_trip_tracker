import React from 'react'

class TripForm extends React.Component {
  state = {
    name: '',
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTrip(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div className="row">
        <form
          className="col s12"
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                value={this.state.name}
                name="name"
                type="text"
                className='validate'
                placeholder="Add Trip Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TripForm;
