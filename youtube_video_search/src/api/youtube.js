import axios from "axios";

const KEY = "AIzaSyDdRsuPp0TgkG7SK0JLybiNjRq9JMLSyWc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
