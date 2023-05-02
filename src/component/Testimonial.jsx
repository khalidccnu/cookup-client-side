import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import imgUserMale from "../asset/user-male.svg";
import imgUserFemale from "../asset/user-female.svg";

const Testimonial = () => {
  return (
    <section className="py-10 text-center">
      <div className="container">
        <h2 className="font-semibold text-2xl mb-10">Testimonial</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-base-200/70 text-neutral-900 max-w-xl mx-auto rounded-lg">
              <figure className="px-4 py-8 lg:px-6 lg:py-16">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium">
                    "I am really proud to support a platform for so many
                    talented home-cooks. I think of them as micro-entrepreneurs
                    in our economy and CookUp is doing a great job of uplifting
                    them."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={imgUserFemale}
                    alt=""
                  />
                  <div className="flex items-center divide-x-2 divide-gray-700">
                    <h4 className="pr-3 font-medium">Nerissa Nashin</h4>
                    <h6 className="pl-3 text-sm text-gray-600">Student</h6>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-base-200/70 text-neutral-900 max-w-xl mx-auto rounded-lg">
              <figure className="px-4 py-8 lg:px-6 lg:py-16">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium">
                    "As a foodie, I really appreciate authenticity in my
                    platter. So far CookUp has always delivered upto my
                    expectation on that particular note. And having it homemade
                    also adds a cherry on top."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={imgUserMale}
                    alt=""
                  />
                  <div className="flex items-center divide-x-2 divide-gray-700">
                    <h4 className="pr-3 font-medium">Emrul Kayes Raceme</h4>
                    <h6 className="pl-3 text-sm text-gray-600">Engineer</h6>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-base-200/70 text-neutral-900 max-w-xl mx-auto rounded-lg">
              <figure className="px-4 py-8 lg:px-6 lg:py-16">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium">
                    "As a diner, CookUp is the go-to platform for every week
                    staples. This platform made it a reality to know and taste
                    speciality foods from the best cooks in Dhaka."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={imgUserFemale}
                    alt=""
                  />
                  <div className="flex items-center divide-x-2 divide-gray-700">
                    <h4 className="pr-3 font-medium">Bidowra Tahmin Khan</h4>
                    <h6 className="pl-3 text-sm text-gray-600">Doctor</h6>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
