import React, {Component} from 'react'

class DetailsCard extends Component {
  render () {
    return (
        <div>
              <h5 className="card-title">{this.props.title}</h5>
              <h6 className="text-color">
              <i className="fa fa-calendar fa-fw mr-2"></i>
                {this.props.startDate + " - "}   
                {this.props.current ? <button type="button" className="btn btn-primary btn-sm">Current</button> : 
                this.props.endDate}
              </h6>
              <p className="card-text text-color-black">
              {this.props.overview}
              </p>
              <hr/>
              <br/>
        </div>
    )
  }
}

export default DetailsCard
