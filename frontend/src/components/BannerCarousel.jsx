// src/components/BannerCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const banners = [
    {
        image: '/hero.png',
        title: 'Expand Your Knowledge',
        subtitle: 'Best-selling non-fiction books',
    },
    {
        image: '/hero5.jpg',
        title: 'Discover New Worlds',
        subtitle: 'Fiction, Sci-Fi, Fantasy & more',
    },
    {
        image: '/hero3.png',
        title: 'Learn from the Best',
        subtitle: 'Top authors, timeless wisdom',
    },
];

export default function BannerCarousel() {
    return (
        <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop
                className="h-full"
            >
                {banners.map((banner, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-5xl mx-auto">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-2xl leading-tight animate-fade-in">
                                    {banner.title}
                                </h1>
                                <p className="text-xl md:text-2xl lg:text-3xl mt-4 drop-shadow-lg opacity-90 font-medium">
                                    {banner.subtitle}
                                </p>
                                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105">
                                    Explore Now
                                </button>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* NÚT ĐIỀU HƯỚNG */}
            <div className="swiper-button-prev !text-white !w-16 !h-16 !left-6 md:!left-12 after:!text-4xl !bg-black/40 !rounded-full hover:!bg-indigo-600 transition-all" />
            <div className="swiper-button-next !text-white !w-16 !h-16 !right-6 md:!right-12 after:!text-4xl !bg-black/40 !rounded-full hover:!bg-indigo-600 transition-all" />
        </div>
    );
}