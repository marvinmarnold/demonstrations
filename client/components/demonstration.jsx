Demonstration = React.createClass({
  propTypes: {
    demonstration: React.PropTypes.object.isRequired
  },

  categoryClass() {
    return "fa fa-3x " + {
      "criminal-justice": "fa-gavel",
      "politics": "fa-university"
    }[this.props.demonstration.category]
  },

  demonstrationClass() {
    return 'm-t-3 p-x-1 p-y-2 demonstration text-xs-center ' + {
      1: "moving",
      2: "trump",
      3: "next"
    }[this.props.demonstration._id]
  },

  render() {
    return (
      <div>
        <div className={this.demonstrationClass()}>

          <div className="demonstration-top">
            <h2>{this.props.demonstration.title}</h2>
          </div>

          <div className="demonstration-bottom">
            <i className={this.categoryClass()}></i>
            <h3 className='m-t-2'>{this.props.demonstration.hashtag}</h3>
          </div>

        </div>

        <h6 className="text-muted">{moment(this.props.demonstration.createdAt).fromNow()}</h6>
      </div>
    )
  }
})
