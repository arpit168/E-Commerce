import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Forever Cloth stands for timeless fashion, premium fabrics, and
            effortless confidence. Our designs blend modern trends with lasting
            comfort, creating clothing that feels good, looks elegant, and stays
            relevant season after season. Dress once, impress forever with
            Forever Cloth.
          </p>
          <p>
            Forever Cloth brings you versatile fashion crafted with care,
            quality, and style. Designed for everyday elegance, our apparel
            combines comfort with durability, helping you express confidence and
            individuality while staying effortlessly fashionable for every
            occasion, today and always.
          </p>
          <b className="text-gray-800">our Mission</b>
          <p>
            The mission of Forever Cloth Marketing is to deliver high-quality,
            stylish, and sustainable fashion that inspires confidence. We aim to
            create timeless apparel that blends comfort with innovation, builds
            lasting customer trust, and promotes responsible fashion while
            meeting the evolving needs of modern lifestyles.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 ">
            “From fabric selection to final stitching, Forever Cloth follows
            rigorous quality assurance processes to deliver clothing you can
            trust ever .”
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 ">
            “Serve with honesty, care, and consistency.” “Every interaction is
            an opportunity to impress. It gives you happiness everyday.”
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Costumer Service:</b>
          <p className="text-gray-600 ">
            "Customize it for Forever Cloth Make it more luxury, friendly, or
            professional. always wear casual, formal, always look attractive."
          </p>
        </div>
      </div>
    <NewsLetterBox/>
    </div>
  );
};

export default About;
