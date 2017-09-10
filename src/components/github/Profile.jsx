import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';

class Profile extends Component{

  render() {
    return (
      <div className="card">

        <div className="card-body">
          <h4 className="card-title">{this.props.userData.name}</h4>
          <div className="row">
            <div className="col-md-3">
              <img className="card-img-top" src={this.props.userData.avatar_url} style={{width: "100%"}} alt="Card image cap" />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <span className="badge badge-primary">{this.props.userData.public_repos} Public_repo</span>
                  <span className="badge badge-success">{this.props.userData.public_gists} Public gist</span>
                  <span className="badge badge-info">{this.props.userData.followers} Follower</span>
                  <span className="badge badge-danger">{this.props.userData.following} Following</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>UserName: </strong>{this.props.userData.name}</li>
                    <li className="list-group-item"><strong>location: </strong>{this.props.userData.location}</li>
                    <li className="list-group-item"><strong>Email: </strong>{this.props.userData.email}</li>
                  </ul>
                </div>
              </div>
              <br />
              <a className="btn btn-primary" href={this.props.userData.html_url}>Visit my github</a>
            </div>
          </div>

          <hr />

          <h3> User Repositories </h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    )
  }

}

export default Profile
