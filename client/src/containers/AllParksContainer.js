import React, { Component } from "react";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import ParkDetails from "../components/ParkDetails";
import ParkSimple from "../components/ParkSimple";
import API from "../api";

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
    this.setState({ allparks: false });
    const parkId = e.target.getAttribute("value");
    API.getPark(parkId)
      .then(res => this.setState({ singlePark: res.data }))
      .catch(err => console.log(err));
  };

  //Add Comment
  addComment = () => {};
  //Delete Comment
  removeComment = () => {};
  //render
  render() {
    return (
      <div>
        {this.state.allparks === true ? (
          <div>
            {this.state.parkData.map(park => (
              <ParkSimple
                key={park._id}
                value={park._id}
                url={park.url}
                description={park.description}
                viewOne={this.getOnePark}
              />
            ))}
          </div>
        ) : (
          <div>
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
            <CommentForm
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
                  />
                ))}
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default AllParksPage;
