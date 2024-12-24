import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

const services = [
  {
    id: 'rental-ac',
<<<<<<< HEAD
    title: 'ental Air Conditioner (AC)',
=======
    title: 'Rental Air Conditioner (AC)',
>>>>>>> d5cb291 (Your commit message here)
    description: 'RENT AC Efficient vehicle transportation services. Click below to learn more.',
    descriptionpoint:'This is the description for Rent AC Based on pointwise',
    details: 'This is Detail Description for RENT AC Detailed information about vehicle shifting services. Fusce quis augue ac lorem scelerisque egestas at vel metus. Suspendisse potenti. Fusce ac tortor enim. Suspendisse sed feugiat purus, sed viverra ipsum.',
  },
  // {
  //   id: 'rental-ac',
  //   title: 'Rental Air Conditioner (AC)',
  //   description: 'Efficient vehicle transportation services. Click below to learn more.',
  //   details:
  //     'vehicle shifting services. ',
  // },
  {
    id: 'asc',
    title: 'AC on ASC ( Annual Service Contract )',
    description: 'ASC AC Efficient vehice.',
    descriptionpoint:'This is the description for point',
    details:
      'ASC AC Detailed information about vehicle shifting services. Fusce quis augue ac lorem scelerisque egestas at vel metus. Suspendisse potenti. Fusce ac tortor enim. Suspendisse sed feugiat purus, sed viverra ipsum.',
  },

    {
      id: 'house-shifting',
      title: 'House Shifting',
      description: 'HoUSE  SHIFT We offer customized services to fit your specific requirements... Click below to learn more.',
      descriptionpoint:'This is the description for point',
      details:
        'HoUSE  SHIFT Detailed information about house shifting services.Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum. Detailed information about house shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nulla id mauris tempus varius. Nulla facilisi. Proin non mi turpis. Pellentesque dictum risus vel felis ultricies fringilla. Curabitur gravida dapibus justo, ac convallis enim ullamcorper sit amet. Maecenas id magna felis. Praesent efficitur erat eu lacinia scelerisque. Donec dapibus nunc sed nunc vestibulum, in tincidunt purus scelerisque. Sed sit amet eros sit amet urna mollis dictum.',
    },
    {
      id: 'office-shifting',
      title: 'Office Shifting',
      description: 'OFFICE Shift Expert office shifting services tailored to your needs... Click below to learn more.',
      descriptionpoint:'This is the description for point',
      details:
        'OFFICE Shift Detailed information about office shifting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus in turpis mollis, quis gravida ipsum ullamcorper. In ac vehicula arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 'shop-shifting',
      title: 'Shop Shifting',
      description: 'Safe and secure shop shifting services. Click below to learn more.',
      descriptionpoint:'This is the description for point',
      details:
        'Detailed information about shop shifting services. Duis feugiat turpis vitae velit vehicula, at varius ligula laoreet. Aenean feugiat vehicula lectus, vitae malesuada turpis malesuada a. Integer id dictum metus, non convallis justo. Vivamus vestibulum justo lorem, at congue sapien tempor a.',
    },
    {
      id: 'vehicle-shifting',
      title: 'Vehicle Shifting',
      description: 'Efficient vehicle transportation services. Click below to learn more.',
      descriptionpoint:'This is the description for point',
      details:
        'Detailed information about vehicle shifting services. Fusce quis augue ac lorem scelerisque egestas at vel metus. Suspendisse potenti. Fusce ac tortor enim. Suspendisse sed feugiat purus, sed viverra ipsum.',
    },
    {
      id: 'warehouse',
      title: 'Warehouse Service ',
<<<<<<< HEAD
      description:'Warehousing services provide secure storage for your goods, keeping them safe and accessible.',
      descriptionpoint:'Store your goods with confidence—safe, secure, and ready when you need them.',
=======
      description: 'Warehousing Services required to store your goods, To learn more ',
      descriptionpoint:'This is the description for point',
>>>>>>> d5cb291 (Your commit message here)
      details:
        '      we at Sky Need Solution provide a safe place to store all types of goods. Whether you need to store things for a short time or a long time, our warehouse is the perfect place. Our storage space is clean, safe, and easy to access whenever you need it. We take care of your items by keeping them organized and labeled. This makes it easy to find them when you need them. Our warehouse has the latest security systems to protect your goods, and we also have fire protection to keep everything safe. Plus, your items are fully insured while in storage. We also take care of the loading and unloading of your items. Our team makes sure everything is carefully moved in and out of the warehouse. We keep track of your goods with a computerized inventory system, so you never have to worry about losing anything. Our storage services are affordable, so you can store your items without breaking the bank. We offer both short-term and long-term storage solutions, depending on what you need. At our warehouse, you can be sure your goods will be kept safe and well-organized. Trust us to provide a stress-free storage experience. Whether for your home, business, or special items, we’re here to help you store things with ease. Your goods are always safe with us!',
    },
    {
      id: 'AC service and repair',
      title: 'AC Service-Repair',
      description: 'Efficient vehicle transportation services.To learn more.',
      descriptionpoint:'This is the description for point',
      details:
        'Detailed information about vehicle shifting services. Fusce quis augue ac lorem scelerisque egestas at vel metus. Suspendisse potenti. Fusce ac tortor enim. Suspendisse sed feugiat purus, sed viverra ipsum.',
    },
  // Add more services here...
];

export default function AboutServiceDetails() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate(); // React Router hook for navigation

  const handleLearnMore = (id) => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  const handleOpenNewPage = () => {
    navigate('/data', { state: { service: selectedService } }); // Navigate with state
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="services-container ml-10 mr-10 p-3">
      <h2 className="text-center font-bold text-2xl p-4">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="p-3 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p>{service.description}</p>
            <button
              onClick={() => handleLearnMore(service.id)}
              className="text-blue-500 underline"
            >
              Click me.
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] h-[500px] relative">
            <button
              onClick={closeModal}
              className="text-red-600 font-bold text-xl absolute top-2 right-4"
            >
              &times;
            </button>
            <h2 className="font-bold text-2xl mb-4">{selectedService.title}</h2>
            <p className="mb-4">{selectedService.descriptionpoint}</p>
            <button
              onClick={handleOpenNewPage}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Go to Full Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
