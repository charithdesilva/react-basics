import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { selectedEmployee } from './Actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Profile extends Component {
  constructor(props) {
    super(props);

    console.log('para' + this.props.match.params.name);

    this.state = {
      profUrl: this.props.profUrl,
      name: this.props.name,
      title: this.props.title,
      passedName: this.props.match.params.name, //
    };
  }

  handleProfilePic = (profileName, title, profUrl) => {
    console.log('Profile pic is clicked' + profileName);
    this.props.selectedEmployee({
      name: profileName,
      title: title,
      profUrl: profUrl,
    });
    this.props.history.push('/Profile/' + profileName);
  };

  displayProfileWithBack = (name, title, profUrl) => {
    return (<div>hello</div>)(this.displayProfile(name, title, profUrl));
  };

  displayProfile = (name, title, profUrl) => {
    return (
      <div>
        <img
          style={{ cursor: 'pointer' }}
          onClick={this.handleProfilePic.bind(this, name, title, profUrl)}
          src={profUrl}
          alt='profile pic'
        ></img>
        <h1>{name}</h1>
        <p>Title : {title}</p>
        <h1>------------------------------</h1>
      </div>
    );
  };

  render() {
    return (
      <div>
        {console.log('Render >>' + JSON.stringify(this.props.employee))}
        {this.state.passedName === '' || this.state.passedName === undefined ? (
          this.displayProfile(
            this.state.name,
            this.state.title,
            this.state.profUrl
          )
        ) : (
          <div>
            {this.displayProfile(
              this.props.employee.name,
              this.props.employee.title,
              this.props.employee.profUrl
            )}
            <button onClick={this.props.history.push.bind(this, '/')}>
              BACK
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
});

const mapDispatchToProps = {
  selectedEmployee,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
