import React from 'react'
import Typewriter from 'typewriter-effect'
const Hobbies = () => {
  return (
    <div className='bg-custom-light-beige px-8 py-1 flex items-center justify-center flex-col'>
        <div className='font-mono font-extrabold text-3xl'>Hobbies</div>
        <div className='py-4 w-full font-mono text-xl'>
        <p className='font-mono text-xl'>My Hobbies:</p>
              <Typewriter
                options={{
                    strings: [
                        'I enjoy exploring new web development frameworks and technologies.',
                        'Playing chess sharpens my problem-solving skills.',
                        'I love traveling to discover new cultures and ideas.',
                        'Coding personal projects fuels my creativity and passion.',
                        'Reading tech blogs keeps me updated with the latest trends.'
                      ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                }}
              />
            </div>
        </div>
        
  )
}

export default Hobbies