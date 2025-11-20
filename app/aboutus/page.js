// app/aboutus/page.js
"use client";
import Counter from "@/components/Counter";
import Loader from "@/components/Loader";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import avatar_img from "@/public/avatar_1.jpg";
import testimonial_thumb from "@/public/testimonial_thumb_1.jpg";
import Subscribe from "@/components/Subscribe";


export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  const testimonial_data = [
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From UK`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From USA`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From Astrolia`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
  ];

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    loaderTimeline
      .fromTo(
        ".loader",
        { scaleY: 0, transformOrigin: "50% 100%" },
        { scaleY: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .to(".loader", {
        scaleY: 0,
        transformOrigin: "0% -100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".wrapper",
        { y: "-100%", ease: "power4.inOut", duration: 1 },
        "-=0.8"
      );

    // Process the animated header text if it exists
    const textWrapper = document.querySelector(".animated-header");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='inline-block opacity-0'>$&</span>"
      );
    }
  }, []);

  return (
    <>
      {loading && <Loader />}  {/* Use the Loader component */}

      <section
        className={`relative h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover text-white flex justify-center items-center`}
      >
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        {/* Content (Ensures text and images are above overlay) */}
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              About Us
            </h2>
            <p className="mt-6 text-[3.5vh] ">
              Karachi Water and Sewerage Corporation (KW&SC) is committed to
              providing reliable water and sewerage services to Karachi.
            </p>
          </div>
        </div>
      </section>
      <Fade direction="up" triggerOnce duration={1000}>
        <section className="bg-black w-full overflow-x-hidden">
          <div className="text-white max-w-[85%] mx-auto py-20">
            <div className="text-center">
              <Fade direction="down" triggerOnce duration={1000}>
                <div className="inline-flex items-center gap-2 px-4 py-1 shadow-ld bg-slate-100 text-black rounded-full text-sm font-medium">
                  <Image
                    src="/icon/magic-black.svg"
                    width={20}
                    height={20}
                    alt="Magic Icon"
                  />
                  About Us
                </div>
              </Fade>
            </div>
            <div className="flex items-center justify-center gap-20 pt-10 mb-20">
              <div className="w-28 h-[2px] bg-blue-700"></div>
              <h1 className="text-5xl font-bold">KW&SC Heritage</h1>
              <div className="w-28 h-[2px] bg-blue-700"></div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <Fade direction="left" triggerOnce duration={1200}>
                  <h2 className="text-5xl font-bold w-11/12">
                    How KW&SC is Setting New Standards in Water & Sewerage Services
                    for Karachi
                  </h2>
                </Fade>
              </div>
              <div className="flex-1 text-gray-400 font-bold text-lg">
                <Fade direction="right" triggerOnce duration={1000}>
                  <p className="mb-2">
                    At KW&SC, we strive to provide clean, safe drinking water and
                    efficient sewerage services to all residents of Karachi. With
                    a commitment to excellence and innovation, our team of experts
                    delivers reliable water and sewerage solutions tailored to
                    meet the unique needs of our city.
                  </p>
                  <p>
                    Our mission is to transform KW&SC into a customer-centric,
                    financially viable and administratively autonomous leading
                    water and sewerage utility in Pakistan. We believe in
                    leveraging technology and sustainable practices to drive
                    success and make a positive impact in the community. We help
                    Karachi achieve its water security and sanitation goals.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 w-full">
        <div className="text-black max-w-[85%] mx-auto py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
              <Image
                src="/icon/user-icon.png"
                width={20}
                height={20}
                alt="Magic Icon"
              />
              Our Core Values
            </div>
          </div>
          <div className="flex items-center justify-center gap-20 pt-10 mb-20">
            <Fade direction="down" triggerOnce duration={1200}>
              <h1 className="text-5xl font-bold text-center">
                Our Core Values That <br /> Empower Success
              </h1>
            </Fade>
          </div>
          <Fade direction="left" triggerOnce duration={1200}>
            <div className="flex gap-10 items-center justify-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-1.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  We don’t make empty promises
                </h2>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-2.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  Unleashing potential driving success
                </h2>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-1.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  Transforming ideas into impact
                </h2>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <Counter />

      <div className="bg-gray-100 w-full py-10">
        <div className="max-w-[85%] mx-auto">
          <div className="text-center flex py-5 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
              <Image
                src="/icon/user-icon.png"
                width={20}
                height={20}
                alt="Magic Icon"
              />
              Why Choose Us
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              Trusted Excellence in Every Solution
            </h1>
            <p className="text-lg text-gray-500 mt-5 mb-12">
              {" "}
              Our commitment to innovation, quality, and customer satisfaction
              sets us apart. With a team of experts dedicated to delivering
              tailored solutions, we ensure seamless execution, cutting-edge
              technology, and unparalleled support.
            </p>
          </div>
          <div className="flex items-center justify-start gap-10">
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-1.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Deliver results</h1>
                <p className="text-lg pr-6">
                  we focus on delivering quick and efficient solutions.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-2.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Innovative Solutions</h1>
                <p className="text-lg pr-6">
                  We embrace innovation to deliver state-of-the-art software
                  solutions.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-3.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Sustainable Growth</h1>
                <p className="text-lg pr-6">
                  Sustainable growth means achieving long-term success.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-4.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Customer Focus</h1>
                <p className="text-lg pr-6">
                  We prioritize your needs and create tailored solutions for
                  success
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
              <Link
                href="/contact"
                className="relative px-3 py-3 text-black text-lg border rounded border-red-200 font-bold 
             hover:-translate-y-1 transition-all duration-300 ease-in-out 
             hover:shadow-[inset_-7.5em_0_0_0_theme(colors.red.700),inset_7.5em_0_0_0_theme(colors.red.700)] 
             focus:shadow-[inset_-7.5em_0_0_0_theme(colors.red.700),inset_7.5em_0_0_0_theme(colors.red.700)] 
             hover:text-white 
             inline-block"
              >
                Book a free consultation
              </Link>
            </Fade>
          </div>
        </div>
      </div>
      <section className="relative bg-black cs_shape_wrap_2 py-20 px-10 overflow-hidden">
        <div className="absolute top-40 -left-80 pointer-events-none">
          <svg
            width="1041"
            height="1005"
            viewBox="0 0 1041 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.5"
              cx="538.5"
              cy="502.5"
              r="501.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.5"
              cx="501.5"
              cy="526.5"
              r="458.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.5"
              cx="453"
              cy="570"
              r="424"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.5"
              cx="396"
              cy="591"
              r="377"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.5"
              cx="330"
              cy="630"
              r="329"
              stroke="#454545"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="h-[150px] lg:h-[60px]"></div>

        <div className="container mx-auto px-6 lg:px-20 relative">
          <div className="flex flex-wrap gap-16 items-center">
            <div className="w-full lg:w-4/12">
              <div>
                <Image
                  src={testimonial_thumb}
                  alt="Testimonial Thumb"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:ml-8">
              <div className="relative">
                <div className="cs_testimonial cs_style_1 cs_color_1 pl-10">
                  <h2 className="cs_testimonial_title text-white font-extrabold text-[55px] mb-[30px] leading-none">
                    Some Of Our Respected Happy Clients Says
                  </h2>
                  <Swiper
                    loop={true}
                    speed={1000}
                    autoplay={true}
                    slidesPerView={1} // Only one slide will be shown at a time
                    modules={[Autoplay]}
                    pagination={{
                      el: ".cs_pagination",
                      clickable: true,
                    }}
                    className="cs_slider cs_slider_4"
                  >
                    {testimonial_data.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="cs_testimonial_box">
                          <div className="cs_testimonial_quote_icon mb-[30px]">
                            <svg
                              width="61"
                              height="44"
                              viewBox="0 0 61 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                                fill="#FF6B00"
                              />
                              <path
                                d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                                fill="#FF6B00"
                              />
                            </svg>
                          </div>
                          <blockquote className="cs_testimonial_text font-extrabold text-[28px] mb-[25px]">
                            {item.des}
                          </blockquote>
                          <div className="cs_testimonial_meta flex items-center">
                            <div className="cs_testimonial_avatar w-[80px] mr-[25px]">
                              <Image
                                src={item.img}
                                alt="Avatar"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="cs_testimonial_meta_right">
                              <h3 className="cs_testimonial_avatar_name text-[22px] mb-[6px] text-white">
                                {item.name}
                              </h3>
                              <div className="cs_testimonial_avatar_designation text-white">
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="cs_pagination cs_style1"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] lg:h-[60px]"></div>
      </section>
      <div className="h-[115px] lg:h-[60px]"></div>
      <Subscribe />
    </>
  );
}
