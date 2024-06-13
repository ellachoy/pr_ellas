import React from 'react'
import { BeatLoader } from 'react-spinners'

const override = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  textAlign: 'center',
}

const Loading = ({ loading }) => {
  return (
    <div className='section wrapper'>
      <BeatLoader
        color='var(--color-loading)'
        loading={loading}
        cssOverride={override}
        size={15}
      />
      Loading...
    </div>
  )
}

export default Loading
