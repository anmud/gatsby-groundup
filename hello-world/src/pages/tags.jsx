import React from 'react'
import TagsBlock from '../components/TagsBlock'

const Tags = ({ pageContext }) => {
  console.log(pageContext)
  const { tags } = pageContext
  return (
    <div>
      <TagsBlock list={tags} />
    </div>
  )
}

export default Tags