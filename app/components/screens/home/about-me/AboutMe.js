import React from 'react';
import Face from '../../../../../public/Images/photo_2023-03-06_00-15-24.jpg'
import {TypeAnimation} from "react-type-animation";
import Image from "next/image";
import {FaGithub, FaTelegram, FaLinkedin} from 'react-icons/fa'

const AboutMe = () => {
    return (
        <section className='flex items-center min-h-[100vh]'>
            <div className='flex flex-col lg:flex-row gap-y-8 gap-x-12 items-center mx-auto'>
                <div className="flex-1 text-center mb-6 lg:text-left pt-10">
                    <h1 className='lg:text-[40px] text-[24px]'>
                        Alex Solohub
                    </h1>
                    <div className="mb-4 text-[32px] lg:text-[60px] uppercase font-semibold">
                        <span>I am a </span>
                        <TypeAnimation sequence={[
                            'Developer',
                            2000,
                            'Student',
                            2000,
                            'Sportsman',
                            2000
                        ]} speed={50} className='text-fuchsia-700' wrapper='span' repeat={Infinity}/>
                    </div>
                    <p className='max-w-[600px] lg: max-w-full'>
                        Web-development is my passion and I am glad to spend my time creating various websites. It is incredible to do something that you are fond of for a living. I hope you are interested to try to work with me, any new experience is a treasure for me.
                    </p>
                    <div className="py-4 text-center lg:py-12">
                        <button type="button"
                                className="lg:text-[25px] text-white bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 lg:py-4 text-center mr-2 mb-2">My Resume
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-8 text-[34px]">
                        <a target='_blank' href="https://github.com/pes-sobachii">
                            <FaGithub/>
                        </a>
                        <a target='_blank' href="https://t.me/wander1ng_jew">
                            <FaTelegram/>
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/alex-solohub-03b779262/">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="rounded-full h-[330px] w-[330px] overflow-hidden">
                        <Image src={Face} alt={'My face'} quality={100}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;