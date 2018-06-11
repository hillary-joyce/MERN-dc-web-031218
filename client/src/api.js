import axios from "axios";

export default {
  //get all VA Parks
  getAllParks: function(vaParkData) {
    return axios.get("/api/parks", vaParkData);
  },
  //Get one VA Park by ID
  getPark: function(parkId, parkData) {
    return axios.get(`/api/${parkId}`, parkData);
  },
  addComment: function(parkId, commentData) {
    return axios.post(`/api/${parkId}/new`, commentData);
  },
  removeComment: function(parkId, commentId) {
    return axios.delete(`/api/${parkId}/${commentId}`);
  }
};
