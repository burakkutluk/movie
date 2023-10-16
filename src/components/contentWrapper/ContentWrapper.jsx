import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div style={{ width: '100%', padding: '0px 20px', maxWidth: '1200px', margin: '0 auto' }}>{children}</div>
  )
}

export default ContentWrapper