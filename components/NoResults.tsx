import React from 'react'
import { NextPage } from 'next'
import { MdOutlineVideocamOff } from 'react-icons/md'
import { FaCommentSlash } from 'react-icons/fa'

interface Iprops {
  text: string
}

const NoResults: NextPage<Iprops> = ({ text }) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-8xl'>

        {text === 'No Comments yet' ? (
          <FaCommentSlash />
        ) : (
          <MdOutlineVideocamOff />
        )}

      </p>
      <p className='text-2xl text-center'>
        {text}
      </p>
    </div>
  )
}

export default NoResults

