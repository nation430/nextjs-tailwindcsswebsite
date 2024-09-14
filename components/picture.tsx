import React from "react";

const Picture = () => {
    return (
        <main className="mx-auto  relative bg-white ">
        
          <div className="container flex flex-col ">
  
              {/* second picture */}
              <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="">
                  <img
                    src="images/second.png"
                    className="h-auto max-w-full"
                    alt="..." />
                </div>
              </div>
  
              {/* third picture */}
              <div className="container mx-auto mt-16 flex flex-wrap flex-col md:flex-row items-center">
                <div className="">
                  <img
                    src="images/third.png"
                    className="h-auto max-w-full"
                    alt="..." />
                </div>
              </div>
  
  
              {/* second picture */}
              <div className="container mx-auto flex mt-16 flex-wrap flex-col md:flex-row items-center">
                <div className="">
                  <img
                    src="images/second.png"
                    className="h-auto max-w-full"
                    alt="..." />
                </div>
              </div>
  
          </div>
  
      
  
      </main>
       
    )
}

export default Picture