import React from 'react';
import { useLocation } from 'react-router-dom';
// import AckeywordsLinks from './AckeywordsLinks';
// import AckeywordsLinks from './AckeywordsLinks';

const Gallery = () => {
  const location = useLocation();
  const { service } = location.state || {}; // Access passed state

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Centered content container with white background */}
      <div className=" text-black service-detail-container bg-white p-6 m-auto w-full max-w-5xl font-title">
        <h2 className="p-4 text-center font-bold text-2xl text-primary font-body">
          {/* Display the service title, if available */}
          {service ? service.title : 'Service Details'}

        </h2>

        {/* Display service details */}
        <p className="mb-3 font-body ">{service.details}</p>
        {/* <p className="font-bold mt-4">Cost of Different Types of AC Services in Mumbai</p>
        <p className="font-normal">The table below provides the estimated costs for different AC services in Mumbai.</p> */}
        {/* <div>

services.map((service) => (
          <div key={service.id}>
            {service.tabledesc.map((item, index) => (
              <div key={index} className="p-4 border-b">
                <h3 className="font-bold text-lg">{item.heading}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          ));
        </div> */}

        {/* services.map((service)=>(
            <div key={service.id}>
            {service.tabledesc.map((item, index) => (
              <div key={index} className="p-4 border-b">
                <h3 className="font-bold text-lg">{item.heading}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
         
          ))
         */}

        {service ? (
          <>
            {service.tabledesc.map((item, index) => (
              <div key={index} className="">
                <h3 className="font-bold font-body text-lg ml-1">{item.heading}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
            <div>
              <table className="min-w-full table-auto border-b border-r border-l rounded-xl ">
                <thead className="border-b">
                  <tr className="bg-gray-200 border-b border-gray-300">
                    <th className="px-4 py-2 font-body font-bold border-r border-gray-300">Category of Service</th>
                    <th className="px-4 py-2 font-body font-bold">Cost Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render additional parts if available */}
                  {service.parts.map((item, i) => (
                    <tr key={i} className="border-b border-gray-300">
                      <td className="px-4 py-2 font-body text-center border-r border-gray-300">{item.part}</td>
                      <td className="px-4 py-2 font-body text-center">{item.approximateCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* conditional paragraph for different services*/}
              {/* <p className="italic mt-2">
                 (The costs mentioned are approximate and can vary based on factors like location, service provider, and the type of AC. It is recommended to request quotes from Sky Need Solution for accurate estimates.)
              </p> */}
              {/* Conditional paragraph for different services */}
              {service.tablestatement.map((item, index) => (
                <p key={index} className="italic mt-2 font-body text-gray-600">
                 ({item.statement})
                </p>
              ))}


              {/* Display service types */}
              <h3 className="font-bold font-title text-xl mt-5 mb-1">Types:</h3>
              <ul>
                {service.Type.map((item, index) => (
                  <li key={index} className="mb-4 mt-4 ml-1">
                    {/* Type Title */}
                    <div className="font-title list-disc ml-2 font-semibold text-lg">{item.type1}</div>

                    {/* Type Description */}
                    <ul className="font-body text-black ml-1">
                      {item.description2?.map((desc, index) => (
                        <li key={index} className="ml-2 list-disc">
                          {desc}
                        </li>
                      ))}
                    </ul>


                    {/* Conditional Rendering Based on Service Type */}
                    {(() => {
                      switch (service.id) {
                        case 'rental-ac':
                          return (
                            <>
                              <div>
                                <h5 className="font-body font-semibold ml-1 mt-4">Installation:</h5>
                                <p className="font-body text-black ml-5">{item.installation2 || "Not provided"}</p>
                              </div>
                              <div>
                                <h5 className="font-body font-semibold ml-2 mt-2">Uninstallation:</h5>
                                <p className="font-body text-black ml-6">{item.uninstallation2 || "Not provided"}</p>
                              </div>
                            </>
                          );

                        case 'ac-repair':
                          return (
                            <div>
                              <h5 className="font-body font-semibold ml-1 mt-4">Repair Service Details:</h5>
                              <p className="font-body text-black ml-5">{item.repairDetails || "Not provided"}</p>
                            </div>
                          );

                        case 'ac-amc':
                          return (
                            <div>
                              <h5 className="font-body font-semibold ml-1 mt-4">Annual Maintenance Details:</h5>
                              <ul className="font-body text-black ml-5">
                                {item.description2.map((point, index) => (
                                  <li key={index} className="ml-5 list-disc">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );



                        case 'house-shifting':
                          return (
                            <div>
                              {/* <h5 className="font-serif font-semibold ml-2 mt-4">House Shifting Details:</h5>
                            <p className="font-serif text-black ml-5">{item.houseShiftingDetails || "Not provided"}</p> */}

                            </div>
                          );

                        case 'office-shifting':
                          return (
                            <div>
                              {/* <h5 className="font-serif font-semibold ml-2 mt-4">Office Shifting Details:</h5>
                            <p className="font-serif text-black ml-5">{item.officeShiftingDetails || "Not provided"}</p> */}
                            </div>
                          );

                        case 'shop-shifting':
                          return (
                            <div>
                              {/* <h5 className="font-serif font-semibold ml-2 mt-4">Shop Shifting Details:</h5>
                            <p className="font-serif text-black ml-5">{item.shopShiftingDetails || "Not provided"}</p> */}
                            </div>
                          );

                        case 'vehicle-shifting':
                          return (
                            <div>
                              {/* <h5 className="font-serif font-semibold ml-2 mt-4">Vehicle Shifting Details:</h5>
                            <p className="font-serif text-black ml-5">{item.vehicleShiftingDetails || "Not provided"}</p> */}
                            </div>
                          );

                        case 'warehouse-shifting':
                          return (
                            <div>
                              <h5 className="font-body font-semibold ml-1 mt-4">Warehouse Shifting Details:</h5>
                              <p className="font-body text-black ml-5">{item.warehouseShiftingDetails || "Not provided"}</p>
                            </div>
                          );

                        default:
                          return null; // Fallback for unrecognized service types
                      }
                    })()}
                  </li>
                ))}
              </ul>



              {/* Display brands for AC services */}
              {(service.type === 'rental ac' || service.type === 'ac on asc' || service.type === 'AC Service-Repair') && (
                <div>
                  <h3 className=" font-title font-bold text-xl mb-2 mt-5">Available Brands:</h3>
                  <ul className=" font-body list-disc pl-2 pl-8 grid grid-cols-4">
                    {service.brands && service.brands.length > 0 && (
                      service.brands.map((brand, index) => (
                        <li key={index} className="text-black">{brand}</li>
                      ))
                    )}
                  </ul>
                </div>
              )}


              {/* Display duration options */}
              <h1 className=" font-title font-bold text-xl mt-5">Duration:</h1>
              <ul className=" font-body ml-8 list-disc grid-cols-1">
                {service.id === 'rental-ac' && service.duration.map((item, index) => (
                  <li key={index}>{item.duration} - ₹{item.price}</li>
                ))}

                {service.id === 'ac-repair' && service.duration.map((item, index) => (
                  <li key={index}>{item.duration} - ₹{item.price}</li>
                ))}

                {/* 
              {service.id === 'house-shifting' && service.duration.map((item, index) => (
                <li key={index}>{item.duration} - ₹{item.price}</li>
              ))} */}

                {/* {service.id === 'office-shifting' && service.duration.map((item, index) => (
                <li key={index}>{item.duration} - ₹{item.price}</li>
              ))} */}

                {/* {service.id === 'shop-shifting' && service.duration.map((item, index) => (
                <li key={index}>{item.duration} - ₹{item.price}</li>
              ))} */}

                {/* {service.id === 'vehicle-shifting' && service.duration.map((item, index) => (
                <li key={index}>{item.duration} - ₹{item.price}</li>
              ))}

              {service.id === 'warehouse-shifting' && service.duration.map((item, index) => (
                <li key={index}>{item.duration} - ₹{item.price}</li>
              ))} */}
                {service.id === 'asc' && service.duration.map((item, index) => (
                  <li key={index}>{item.duration} - ₹{item.price}</li>
                ))}
              </ul>


              {/* Display included services */}
              <h3 className="font-bold font-title text-xl mt-6 mb-3">Services Included:</h3>
              <ul className="list-disc font-body ml-8">
                {service.serviceinclude && service.serviceinclude.length > 0 && (
                  <>
                    {/* Rental AC Service */}
                    {service.id === 'rental-ac' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* ASC (Annual Service Contract) */}
                    {service.id === 'asc' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* AC Repair */}
                    {service.id === 'ac-service-and-repair' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* House Shifting */}
                    {service.id === 'house-shifting' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* Office Shifting */}
                    {service.id === 'office-shifting' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* Shop Shifting */}
                    {service.id === 'shop-shifting' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* Vehicle Shifting */}
                    {service.id === 'vehicle-shifting' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                    {/* Warehouse Shifting */}
                    {service.id === 'warehouse' && service.serviceinclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </>
                )}
              </ul>


              {/* Display services not included */}
              <h3 className="font-bold font-title text-xl mt-6 mb-3">Services Not Included:</h3>
              <ul className="list-disc font-body ml-8">
                {service.id === 'rental-ac' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'asc' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'ac-service-and-repair' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'house-shifting' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'office-shifting' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'shop-shifting' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'vehicle-shifting' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                {service.id === 'warehouse' && service.servicenotinclude.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Display services offered
            <h3 className="font-bold text-xl">Services:</h3>
            <ul>
              {service.service.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}

              {/* Display repair options
            <h3 className="font-bold text-xl">Repair:</h3>
            <ul>
              {service.repair.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}

              {/* Display AC Condition for Rental AC */}
              {service.id === 'rental-ac' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-2">AC Condition for Rental AC:</h3>
                  <ul className="list-disc font-body ml-8 mt-2">
                    <li>Regular checks for split and window ACs.</li>
                    <li>We clean and fix your AC on time.</li>
                    {/* Add other conditions specific to rental AC */}
                  </ul>
                </>
              )}

              {/* Display AC Condition for AMC (Annual Maintenance Contract) */}
              {service.id === 'ac-amc' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-2">AC Condition for AMC:</h3>
                  <ul className="list-disc font-body ml-8 mt-2">
                    <li>Regular servicing for split and window ACs to ensure optimal performance.</li>
                    <li>Priority service and discounted rates for maintenance.</li>
                    {/* Add other conditions specific to AMC */}
                  </ul>
                </>
              )}

              {/* Display AC Condition for AC Repair */}
              {service.id === 'ac-repair' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-2">AC Condition for AC Repair:</h3>
                  <ul className="list-disc font-body ml-8 mt-2">
                    <li>Diagnosis and repair of all issues for split and window ACs.</li>
                    <li>We use high-quality parts to ensure long-lasting repairs.</li>
                    {/* Add other conditions specific to AC repair */}
                  </ul>
                </>
              )}



              {/* Display why 
            this service
            <h3 className="font-bold text-xl">Why Choose Us:</h3>
            <ul>
              {service.whychoose.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong>: {item.description}
                </li>
              ))}
            </ul> */}
              {/* Display Services Offer */}
              {/* <h3 className="font-bold text-xl">Services Offer</h3>
            <div>
              {service.Servicesoffer.map((item, index) => (
                <ul key={index} className="mb-8"> */}
              {/* Check and render title if available */}
              {/* {item.title && <strong className="block text-md">{item.title}</strong>} */}

              {/* Check if description points exist and map over them */}
              {/* {item.descriptionpoint && (
                    <ul className="list-disc ml-6">
                      {item.descriptionpoint.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </ul>
              ))}
            </div> */}


              {/* Display Benefits for Rent AC */}
              {['rental-ac'].includes(service.id) && (
                <>
                  <h3 className="font-bold font-titletext-2xl mt-5">Benefits of AC Rent</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="p-1 space-x-8 ">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-lg">{item.title}</strong>}

                      {/* Render description points if available */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for AC AMC */}
              {service.id === 'asc' && (
                <>
                  <h3 className="font-bold font-title  text-xl mt-6 mb-3 ">Benefits of AC AMC</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="space-x-8 ml-6">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-lg">{item.title}</strong>}

                      {/* Render description points if available */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for AC Repair */}
              {service.id === 'ac-service-and-repair' && (
                <>
                  <h3 className="font-bold font-title  text-xl mt-5">Benefits of AC Repair</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="p-2 space-x-8 mt-1 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-lg">{item.title}</strong>}

                      {/* Render description points if available */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for House Shifting */}
              {service.id === 'house-shifting' && (
                <>
                  <h3 className="font-bold font-title  text-xl mt-5">Benefits of House Shifting</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="mb-8 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Check if description points exist and map over them */}
                      {item.descriptionpoint && (
                        <ul className="list-disc ml-6">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx} className="font-body">{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for Office Shifting */}
              {service.id === 'office-shifting' && (
                <>
                  <h3 className="font-bold font-title  text-xl mt-5">Benefits of Office Shifting</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="mb-8 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Check if description points exist and map over them */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body ml-6">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx} className="font-body">{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for Shop Shifting */}
              {service.id === 'shop-shifting' && (
                <>
                  <h3 className="font-bold font-title  text-xl mt-5">Benefits of Shop Shifting</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="mb-8 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Check if description points exist and map over them */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body ml-6">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for Vehicle Shifting */}
              {service.id === 'vehicle-shifting' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-5">Benefits of Vehicle Shifting</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="mb-8 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Check if description points exist and map over them */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body ml-6">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Benefits for Warehouse Shifting */}
              {service.id === 'warehouse' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-5">Benefits of Warehouse Shifting</h3>
                  {service.Benefits.map((item, index) => (
                    <ul key={index} className="mb-8 ml-5">
                      {/* Check and render title if available */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Check if description points exist and map over them */}
                      {item.descriptionpoint && (
                        <ul className="list-disc font-body ml-6">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  ))}
                </>
              )}



              {/* Display Why Choose for AC Rent */}
              {['rental-ac'].includes(service.id) && (
                <>
                  <h3 className="font-bold font-title text-xl mt-4">Why Choose AC Rent Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-6">
                      {/* Render title */}
                      {item.title && <strong className="block font-title text-md ">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4 mt-3">
                          <strong>{option.title}</strong>
                          <ul className="ml-8 font-body">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul> 
                  ))}
                </>
              )}

              {/* Display Why Choose for AC AMC */}
              {service.id === 'asc' && (
                <>
                  <h3 className="font-bold font-title text-xl mt-6 mb-3">Why Choose AC AMC Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-4 ml-2">
                      {/* Render title */}
                      {item.title && <strong className="block font-title text-md ml-4">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className=" ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8 font-body">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for AC Repair */}
              {service.id === 'ac-service-and-repair' && (
                <>
                  <h3 className="font-bold font-title text-xl">Why Choose AC Repair Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8">
                      {/* Render title */}
                      {item.title && <strong className="block font-title text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4 ">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8 font-body">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for House Shifting */}
              {service.id === 'house-shifting' && (
                <>
                  <h3 className="font-bold  text-xl">Why Choose House Shifting Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8">
                      {/* Render title */}
                      {item.title && <strong className="block text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for Office Shifting */}
              {service.id === 'office-shifting' && (
                <>
                  <h3 className="font-bold text-xl">Why Choose Office Shifting Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8">
                      {/* Render title */}
                      {item.title && <strong className="block text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8"  >
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for Shop Shifting */}
              {service.id === 'shop-shifting' && (
                <>
                  <h3 className="font-bold text-xl">Why Choose Shop Shifting Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8 ">
                      {/* Render title */}
                      {item.title && <strong className="block text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for Vehicle Shifting */}
              {service.id === 'vehicle-shifting' && (
                <>
                  <h3 className="font-bold text-xl">Why Choose Vehicle Shifting Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8">
                      {/* Render title */}
                      {item.title && <strong className="block text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}

              {/* Display Why Choose for Warehouse Shifting */}
              {service.id === 'warehouse' && (
                <>
                  <h3 className="font-bold text-xl">Why Choose Warehouse Shifting Service</h3>
                  {service.whychoose.map((item, index) => (
                    <ul key={index} className="mb-8">
                      {/* Render title */}
                      {item.title && <strong className="block text-md">{item.title}</strong>}

                      {/* Loop through options and render each option */}
                      {item.options && item.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="ml-4">
                          <strong>{option.title}</strong>
                          <ul className="list-disc ml-8">
                            {option.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  ))}
                </>
              )}


              {/* Display FAQs for AC Rent */}
              {['rental-ac'].includes(service.id) && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.question}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.answer}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for AC AMC */}
              {service.id === 'asc' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className="mt-3 ml-6">
                    {service.faq.map((item, index) => (
                      <li className="p-1 list-decimal font-title ml-8" key={index}>
                        <strong>{item.title}</strong>

                        <p className="p-2 ml-1 font-body"><b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for AC Repair */}
              {service.id === 'ac-service-and-repair' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for House Shifting */}
              {/* {service.id === 'house-shifting' && (
              <>
                <h3 className="list-disc font-serif font-bold text-xl">FAQ's</h3>
                <ul className='mt-3'>
                  {service.faq.map((item, index) => (
                    <li className='p-1 list-decimal ml-8' key={index}>
                      <strong>{item.question}</strong><br />
                      <p className='p-2 ml-1'> <b>Ans:</b> {item.answer}</p>
                    </li>
                  ))}
                </ul>
              </>
            )} */}

              {service.id === 'house-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className="mt-3">
                    {service.faq.map((item, index) => (
                      <li className="p-1 list-decimal ml-8 font-title" key={index}>
                        <strong>{item.title}</strong>

                        <p className="p-2 ml-1 font-body"><b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for Office Shifting */}
              {service.id === 'office-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for Shop Shifting */}
              {service.id === 'shop-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display FAQs for Vehicle Shifting */}
              {service.id === 'vehicle-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}


              {/* Display FAQs for Warehouse Shifting */}
              {service.id === 'warehouse' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">FAQ's</h3>
                  <ul className='mt-3'>
                    {service.faq.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <p className='p-2 ml-1 font-body'> <b>Ans:</b> {item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}


              {/* Display Approach for AC Rent */}
              {service.id === 'rental-ac' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display Approach for AC AMC */}
              {service.id === 'asc' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}



              {/* Display Approach for AC Repair */}
              {service.id === 'ac-service-and-repair' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display Approach for House Shifting */}
              {service.id === 'house-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display Approach for Office Shifting */}

              {service.id === 'office-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display Approach for Shop Shifting */}
              {service.id === 'shop-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display Approach for Vehicle Shifting */}
              {service.id === 'vehicle-shifting' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}


              {/* Display Approach for Warehouse Shifting */}
              {service.id === 'warehouse' && (
                <>
                  <h3 className="list-disc font-title font-bold text-xl">Approach</h3>
                  <ul className='mt-4'>
                    {service.Approch.map((item, index) => (
                      <li className='p-1 list-decimal ml-8 font-title' key={index}>
                        <strong>{item.title}</strong><br />
                        <ul className="list-disc ml-4 mt-2 font-body">
                          {item.descriptionpoint.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}


              {/* Display How to Book for AC Repair */}
              {service.id === 'ac-service-and-repair' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl mt-4 mb-2">How to Book Sky Need Solution’s AC Repair Service</h3>
                  <ul className="mt-4 space-y-4">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className=" list-decimal ml-8 mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for AMC */}
              {service.id === 'asc' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl">How to Book Sky Need Solution’s AMC (Annual Maintenance Contract)</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-12">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for AC Rental */}
              {service.id === 'rental-ac' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl ml-3">How to Book Sky Need Solution’s AC Rental Service</h3>
                  <ul className="mt-4 space-y-4">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4 list-decimal ml-10">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for House Shifting */}
              {service.id === 'house-shifting' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl">How to Book Sky Need Solution’s House Shifting Service</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-8">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 list-disc font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for Office Shifting */}
              {service.id === 'office-shifting' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl">How to Book Sky Need Solution’s Office Shifting Service</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-8">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for Shop Shifting */}
              {service.id === 'shop-shifting' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl">How to Book Sky Need Solution’s Shop Shifting Service</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-8">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for Vehicle Shifting */}
              {service.id === 'vehicle-shifting' && service.howtobook && (
                <>
                  <h3 className="font-extrabold text-xl font-title">How to Book Sky Need Solution’s Vehicle Shifting Service</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-8">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body ">{step.description}</p>}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Display How to Book for Warehouse Shifting */}
              {service.id === 'warehouse' && service.howtobook && (
                <>
                  <h3 className="font-bold font-title text-xl">How to Book Sky Need Solution’s Warehouse Shifting Service</h3>
                  <ul className="mt-4 space-y-4 list-decimal ml-8">
                    {service.howtobook.map((step, index) => (
                      <li key={index} className="mb-4">
                        {/* Render title */}
                        {step.title && <strong className="block text-md font-semibold font-title">{step.title}</strong>}

                        {/* Render description */}
                        {step.description && <p className="text-gray-700 font-body">{step.description}</p>}
                      </li>
                    ))}

                  </ul>
                </>
              )}






              {/* Other service details or images could go here */}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 ">No service selected.</p>
        )}

      </div>

    </div>
  );
};


export default Gallery;