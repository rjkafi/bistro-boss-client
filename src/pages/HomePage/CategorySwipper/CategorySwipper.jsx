import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import chefimg from '../../../assets/home/chef-service.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CategorySwipper = () => {
    return (
        <section>
            {/* Use SectionTitle with props */}
            <SectionTitle
                heading="ORDER ONLINE"
                subHeading="From 11:00am to 10:00pm"
            />

            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={4}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <div className="relative inline-block">
                        <img src={slide1} alt="Salad" />
                        <h3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl uppercase text-white bg-black/50">
                            Salad
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative inline-block">
                        <img src={slide2} alt="Pizza" />
                        <h3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl uppercase text-white bg-black/50">
                            Pizza
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative inline-block">
                        <img src={slide3} alt="Soups" />
                        <h3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl uppercase text-white bg-black/50">
                            Soups
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative inline-block">
                        <img src={slide4} alt="Dessert" />
                        <h3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl uppercase text-white bg-black/50">
                            Dessert
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative inline-block">
                        <img src={slide5} alt="Salad" />
                        <h3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl uppercase text-white bg-black/50">
                            Salad
                        </h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <section className="relative bg-cover bg-center h-[520px] my-20" style={{ backgroundImage: `url(${chefimg})` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg text-center max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Bistro Boss</h2>
                        <p className="text-gray-600 text-sm md:text-base">

                            "Experience the perfect blend of flavor and ambiance with our chef-inspired dishes, crafted using the finest ingredients to deliver a dining experience that both memorable and extraordinary."
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CategorySwipper;
