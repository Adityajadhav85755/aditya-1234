         ### AC maintainence
         
          <div className=" pt-2 mb-2 bg-white pb-4.2 shadow-lg w-full md:max-w-[800px]  rounded-xl" id='acmaintenance' ref={sectionRefs[0]}>
            <h1 className="text-2xl mt-0 py-2 font-bold text-center sm:text-left md:px-2">AC Maintenance Service</h1>
            <img
              src={ACR}
              alt="ACr"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:rounded-none  md:block hidden"
            />
            <img
              src={ACR}
              alt="ACr"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px]  md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.acService.map((service) => (
                <div key={service.id} className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className='px-4'>

                        <ul className="pl-4 px-5 list-disc opacity-80 text-base md:text-lg mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">
                        <span className="self-center mr-1 font-light text-12 opacity-60">
                          starts from <del>₹ {service.originalPrice}</del>
                        </span>
                        <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                      </div>
                    </div>
                    <div className='relative'>
                      {/* <p>{selectedServiceAcRepair.img}</p> */}
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px]  md:hidden block"
                      />

                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px]  md:block hidden"
                      />

                      {/* if selected service is */}

                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>

                      <div>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2 ">

                    <ul className="pl-4 list-disc opacity-80 text-base md:text-lg mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}

                    </ul>

                    <div>
                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>
