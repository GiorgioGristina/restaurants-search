import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer PYGBk_bdBYlbkpSU-0YHEg4uww_pd52AYxOLb6116RKa0biaa4SkL8Z16grNp8tzii95FyyuIShABeHdknsAjTZkW-ioGcIAypst8XhydgJuuUUcJ2m6TLqSgRerYnYx"
  },
})