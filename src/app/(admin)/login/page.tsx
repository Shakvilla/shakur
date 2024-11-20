import React from 'react'
import LoginComponent from './_components/LoginComponent'

type Props = {}

function page({}: Props) {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <LoginComponent  />
    </section>
  )
}

export default page