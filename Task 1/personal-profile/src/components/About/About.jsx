import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className='bg-custom-light-beige px-4 py-8 flex flex-col lg:flex-row items-center lg:items-start'>
      {/* Profile Image */}
      <div className='flex-shrink-0'>
        <img src='About.png' alt='profileimg' className='w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full' />
      </div>

      {/* About Text */}
      <div className='mt-6 lg:mt-0 lg:ml-8 font-mono text-center lg:text-left'>
        <p className='font-extrabold text-2xl md:text-3xl'>About Me</p>

        {/* Typewriter effect */}
        <div className='py-4'>
          <Typewriter
            options={{
              strings: ['My name is Luqman Jafir', 'A Web Developer'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>

        {/* About Description */}
        <p className='text-sm md:text-base leading-relaxed'>
          I'm a recent Computer Science graduate with a BSc from FAST-NUCES Peshawar.<br />
          With proficiency in the MERN stack and a knack for web development,<br />
          I've worked on exciting projects including a SvelteKit-based CMS and a React app with VANTA.js effects.<br />
          My professional journey includes an internship at Pinnacle and experience in full-stack development.<br />
          Outside of tech, I'm launching YouTube channels focused on movies and comedy,<br />
          and exploring new avenues like Gig Falcon for freelance development.<br />
          My goal is to make a mark in the tech world and continuously improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
