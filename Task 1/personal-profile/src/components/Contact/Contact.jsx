import React from 'react'

const Contact = () => {
  return (
    <div className='bg-custom-light-beige px-8 py-1 flex items-center justify-center flex-col'>
      <div className='font-mono font-extrabold text-3xl'>Contact</div>
      
      {/* Email section */}
      <div className='py-4 w-full font-mono text-xl'>
        <p className='font-bold text-xl'>You can reach me at:</p>
        <p>
          <a 
            href='mailto:luqmanmughal734@gmail.com' 
            className='underline text-blue-600 hover:text-blue-800'>
              luqmanmughal734@gmail.com
          </a>
        </p>
      </div>

      {/* LinkedIn section */}
      <div className='w-full font-mono text-xl'>
        <p className='font-bold text-xl'>Connect with me on LinkedIn:</p>
        <p>
          <a 
            href='https://www.linkedin.com/in/your-linkedin-id' 
            target='_blank' 
            rel='noopener noreferrer'
            className='underline text-blue-600 hover:text-blue-800'>
              LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
