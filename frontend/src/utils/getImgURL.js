import React from 'react'

const getimgurl = (name) => {
  return new URL(`../assets/books/${name}`,import.meta.url)
}

export default getimgurl
