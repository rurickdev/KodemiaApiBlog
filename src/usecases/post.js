
const Post = require('../models/post')

function create ({ title, date, readTime, description, author, image }) {
  const newPost = new Post({
    title,
    description,
    author,
    date,
    readTime,
    image
  })

  return newPost.save()
}

function getAll () {
  const allPosts = Post.find()
  return allPosts
}

async function deleteById (id) {
  const post = await Post.findById(id)
  const deletedPost = await Post.deleteOne(post)
  return deletedPost
}

module.exports = {
  create,
  getAll,
  deleteById
}
