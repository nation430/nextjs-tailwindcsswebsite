import React from "react";

const Testimonials = () => {
    return (
        <main className="mx-auto  relative bg-white ">
         <div className="container mx-auto my-6">
              <section className="text-gray-900 body-font">
                <div className="container px-24 mx-auto ">
                    <div className="mx-auto max-w-screen-2xl px- md:px-8">
                   {/* first testimonial */}
                        <div className="grid grid-cols-6 gap-4 flex-wrap md:gap-6">
                      <div className="relative col-span-2 bg-gray-100 rounded-lg">
                      <img className=" w-full h-52 bg-contain rounded-lg object-cover" src="images/man.jpg" alt="Profile Image"/>
  
                      </div>

                      <div className="relative col-span-4 ">
                      <div className="bg-gray-100 p-4 border-2 border-gray-300 rounded-lg ">
          <p className="mb-6 text-base">"The customer service team went above and beyond to assist me with my issue. They were responsive, friendly. The customer service
          team went above and beyond to assist my issue. They were responsive, friendly".</p>
            <span className="flex-grow flex flex-col pl-4">
              <span className="font-bold text-lg text-gray-900">Joe Campbell</span>
              <span className="text-gray-500 text-xs">Boston USA</span>
            </span>

        </div>
                      </div>

                    </div>



                    {/* second testimonial */}

                    <div className="grid grid-cols-6 gap-4 flex-wrap mt-8 md:gap-6">
                    <div className="relative col-span-4 ">
                      <div className="bg-gray-100 p-4 border-2 border-gray-300 rounded-lg ">
          <p className="mb-6 text-base">"The customer service team went above and beyond to assist me with my issue. They were responsive, friendly. The customer service
          team went above and beyond to assist my issue. They were responsive, friendly".</p>
            <span className="flex-grow flex flex-col pl-4">
              <span className="font-bold text-lg text-gray-900">Adam Zampa</span>
              <span className="text-gray-500 text-xs">Founder</span>
            </span>

        </div>
                      </div>
                      <div className="relative col-span-2 bg-gray-100 rounded-lg">
                      <img className=" w-full h-52 bg-cover rounded-lg object-fit" src="images/woman.jpg" alt="Profile Image"/>
  
                      </div>
                    </div>
                    </div>
                </div>
              </section>

            </div>

       
      </main>
       
    )
}

export default Testimonials