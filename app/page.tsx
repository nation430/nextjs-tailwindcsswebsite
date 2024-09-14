import Image from "next/image";
import Picture from "../components/picture"
import Istcard from "../components/istcard"
import Sidekick from "@/components/sidekick";
import Testimonials from "@/components/testimonials";
import Moreproduct from "@/components/moreproduct";
// import Sidekickcards from "@/components/sidekickcards";

export default function Home() {
  return (
    <main className="mx-auto px-2 sm:px-6 lg:px-8 relative bg-white ">
      <div className="relative m-0 p-0 font-normal px-32 py-16">
        <div className="container flex flex-col px-16 py-4">
          <div className="font-sans text-2xl">
            <h1>Financial Website Design</h1>
          </div>
          <div className="relative">

            {/* sticky navbar */}
            <div className="sticky top-0 z-40 bg-white">
              <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
                <div className="relative flex items-center justify-between max-w-sm ">
                  <div className="flex items-center gap-6">
                    <img className="w-10 h-10 rounded-full inline" src="https://cdn.dribbble.com/users/5542659/avatars/small/2c81a07cd0f41a29ee78ce4cc92af71f.png?1685293200" alt="" />
                    <div className=" dark:text-black">
                      <span className="font-medium ">Oyasim Ahmed</span>
                      <div className="text-xs text-green-400 dark:text-green-400">
                        <span className="left-12 bottom-1 absolute  w-2.5 h-2.5 bg-green-400 
                         border-1 border-white dark:border-gray-800 rounded-full"></span>
                        <span>Available for work</span>
                        <span className="text-black pl-2">Follow </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-between ">
                <nav className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row ">
                <a className="rounded-full border border-gray-500 h-10 w-10 flex item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="mt-3 ml-2.5 ">
                 <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
                <a className="rounded-full border border-gray-500 px-2.5 h-10 w-10 flex item-center">
                <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon ">
                        <path d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </a>
                </nav>

                <div className="relative ml-3">
                  <form className="max-w-md mx-auto">
                    <button type="submit" className="w-full px-5 py-3 text-base rounded-full font-medium text-center 
      text-white bg-black sm:w-auto dark:bg-black dark:hover:bg-gray-900">Get in touch</button>
                  </form>
                </div>
              </div>
              </div>
            </div>

            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
              <div className="">
                <img
                  src="images/first.png"
                  className="h-auto max-w-full"
                  alt="..." />
              </div>
            </div>

            {/* about page */}
            <div className="container mx-auto flex flex-wrap py-16 flex-col md:flex-row items-center">
              <section className="text-gray-900 body-font">
                <div className="container px-5 py-23 mx-auto ">
                  <div className=" w-full px-28 mx-auto">
                    <h1 className=" font-bold pb-8 text-2xl">About Project</h1>
                    <p className="leading-relaxed text-xl">
                      Welcome to Trusti, your all-in-one financial assistant! We offer real-time insights,
                      seamless budgeting, and expert investment advice to help you manage your finances effortlessly.
                      With features like Smart Insights, Budget Buddy, and Growth Forecaster, you’ll receive personalized
                      recommendations tailored to your financial goals. Stay secure with our Security Shield and expand your
                      knowledge with our Learning Hub. Monitor your transactions easily and keep track of your savings progress
                      with our intuitive tools. Join Trusti today and start your journey to financial clarity and growth!
                    </p>
                  </div>
                </div>
              </section>

            </div>

            
             <Picture />

            {/*1st cards */}
            
              <Istcard />
            {/* another card */}

            <div className="container mx-auto flex flex-wrap py-16 flex-col md:flex-row items-center">
              <section className="text-gray-900 body-font">
                <div className="container py-23 mx-auto cursor-pointer ">
                  <div className=" w-full px-32 mx-auto pb-10 rounded-xl bg-gradient-to-r from-transparent via-transparent to-red-300/10">
                   <div className="text-gray-600 body-font bg-gray-100 border-2  rounded-3xl pb-10">
                   <div className="container mx-auto flex  md:flex-row flex-col mb-20 ">
                <div className='flex flex-col justify-center items-center'>
             	<div className='stack h-40 w-80 relative '>
		         <div className='absolute cursor-pointer left-16 top-8 w-full h-full z-20 '>
		      <div className="relative isolate  flex flex-col justify-end overflow-hidden rounded-xl pt-44  mx-auto">
                <img src="images/manlaptopcoffee.jpg" alt=""className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-2">
  
          <ul className="grid mt-3">
            <li className="bg-white backdrop-filter backdrop-blur-xl bg-opacity-80 transform rounded-lg  ">
           <div className="flex w-full items-center justify-between space-x-4 p-2">
           <img className="h-8 w-8 rounded-full bg-gray-300" src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg" alt=""/>
             <div className="flex-1">
            <div className="flex items-center">
           <h3 className="text-sm font-medium text-gray-900">Drinks at Yonder</h3>
                 </div>
        <p className="mt-1 text-xs text-gray-500">$30.50</p>
      </div>
      <span className=" text-xs font-medium text-gray-900 ">11:30am</span>
    </div>
    <div>
    </div>
    
  </li>
          </ul>
    </div>
    </div>
		</div>
		<div className='absolute  w-full h-full left-24 border-2 rounded-xl mt-20 border-gray-300'>
		</div>
		<div className='absolute w-full h-full left-20 border-2 rounded-xl mt-16 border-gray-300'></div>
	</div>
</div>
    
    <div className="pl-32 pt-20 w-full text-4xl">
      <h1 className="sm:text-5xl font-medium text-gray-900">Bring Clarity to Online Transactions.
      </h1>
    
    </div>

  </div> 
                   <div className="grid grid-cols-3 gap-4 flex-wrap mx-14 space-x-4 ">
                      <div className="relative ">
                      <p className="flex flex-col  mb-2">
                    <span className="rounded-full border border-gray-500 py-2 px-1.5 h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                        </svg>
                            </span>
                             </p>
                        <p className=" text-sm font-medium text-gray-800">
                          Insights into your potiential interest earnings, helping you envision the growth of your investment over time.
                        </p>
                      </div>

                      <div className="relative h-full bg-gray-100">
                      <p className="flex flex-col mb-2">
                    <span className="rounded-full border border-gray-500 py-2 px-1.5 h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                        </svg>
                           </span>
                             </p>
                        <p className="text-sm font-medium text-gray-800">
                          A streamlined view of all your financial activities, enabling effortless insights and actions at a glance.
                          </p>
                      </div>

                      <div className="relative h-full bg-gray-100">
                      <p className="flex flex-col mb-2">
                    <span className="rounded-full border border-gray-500 py-2 px-1.5 h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                        </svg>
                       </span>
                          </p>
                        <p className="text-sm font-medium text-gray-800">
                         Communicate easily with transaction partners, making money exchanges more personal and transparent.
                          </p>
                      </div>
                     </div>

                          
                    </div>
                  </div>
                </div>
              </section>

            </div>


            {/* sidekick page */}

             < Sidekick />
             {/* < Sidekickcards /> */}

             
              {/* border div */}
            <div className="container mx-auto w-full h-full  rounded-full -mt-8 bg-white">
                <div className=" rounded-full py-6 border-t-2 border-gray-400"></div>
                 </div>


            {/* testimonial cards */}
              
              <Testimonials />
             
             {/* end of testimonials */}



             {/* 30%  page  */}

             <div className="container mt-32">
                <div className="container px-20 mx-auto">
                    <div className="mx-auto max-w-screen-2xl pb-14 md:px-8 bg-gradient-to-l from-transparent from-0% via-yellow-100 to-transparent">

    <div className="bg-gradient-to-r from-yellow-200 from-10% via-green-300 via-60% to-emerald-400 rounded-3xl shadow-lg p-8 flex item-center justify-between">
        <div className="flex pt-2 text-black ">
          <p className="text-7xl font-bold text-black text"> 30</p>
          <p className="text-black pt-2 text-xl font-bold">
            %
            <p className="font-bold">Off</p>
            </p>
            <p className="text-black text-3xl ml-10 font-semibold">
            Get Start
            <p className=""> your saving on trust!</p>
            </p>
          
        </div>
    
        <div className="flex flex-col items-center text-center pt-2 ">
                <span className="p-5 rounded-full bg-teal-600 text-white shadow-lime-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
             </svg>
                    </span>
            </div>
    </div>
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl font-[sans-serif] mt-10">
                <div>
                    <h1 className="text-3xl font-extrabold">Trust!</h1>
                    <p className="text-xs text-gray-600 mt-3">Launch party social proof leverage MVP lean startup creative
                    equity startup direct mailing. Niche market startup paradigm shift learning curve of the skill.</p>
                    <div className="mt-12">
                        <ul className="flex mt-3 space-x-4">
                            <li className="border-2 boder-black h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='black'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li className="border-2 boder-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 
                                  11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 
                                  13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 
                                  21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 
                                  6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="currentColor">
                                    </path>
                                    </svg>
                                </a>
                            </li>
                            <li className="border-2 boder-black h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <svg className="w-4 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 
                                  4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 
                                  3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 
                                  4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557
                                   2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                   </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <div className="ml-auo -mt-10 ">
               <h1 className="text-xl text-black font-semibold">Subscribe Our Latest Newsletters</h1>
         <div className="flex gap-4 bg-gray-200  rounded-full mt-4  focus:outline-none focus:ring focus:ring-gray-100">
    <input className="h-12 min-w-[16rem] bg-gray-200 rounded-full pl-4 text-gray-900 focus:outline-none focus:ring focus:ring-gray-100" type="text" placeholder="Enter your mail" />
    <button className="h-10 min-w-[6rem] rounded-full -ml-2 mt-1 text-xs font-normal bg-teal-600 text-teal-50 shadow-lg  shadow-inner shodow-teal-900 focus:outline-none focus:ring focus:ring-white">Subscribe</button>
  </div>
                </div>
            </div>



            {/* link side */}

<nav className="w-full py-1 border-b border-t border-blue-400 ">
      <div className="w-full flex items-center justify-center mt-0 px-6 py-2">
         
         <div className="md:flex md:items-center md:w-auto w-full ">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-gray-900 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline  font-medium text-sm py-2 px-8 lg:-ml-2" href="#">Platform</a></li>
                  <li><a className="inline-block no-underline  font-medium text-sm py-2 px-8 lg:-ml-2" href="#">Solutions</a></li>
                  <li><a className="inline-block no-underline  font-medium text-sm py-2 px-8 lg:-ml-2" href="#">Features</a></li>
                  <li><a className="inline-block no-underline  font-medium text-sm py-2 px-8 lg:-ml-2" href="#">About Us</a></li>
                  <li><a className="inline-block no-underline  font-medium text-sm py-2 px-8 lg:-ml-2" href="#">Blogs</a></li>
               </ul>
            </nav>
         </div>
         
      </div>
   </nav>
             </div>
                


                </div>

            </div>


            {/* lets talk page */}
            <div className="container mx-auto flex flex-wrap py-16 flex-col md:flex-row items-center">
              <section className="text-gray-900 body-font">
                <div className="container px-20 py-23 mx-auto ">
                  <div className=" w-full mx-auto px-28">
                    <div className="text-xl">
                    <p>Hello Everyone. </p>
                    <p>Presenting our new Landing page design concept for Financia.</p>
                    </div>
                    <div className="mt-10 font-bold text-3xl space-y-4 ">
                    <h1>Let's taik about your project.</h1>
                    <h1>oyasimnaeem@gmail.com</h1>
                    </div>

                    <div className="mt-10 text-xl font-bold">
                    <h3>Follow us to see more exciting shots and insights on:</h3>
		             <div className=" flex flex-col md:flex-row md:space-y-0 space-x-2 text-gray-900 mt-2">
                  <a href="#" className="border-b-2 border-red-400">Behance </a>
                 <a href="#" className="border-b-2 border-red-400 "> Linkedin </a>
                  <a href="#" className="border-b-2 border-red-400 "> Instagram</a>
                <a href="#" className="border-b-2 border-red-400 ">Facebook</a>
                <a href="#" className="border-b-2 border-red-400 "> UI8</a>
	           </div>
                    </div>

                  </div>
                </div>
              </section>

            </div>


           {/* get in touch */}

           <div className="container mx-auto">
              <div className="">
                <h2 className="flex flex-row flex-nowrap items-center mt-24">
              <span className="flex-grow block border-t border-gray-400"></span>
            <span className="flex-none block mx-4 ">
            <img className="w-18 h-18 rounded-full inline" src="https://cdn.dribbble.com/users/5542659/avatars/small/2c81a07cd0f41a29ee78ce4cc92af71f.png?1685293200" alt="" />
           </span>
          <span className="flex-grow block border-t border-gray-400"></span>
          </h2>
              </div>
              <div  className="py-6 text-center space-y-8">
              <span className="serif text-2xl ">Oyasim Ahmed</span>
              <form className="max-w-md mx-auto">
                    <button type="submit" className="w-full px-5 py-3 text-base rounded-full font-medium text-center 
                text-white bg-black sm:w-auto dark:bg-black dark:hover:bg-gray-900">Get in touch</button>
                  </form>
              </div>
            </div>
          </div>
        </div>

          {/* more abt */}
         <Moreproduct />


                {/*like page  */}
            <div className="container mx-auto mt-20">
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a className="px-2 py-2 text-gray-800 rounded-md shadow-xl " href="">L
    </a>
    <a className="px-2 py-2 text-gray-800 rounded-md shadow-xl sm:w-auto"
        href="">F
    </a>

    <p className=" px-4 py-4">Like
    </p>
</div>
         </div>

      </div>

    </main>

  );
}


