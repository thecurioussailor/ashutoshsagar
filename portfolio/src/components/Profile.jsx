import React from 'react'
import ProfilePic from "../assets/profile-pic.png"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Profile() {
  return (
    <div>
        <section id='profile' className='flex justify-center gap-[5rem] h-[80vh] pt-[4vh] mx-[10rem] box-border min-h-fit'>
            <div className='flex h-[400px] w-[400px] my-auto mx-0'>
                <img src={ProfilePic} alt="Ashutosh Sagar"/>
            </div>
            <div>
                <p>Hello, I'm</p>
                <h1>Ashutosh Sagar</h1>
                <p>Frontend Developer</p>
                <div>
                    <button>
                        Download CV
                    </button>
                    <button>
                        Contact Info
                    </button>
                </div>
                <div>
                    <FaGithub/>
                    <FaTwitter/>
                    <FaLinkedin/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile