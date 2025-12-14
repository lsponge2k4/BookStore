import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
    { image: "/hero.png" },
    { image: "/hero8.jpg" },
    { image: "/hero9.png" },
];

export default function BannerCarousel() {
    return (
        <div className="relative w-full h-[480px] md:h-[700px] overflow-hidden select-none">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                navigation={{
                    prevEl: ".banner-prev",
                    nextEl: ".banner-next",
                }}
                loop
                className="h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={banner.image}
                            alt={`banner-${index}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Prev Button */}
            <button
                className="banner-prev absolute top-1/2 -translate-y-1/2 left-4 md:left-8
    text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
    bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full
    cursor-pointer transition-all duration-300
    text-3xl md:text-4xl font-bold z-40"
            >
                ‹
            </button>

            <button
                className="banner-next absolute top-1/2 -translate-y-1/2 right-4 md:right-8
    text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
    bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full
    cursor-pointer transition-all duration-300
    text-3xl md:text-4xl font-bold z-40"
            >
                ›
            </button>
        </div>
    );
}
