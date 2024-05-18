import React from 'react'
import { MegaMenuDefault } from '../../components/Header'
import Voluntier from '../Voluntier'
import { motion } from "framer-motion";
import { BiSolidDonateHeart } from "react-icons/bi";
import { cn } from "../../utils/cn";
import { TypewriterEffectSmooth } from '../../components/ui/TyperEffect'
import { ImagesSlider } from '../../components/ui/ImageSlider';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';
import { StickyScroll } from '../../components/ui/StickyScroll';
import DonateButton from '../../components/DonateButton';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';
import { MdCelebration } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

// const Layout = ({children}) => {
//   return (
//     <>
//     <MegaMenuDefault />
//     {/* {children} */}
//     </>
//   )
// }

const Home = () => {
  const navigate = useNavigate()
  // const content = [
  //   {
  //     title: "Collaborative Editing",
  //     description:
  //       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //     content: (
  //       <div className="h-full bg-custom-bg w-full flex items-center justify-center text-white">
  //         Collaborative Editing
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Real time changes",
  //     description:
  //       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  //       content: (
  //         <div className="h-full w-full bg-gray-600/70 flex items-center justify-center text-white">
  //           Version control
  //         </div>
  //       ),
  //   },
  //   {
  //     title: "Version control",
  //     description:
  //       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //     content: (
  //       <div className="h-full w-full bg-red-600/70 flex items-center justify-center text-white">
  //         Version control
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Running out of content",
  //     description:
  //       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //     content: (
  //       <div className="h-full w-full bg-orange-600/70 flex items-center justify-center text-white">
  //         Running out of content
  //       </div>
  //     ),
  //   },
  // ];
  const words = [
    {
      text: "Build",
      className: "text-white dark:text-white",
    },
    {
      text: "awesome",
      className: "text-white dark:text-white",
    },
    {
      text: "apps",
      className: "text-white dark:text-white",
    },
    {
      text: "with",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className='w-full  '>
      <div className='w-full  sm:flex    relative min-h-[80vh] sm:h-[80vh] '>
        <div className='sm:w-[50%] w-full h-full'>
          <div className='flex flex-col pl-2 md:pl-12 gap-3 ml-4 justify-center w-[905] h-full'>
            <div className='w-full '>
              <h1 className='text-5xl  font-semibold font-sans '>
                How WE Help People
              </h1>
            </div>
            <div className='w-[61%] my-3'>
              <h1 className='text-sm text-gray-800'>

                Our organization is committed to uplifting both people and animals, recognizing their interconnected well-being. Through our programs, we provide essential resources to communities in need, fostering sustainable development and empowering individuals to thrive. Simultaneously, we advocate for the welfare of animals, ensuring they receive the care and respect they deserve.
              </h1>
            </div>
            <div className='my-3'>
              <button>
                <DonateButton />
              </button>
            </div>
          </div>
        </div>
        <div className='sm:flex-1 block   h-full w-full'>
          <img src={images[0]} className='w-full h-full object-cover' />
        </div>
      </div>
      <div className='w-full px-4 sm:px-12'>
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-4 mx-auto">
            <div class="text-start mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What We Do</h1>
              <p class="text-start leading-relaxed  mx-auto text-gray-500s">we are proud to showcase the diverse range of initiatives that drive our mission forward. From empowering underserved communities with access to education, healthcare, and livelihood opportunities, to championing animal welfare through rescue, rehabilitation, and advocacy efforts, our organization is committed to making a tangible difference in the lives of both people and animals. Through strategic partnerships, innovative projects, and a dedicated team of volunteers and supporters, we work tirelessly to create positive and sustainable change that uplifts individuals, strengthens communities, and fosters compassion towards all living beings.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {
                Array(3).fill().map((i, k) => <div class=" rounded-lg shadow-lg w-full sm:w-[90%] flex flex-col border text-center items-center">
                  <div class="w-full h-44 inline-flex items-center  rounded-lg justify-center  bg-indigo-100 mb-5 flex-shrink-0">
                    <img src={images[k]} className='w-full object-cover rounded-t-lg h-full flex ' />
                  </div>
                  <div class="flex-grow my-4">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>)
              }
            </div>
            
              <div class="flex mt-8 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
             
            </div>
          </div>
        </div>
        {/* <div className='w-[85%]'>
          <h1>
            What We Do
          </h1>
          <p>
            we are proud to showcase the diverse range of initiatives that drive our mission forward. From empowering underserved communities with access to education, healthcare, and livelihood opportunities, to championing animal welfare through rescue, rehabilitation, and advocacy efforts, our organization is committed to making a tangible difference in the lives of both people and animals. Through strategic partnerships, innovative projects, and a dedicated team of volunteers and supporters, we work tirelessly to create positive and sustainable change that uplifts individuals, strengthens communities, and fosters compassion towards all living beings.
          </p>
        </div>
        <div className='w-[85%]'>

        </div> */}
      </div>
      <div className='w-full pt-3 min-h-[80vh] sm:h-[80vh] mt-3 px-12'>
        <div className='w-full  flex h-full'>
          <div className='w-[45%] hidden sm:flex'>
            <img src={images[2]} className='w-full h-[]' />
          </div>
          <div className='sm:flex-1 gap-5 flex flex-col mt-2 ml-4 w-full'>
            <div className='flex pl-4 flex-col borer w-[95%]  '>
              <div className='flex font-bold items-center gap-2'>
                <FaHandsHelping size={24} className="text-green-600" /> <h1 className='text-lg'> Become A Volunteer With Us</h1>
              </div>
              <p className='pl-6 text-[13px]  font-normal'>
                Join our dedicated team and make a meaningful impact in the lives of others, both human and animal alike. Whether you're passionate about community outreach, education, healthcare, or advocating for the welfare of animals, there's a place for you here. As a volunteer, you'll have the opportunity to contribute your unique skills, experiences, and compassion to our mission of creating positive change.
              </p>
            </div>
            <div className='flex pl-4 flex-col borer w-[90%] ml-7 p-3 '>
              <div className='flex font-bold items-center gap-2'>
                <MdCelebration size={24} className="text-green-600" />  <h1 className='text-lg'> Celebrate Their Special Day With Us</h1>
              </div>

              <p className='pl-6 text-[13px]  font-normal'>
                Celebrate their special day with us and make it even more memorable. Whether it's a birthday, anniversary, or any other milestone, our organization offers unique ways to mark the occasion while also giving back to those in need. Instead of traditional gifts, consider donating to our cause or organizing a fundraiser in honor of your loved one.
              </p>
            </div>
            <div className='flex pl-4 flex-col borer w-[85%] ml-14 p-3 '>
            <div className='flex font-bold items-center gap-2'>
            <FaHandHoldingHeart size={24} className="text-green-600" />  <h1 className='text-lg'> Provide Food For Every Need Once</h1>
              </div>
            
              <p className='pl-6 text-[13px]  font-normal'>
                Providing sustenance for every requirement, we ensure no one goes hungry. From daily meals to emergency relief, our organization is dedicated to fulfilling the nutritional needs of individuals and communities, one meal at a time. Join us in our mission to eradicate hunger and nourish every soul.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className='w-full flex mt-0 items-center justify-center h-40'>
          <div className='w-[92%] border rounded-lg shadow-lg sm:flex p-6 gap-3 sm:p-4'>
            <div className='w-[40%]' >
              <p className='text-xs font-semibold'>
                Help change a life
              </p>
              <h1 className='text-xl whitespace-nowrap font-bold'>
                Stay Touch With Us
              </h1>
            </div>
            <div className='flex-1   items-center flex'>
              <div className='border-2 w-full h-12 flex ml-auto rounded-2xl p-1 border-gray-400'>
                  <input type="email" placeholder='Wnter your mail' className='outline-none rounded-xl ml-3 text-xs border-none p-1 w-[70%]' />
                  <button className='ml-auto h- p-1 bg-gray-800 rounded-xl items-center text-sm px-6 border-gray-600 text-gray-200 flex'>
                    Subscribe
                  </button>
              </div>
            </div>
          </div>
      </div>
      <div className=' relative w-full mb-6 h-[98vh]  md::h-[96vh]'>
          <img src='https://ld-wp73.template-help.com/wordpress/prod_30160/v4/wp-content/uploads/2020/11/Rectangle-99-3.png' className='w-full h-full md:h-full '/>
          <div className='w-full p-5 mt-10 h-full  absolute top-0 '>
            <h1 className='md:text-7xl text-4xl sm:w-[80%] font-semibold text-white'>
           
							Delivering help and hope through sponsorship.	
            </h1>
            <h1 className='text-gray-200 sm:text-3xl text-lg mt-3 w-[40%] '>
              
							Basic information needed to make a decision can be learned very quickly on the site or during a conversation.						
            </h1>
            <div className='sm:mt-8 mt-4'>
            <button onClick={() => navigate('/volunteer')} className="text-gray-200 shadow-sm bg-gray-800 hover:bg-gray-950 transition-all duration-150 sm:p-4  p-2 px-5 sm:px-8 rounded-lg">
    Volunteer Now
  </button>
            </div>
          </div>
      </div>
      {/* <div className='flex bg-black/80 items-center p-3 justify-center w-full'>
        <div className='w-[50%] flex text-neutral-200 flex-col justify-center items-center gap-2'>
          <div className=''>
          <BiSolidDonateHeart size={56}  />

          </div>
          <h1>
            Our Recent Causes
          </h1>
          <p>
            Children and poor people are at high risk of severe malnutrition & no education
          </p>
        </div>
      </div> */}
      {/* <div className='w-full grid sm:grid-cols-2 grid-cols-1 bg-custom-bg place-content-start md:grid-cols-3 sm:gap-2 max-h-fit min-h-[80vh]'>
        {
          Array(3).fill().map((item) => <CardContainer className=" bg-black/60 w-[95%] hover:shadow-lg rounded-xl">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-50 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-100 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>)
        }
      </div> */}
      {/* <div className='w-full grid  sm:gap-2  min-h-[40vh]'>
      <StickyScroll content={content} />
      </div> */}
    </section>
  )
}

export default Home
