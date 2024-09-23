import React from 'react';
import { ReactTyped } from "react-typed";
import Portfolio from "../images/PortFolio image.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='bg-[#a4c9e7] h-screen'>
      <div className='pt-24 max-w-[1230px] mx-auto p-[15px] flex items-center gap-5 lg:justify-between  flex-col-reverse lg:flex-row  h-full'>
        <div>
          <h2 className='text-4xl font-medium text-[#0da12d]'>Hello, It's Me</h2>
          <h1 className='text-6xl font-medium text-[#0da12d] py-4'>Md Kamre Alam</h1>
          <h3 className='text-3xl font-medium text-[#0da12d]'>
            And I'm a{' '}
            <ReactTyped className='text-[#e70808]'
              strings={[
                'Frontend Developer',
                'Web Designer',
                'UI/UX Designer',
                'React Developer'
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h3>
          <p className='font-medium text-[rgb(13,161,45)] text-[20px]  py-4'>
          I'm a web Designer with extensive experience <br />
          expertise is to create and website design,<br />
          Frontend design many more....
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0da12d] p-4 rounded-full hover:bg-green-700">
                <FaFacebook className="text-white text-2xl" />
              </button>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0da12d] p-4 rounded-full hover:bg-green-700">
                <FaInstagram className="text-white text-2xl" />
              </button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0da12d] p-4 rounded-full hover:bg-green-700">
                <FaLinkedin className="text-white text-2xl" />
              </button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0da12d] p-4 rounded-full hover:bg-green-700">
                <FaGithub className="text-white text-2xl" />
              </button>
            </a>
          </div>
              {/* More About Me Button with Icon */}
          <div className="mt-8">
            <a href="/about" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-[#0da12d] text-white py-3 px-12 text-xl rounded-lg hover:bg-green-700">
                <FaUser className="mr-2 text-xl" /> More About Me
              </button>
            </a>
          </div>

        </div>
        <div className='h-[400px] w-[350px]  shadow- bg-green-400 rounded-lg mt-10 sm:mt-0'>
          <img src={Portfolio} alt="portfolio-image" className='' />
        </div>
      </div>
    </div>
  );
}

export default Home;
