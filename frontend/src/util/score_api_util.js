import axios from "axios";

export const fetchScores = () => {
  return axios.get("api/scores/scoreboard");
};

export const fetchSingleScore = username => {
  return axios.get(`api/scores/currentPlayer/${username}`, username);
};

export const createScore = score => {
  return axios.post("api/scores/createScore", score);
};
