import { google } from 'googleapis'
import { BLOGGER_API_KEY, BLOGGER_USER_ID } from '../api/env'

const googleVersion = 'v3'
const blogIds = ['1434550778456516706']

const blogger = google.blogger({
  version: googleVersion,
  auth: BLOGGER_API_KEY
})

export async function getBlogById () {
  const params = {
    blogId: blogIds[0]
  }
  const blog = await blogger.blogs.get(params)
  return blog
}

export async function getBlogs (blogId) {
  const params = {
    userId: BLOGGER_USER_ID
  }
  const blog = await blogger.listByUser(params)
  return blog
}
