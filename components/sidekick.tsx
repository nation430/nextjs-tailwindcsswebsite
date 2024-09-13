import React from "react";

const Sidekick = () => {
    return (
        <main className="mx-auto  relative bg-white ">
        <div className="container mx-auto bg-gray-100 h-full w-full rounded-lg">
              <div className=" py-20">
                <div className="w-full px-32 mx-auto">
                  <h2 className="mb-16 text-5xl font-semibold text-gray-900 text-center"> Your Personal Finance Sidekick</h2>
      <div className="grid lg:grid-cols-2 gap-3">

      <div className="relative w-full  sm:h-96 lg:h-full bg-white rounded-lg p-6" >
      <h3 className="my-2 text-3xl font-semibold text-gray-800 mt-2">Your Personal Finance Sidekick</h3>
      <p className="mb-8 mt-8 text-lg text-gray-600">A streamlined view of all your financial activities, enabling insights and actions at a glance.</p>
      <div className="relative rounded-xl bg-gray-200 mt-4 max-h-full min-h-fit h-3/5 ">
                          <div className="p-6 flex">
                            <h5 className=" text-xl font-normal text-blue-gray-900 capitalize">
                              food & dring
                              </h5>
                           
                          </div>
                          <div className="relative flex flex-col mt-10 rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100 mx-8">
                          <div className="relative rounded-xl text-gray-700 p-6">
                          <div className="flex flex-wrap border-b-2 border-dashed border-gray-300 pb-4">
          <img src='https://readymadeui.com/profile_2.webp' className="w-10 h-10 rounded-full" />
          <div className="ml-4 text-left">
            <p className="font-semibold mt-2">**** **** 9378S</p>
          </div>

         
        </div>
        <div className="mt-4">
        <p>11:30am</p>
        <h3 className="font-sans text-3xl font-semibold text-blue-800">$9.99<span className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
                          </div>
                          </div>
                        </div>
        </div>

	  </div>
	  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 ">
		<div className="relative w-full bg-white rounded-lg p-6">
    <h3 className="my-2  text-3xl font-semibold text-gray-800">Interest Foresting</h3>
    <p className="mb-2 text-sm text-gray-600">Insights into your potential interest earnings, helping you envision the growth of your investments over time.</p>
{/* <!-- card --> */}
   
    <div className="relative rounded-xl bg-gray-100  py-6 mt-6 ">
                          <div className="px-6 flex -mt-4">
                            <h3 className=" text-sm font-bold text-blue-gray-900   capitalize">
                              saving goals
                              </h3>
                          </div>
                          <div className="px-6 pt-2">
                            <p className="text-sm py-2">Summer Holiday</p>
                            <div className="w-full h-2 bg-emerald-200 rounded-full">
                <div className="w-2/4 h-full text-center text-xs text-white bg-teal-700 rounded-full">
                </div>
            </div>
            <div className="flex justify-between text-xs py-2">
            <p>56% Complete</p>
            <p className="font-bold text-blue-gray-900 ">$4,600</p>
            </div>
                           </div>

        </div>
		</div>
		<div className="relative w-full  bg-white rounded-lg p-6 ">
    <h3 className="my-2  text-2xl font-semibold text-gray-800">Savings At-A-Glance</h3>
    <p className="mb-2 text-sm text-gray-600">Instantly view all your savings goal and track progress, ensuring you're always
    aligned with your future financial aspirations.</p>

    {/* <!-- card --> */}
   
    <div className="relative rounded-xl bg-gray-100  py-6 mt-6 ">
                          <div className="px-6 flex -mt-4">
                            <h3 className=" text-sm font-bold text-blue-gray-900   capitalize">
                              saving goals
                              </h3>
                          </div>
                          <div className="px-6 pt-2">
                            <p className="text-sm py-2">Summer Holiday</p>
                            <div className="w-full h-2 bg-emerald-200 rounded-full">
                <div className="w-2/4 h-full text-center text-xs text-white bg-teal-700 rounded-full">
                </div>
            </div>
            <div className="flex justify-between text-xs py-2">
            <p>56% Complete</p>
            <p className="font-bold text-blue-gray-900 ">$4,600</p>
            </div>
                           </div>

        </div>

		</div>
	  </div>
	 
	</div>
                </div>
              </div>
            </div>

  
      </main>
       
    )
}

export default Sidekick