import React from 'react'
import Location from './Location'

class Trip extends React.Component {
  state = {
    show: false,
    editing: false,
    name: this.props.name,
    city: '',
    state: '',
  }

  showLocations = () => {
    this.props.showTrip(this.props.id)
    this.setState({ show: true })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateTrip, id } = this.props;
    updateTrip(id, this.state.name)
    this.setState({ editing: false })
  }

  handleSubmitLocation = (e) => {
    e.preventDefault();
    let location = {
      city: this.state.city,
      state: this.state.state,
      trip_id: this.props.id
    }
    this.props.addLocation(location)
    this.setState({ city: '', state: '' })
  }

  render() {
    const { updateLocation, deleteLocation, addLocation } = this.props;
    const locationProps = { updateLocation, deleteLocation, addLocation }
    if (this.state.editing) {
      return(
        <div>
          <form
            className="col l4"
            onSubmit={this.handleSubmit}
          >
            <input
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            />
          </form>
          <button
            className="btn"
            onClick={() => this.setState({ editing: false })}
          >Cancel</button>
        </div>
      )
    } else {
      return(
        <div>
          <h3>{this.props.name}</h3>
          { this.state.show ?
            <div>
              <form
                className="col s4"
                onSubmit={this.handleSubmitLocation}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      value={this.state.city}
                      name="city"
                      type="text"
                      placeholder="Add Location City"
                      onChange={this.handleChange}
                    />
                    <input
                      value={this.state.state}
                      name="state"
                      type="text"
                      placeholder="Add Location State"
                      onChange={this.handleChange}
                    />
                    <button
                      className="btn"
                      type="submit"
                    >Add Location</button>
                  </div>
                </div>
              </form>
              <ul>
                { this.props.locations.map( l =>
                  <Location key={l.id} {...l} {...locationProps}/>
                )}
              </ul>
            </div>
            :
            <div></div>
          }
          <button
            className="btn"
            onClick={this.showLocations}
          >Show Locations</button>
          <button
            className="btn"
            onClick={() => this.setState({ editing: true })}
          >Edit</button>
          <button
            className="btn"
            onClick={() => this.props.deleteTrip(this.props.id)}
          >Delete</button>
        </div>
      )
    }
  }
}

export default Trip;
