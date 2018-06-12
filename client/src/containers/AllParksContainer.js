import React, { Component } from "react";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import ParkDetails from "../components/ParkDetails";
import ParkSimple from "../components/ParkSimple";
import API from "../api";
import "./parkscontainer.css";

class AllParksPage extends Component {
  state = {
    allparks: true,
    parkData: [],
    commentName: "",
    commentRating: "",
    commentComment: "",
    parkId: "",
    singlePark: []
  };

  componentDidMount() {
    this.getParks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Get all parks & set all parks to true
  getParks = () => {
    this.setState({ allparks: true });
    API.getAllParks()
      .then(res => this.setState({ parkData: res.data }))
      .catch(err => console.log(err));
  };
  //Get one park by id & set all parks to false
  getOnePark = e => {
    e.preventDefault();
    const parkId = e.target.getAttribute("value");
    this.setState({ allparks: false, parkId: parkId });
    API.getPark(parkId)
      .then(res => this.setState({ singlePark: res.data }))
      .catch(err => console.log(err));
  };

  showPark = () => {
    API.getPark(this.state.parkId)
      .then(res => this.setState({ singlePark: res.data }))
      .catch(err => console.log(err));
  };

  //Add Comment
  addComment = e => {
    e.preventDefault();
    const parkId = e.target.getAttribute("value");
    API.addComment(parkId, {
      name: this.state.commentName,
      rating: this.state.commentRating,
      comment: this.state.commentComment
    })
      .then(res => console.log("comment added"))
      .then(
        this.setState(
          {
            name: "",
            rating: "",
            comment: ""
          },
          () => this.showPark()
        )
      )
      .catch(err => console.log(err));
  };
  //Delete Comment
  removeComment = e => {
    e.preventDefault();
    const parkId = e.target.getAttribute("park_value");
    const commentId = e.target.getAttribute("value");
    API.removeComment(parkId, commentId)
      .then(res => console.log("comment deleted"))
      .then(this.showPark())
      .catch(err => console.log(err));
  };
  //render
  render() {
    return (
      <div className="container">
        <h1>VIRGINIA NATIONAL PARKS</h1>
        {this.state.allparks === true ? (
          <div className="parks">
            {this.state.parkData.map(park => (
              <ParkSimple
                id={park._id}
                name={park.name}
                address={park.address}
                imgURL={park.img}
                viewOne={this.getOnePark}
              />
            ))}
          </div>
        ) : (
          <div className="individual-park">
            <ParkDetails
              key={this.state.singlePark._id}
              name={this.state.singlePark.name}
              imgURL={this.state.singlePark.img}
              type={this.state.singlePark.type}
              description={this.state.singlePark.description}
              address={this.state.singlePark.address}
              visitor_center={this.state.singlePark.visitor_center}
              hiking={this.state.singlePark.hiking}
              camping={this.state.singlePark.camping}
              viewAll={this.getParks}
            />
            <div className="comments">
              <br />
              <h3>Comments</h3>
              <CommentForm
                id={this.state.singlePark._id}
                addComment={this.addComment}
                handleInputChange={this.handleInputChange}
                commentName={this.state.commentName}
                commentRating={this.state.commentRating}
                commentComment={this.state.commentComment}
              />
              {this.state.singlePark.comments ? (
                <div>
                  {this.state.singlePark.comments.map(comment => (
                    <Comment
                      name={comment.name}
                      rating={comment.rating}
                      comment={comment.comment}
                      id={comment._id}
                      parkValue={this.state.singlePark._id}
                      deleteComment={this.removeComment}
                    />
                  ))}
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AllParksPage;
