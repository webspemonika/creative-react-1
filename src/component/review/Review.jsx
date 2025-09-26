

import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './review.css'; // custom css
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Review = () => {
    const testimonials = [
        {
            id: 1,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-1.png",
            avatar: "/review-avatar-1 (1).png",
        },
        {
            id: 2,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-2.png",
            avatar: "/review-avatar-2.png",
        },
        {
            id: 3,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-3.png",
            avatar: "/review-avatar-3.png",
        },
        {
            id: 4,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-3.png",
            avatar: "/review-avatar-3.png",
        },
        {
            id: 5,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-3.png",
            avatar: "/review-avatar-3.png",
        },
        {
            id: 6,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-3.png",
            avatar: "/review-avatar-3.png",
        },
        {
            id: 7,
            name: "Bang Upin",
            role: "Pedagang Asongan",
            review:
                "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
            rating: 4,
            img: "/review-3.png",
            avatar: "/review-avatar-3.png",
        },
    ]
    return (
        <section className='lg:py-[100px] py-[50px]'>
            <div className='max-w-7xl mx-auto relative'>  {/* ← relative wrapper */}
                {/* Header */}
                <div data-aos ="fade-up"  className="header">
                    <h5 className="text-center text-amber-600 text-lg font-semibold font-['Poppins'] uppercase tracking-[3.15px]">
                        Testimonials
                    </h5>
                    <h2 className="text-center mt-[15px] mb-[40px] text-stone-900 text-5xl font-bold font-['Poppins'] capitalize">
                        Our Client Reviews
                    </h2>
                </div>

                {/* Swiper Slider */}
                <div data-aos ="fade-up"  className="relative ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        // margin-right 
                        loop={true}
                        speed={2000}
                        modules={[Pagination, Navigation, Autoplay]}
                        pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}

                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div

                                    className='!h-[476px] bg-no-repeat bg-cover bg-center w-[370px] relative rounded-2xl'
                                    style={{ backgroundImage: `url(${item.img})` }}
                                >
                                    <div className="w-[85%] h-[45%] bg-white rounded-2xl absolute bottom-[10%] left-1/2 -translate-x-1/2 px-[38px] pt-[38px]">
                                        <div>
                                            <img
                                                src={item.avatar}
                                                alt=""
                                                className='absolute -top-[12%] left-1/2 -translate-x-1/2 border-8 border-white rounded-full'
                                            />
                                        </div>
                                        <h5 className="text-center text-stone-900 text-lg font-semibold font-['Poppins'] capitalize"> {item.name} </h5>
                                        <p className="text-center text-stone-900 text-xs font-medium font-['Poppins'] pt-[2px] pb-[18px]">
                                            {item.role}
                                        </p>
                                        <p className="text-center text-stone-900 text-sm font-normal font-['Poppins']">
                                            {item.review}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* 👉 Left & Right Navigator vertically middle */}
                    <button className="custom-prev absolute top-1/2 -translate-y-1/2 -left-[3%] z-10 
                        bg-amber-500 text-white px-4 py-4 rounded-full hover:bg-amber-600">
                        <FaArrowLeft />
                    </button>

                    <button className="custom-next absolute top-1/2 -translate-y-1/2 right-0 z-10 
                        bg-amber-500 text-white px-4 py-4 rounded-full hover:bg-amber-600">
                        <FaArrowRight />
                    </button>
                </div>

                {/* Pagination নিচে */}
                <div className="custom-pagination mt-[50px] flex justify-center"></div>
            </div>
        </section>
    );
};

export default Review;







