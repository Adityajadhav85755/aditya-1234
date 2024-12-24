import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Pagination module import
import "swiper/css";
import "swiper/css/autoplay"; // No need for pagination CSS
import Client1 from "../assets/images/Client/Client-1.png";
// import Client2 from "../assets/images/Client/Client-2.png";
// Add other client images as necessary

const ClientsSection = () => {
  return (
    <section id="clients" className="clients section bg-gray-100 py-4">
      <div className="container mx-auto" data-aos="zoom-in">
        <Swiper
          loop={true}
          speed={700}  // Adjusted speed to 600ms
          autoplay={{ delay: 1000 }}  // Autoplay delay set to 5000ms
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          modules={[Autoplay]}  // Only use the Autoplay module now
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client1} className="img-fluid mx-auto" alt="Client 7" />
          </SwiperSlide>
          {/* Add additional SwiperSlide elements as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;
