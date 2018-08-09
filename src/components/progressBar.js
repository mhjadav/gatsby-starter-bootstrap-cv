import React, {Component} from 'react'

class ProgressBar extends Component {
  render () {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: (this.props.rating/10)*100+"%"}} aria-valuenow={this.props.rating} aria-valuemin={0} aria-valuemax={10}>{this.props.rating}/10</div>
        </div>
    )
  }
}

export default ProgressBar
