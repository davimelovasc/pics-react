import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID fedabbdd38e6e2272dc62a042ada864a0963cf406c08e1d92aa980f5fb5d3e14"
  }
});
