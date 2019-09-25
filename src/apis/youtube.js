import axios from "axios";

const KEY = "AIzaSyDCsgYnF7Ok2op3hVDe_uKWfsTkbsoBv3Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
