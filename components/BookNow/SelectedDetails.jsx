import React from 'react'

const SelectedDetails = ({currActiveProduct}) => {
    return (
    <div>
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <div
            className="pt-4 flex flex-col md:flex-row w-full mt-6"
            style={{}}
          >
            {currActiveProduct.map((d, index) => (
              <>
              <div className="flex flex-col ">
              <div className=" flex items-center justify-center p-3">
                    <img
                    src={d.image}
                    alt=""
                    className="h-64"
                    />
                </div>
                <div
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos="zoom-in"
                  className="space-y-3 w-full mt-10 xl:px-4 2xl:px-10"
                >
                  <p className="text-[32px] font-primary font-semibold text-gray-900">
                    {d.heading}
                  </p>
                  <p className="text-base max-h-[96px] font-primary text-gray-600 mt-10">
                    {d.description}
                  </p>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
    </div>
    </div>
    )
}

export default SelectedDetails
