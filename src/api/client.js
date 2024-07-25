import axios from "axios";

const blogIds = ["1434550778456516706"];
const postIds = ["5552424279018795046"];
const BLOGGER_BLOG_URL = process.env.BLOGGER_BLOG_URL;
const API_KEY_PARAM = process.env.API_KEY_PARAM;

export async function getBlogById() {
  const blogs = axios
    .get(
      `${BLOGGER_BLOG_URL}/${blogIds[0]}/posts/${postIds[0]}${API_KEY_PARAM}`,
    )
    .then((response) => {
      return response.data;
    });

  return blogs;
}
