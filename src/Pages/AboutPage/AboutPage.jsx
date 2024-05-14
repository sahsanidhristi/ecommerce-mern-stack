import React from "react";
import newteam_6 from "../../images/newtem6.jpg"
import "./AboutPage.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LockIcon from "@mui/icons-material/Lock";
import RecyclingIcon from "@mui/icons-material/Recycling";
import TwitterIcon from "@mui/icons-material/Twitter";
import image_6 from "../../images/pic-6.jpeg";
import workimg_7 from "../../images/workimg7.jpeg";
import workcult from "../../images/workplace.jpeg";
import workimg_5 from "../../images/workimg5.jpg";
import workimg_2 from "../../images/workimg2.png";
import workimg from "../../images/workimg.jpg";
import workimg_3 from "../../images/workimg3.jpg";
import image_2 from "../../images/pic-2.png";

import image_5 from "../../images/pic-5.jpg";
import blog_2 from "../../images/blog2.jpg";
import company from "../../images/company.jpeg";

import newteam_1 from "../../images/newteam1.jpg";
import newteam_2 from "../../images/newteam2.jpg";
import newteam_3 from "../../images/newteam3.jpg";
import newteam_4 from "../../images/newteam4.jpg";
import newteam_5 from "../../images/newteam5.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";
import blog_3 from "../../images/blog3.png";
export default function AboutPage() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto flex md: py-[80] py-5  md:flex-row sm:flex-col flex-col">
        <div className="basis-[50%] px-5">
          <img src={company} className="w-[full] h-[35rem]" />
        </div>
        <div className="basis-[50%] px-5">
          <h1 className="text-3xl pb-5 ">Who We Are</h1>
          <p className="py-4 company-info w-[555px]">
            Established in 2015, ShopX is a leading online destination for
            fashion-forward individuals seeking trendy and affordable apparel.
            With a passion for style and a commitment to customer satisfaction,
            we strive to provide an unparalleled shopping experience for every
            shopper. At ShopX, we curate a diverse collection of clothing and
            accessories, carefully selected from top designers and emerging
            brands worldwide. From casual basics to statement pieces, our
            inventory caters to every taste and occasion, ensuring that our
            customers always find something they love. Driven by a dedication to
            innovation and convenience, our user-friendly platform makes
            browsing and purchasing effortless. With just a few clicks, shoppers
            can explore our extensive product range, read detailed descriptions,
            and view high-quality images to make informed decisions. We believe
            in the power of fashion to empower and inspire individuals, which is
            why we prioritize inclusivity and diversity in everything we do. Our
            commitment to sustainability also guides our operations, as we
            continually seek eco-friendly practices and ethically sourced
            materials. In addition to providing exceptional products, ShopX is
            committed to fostering a supportive community of fashion
            enthusiasts. Through our blog, social media channels, and
            interactive features, we encourage dialogue, creativity, and
            self-expression among our customers. As we continue to grow and
            evolve, our mission remains the same: to be the ultimate destination
            for fashion enthusiasts worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center ">Our Services</h1>
      </div>

      <div className="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <LocalShippingIcon className="services-icon mt-2" />
            <h3 className="text-xl text-center py-2">Free Delivery</h3>
          </div>
          <p className="services-content">
            Enjoy the convenience of free delivery on all orders! ShopX is
            committed to providing an exceptional shopping experience, which
            includes fast and free shipping straight to your doorstep. No
            minimum purchase required. Simply select your favorite items,
            proceed to checkout, and let us handle the rest. Shop now and
            indulge in hassle-free shopping with ShopX.
          </p>
        </div>
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <LockIcon className="services-icon mt-2" />
            <h3 className="text-xl text-center py-2">Secure Payments</h3>
          </div>
          <p className="services-content">
            At ShopX, we prioritize the security of your transactions. Rest
            assured, your payments are processed through encrypted channels,
            ensuring that your financial information remains safe and protected.
            Whether you choose credit card, PayPal, or other payment methods,
            you can shop with confidence knowing that your transactions are
            secure.
          </p>
        </div>
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <LocalOfferIcon className="services-icon mt-2" />
            <h3 className="text-xl text-center py-2">Amazing offers</h3>
          </div>
          <p className="services-content">
            Discover amazing offers at ShopX! From exclusive discounts to
            limited-time promotions, we're constantly bringing you unbeatable
            deals on your favorite apparel. Whether you're updating your
            wardrobe or searching for the perfect gift, our amazing offers make
            shopping even more rewarding. Don't miss out – shop now and take
            advantage of these incredible savings
          </p>
        </div>
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <HeadphonesIcon className="services-icon mt-2" />
            <h3 className="text-xl text-center py-2">24/7 Support</h3>
          </div>
          <p className="services-content">
            At ShopX, we understand that questions can arise anytime, which is
            why our dedicated support team is here for you 24/7. Whether you
            need assistance with an order, have a question about a product, or
            simply want to provide feedback, we're always just a click or call
            away. Our friendly and knowledgeable support agents are ready to
            help you every step of the way.
          </p>
        </div>
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <RecyclingIcon className="services-icon mt-2" />
            <h3 className="text-xl text-center py-2">
              Recycle of plastic items
            </h3>
          </div>
          <p className="services-content">
            Join us in our commitment to sustainability by recycling your
            plastic items with ShopX. We believe in the protecting our planet,
            which is why we've partnered organizations to offer a recycling
            program and we'll ensure they're responsibly recycled and
            repurposed. Together, we can make a positive impact on the
            environment and create a greener future for generations to come.
          </p>
        </div>
        <div className="shadow-lg p-4 border">
          <div className="flex md:flex-row  mt-2 gap-10">
            <LocalShippingIcon
              className="services-icon mt-2"
              sx={{ fontSize: "20px" }}
            />
            <h3 className="text-xl text-center py-2">Free Delivery</h3>
          </div>
          <p className="services-content">
            Enjoy the convenience of free delivery on all orders! ShopX is
            committed to providing an exceptional shopping experience, which
            includes fast and free shipping straight to your doorstep. No
            minimum purchase required. Simply select your favorite items,
            proceed to checkout, and let us handle the rest. Shop now and
            indulge in hassle-free shopping with ShopX.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center ">Our Team</h1>
      </div>

      <div className="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_1} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Sakshi Malhotra
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
                Web Designer
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_2} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Yashita Sahsani
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
                Backend Developer
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_3} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Pooja Hasrajani
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
                Technical Manager
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_4} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Urja Miterani
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
                Lead Tester
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_5} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Heena Motnani
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
                Project Manager
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg  border relative overflow-hidden group">
          <img src={newteam_6} className="teamimg" />

          <div className="absolute bg-black top-0 left-0 w-full h-full flex items-center justify-center  -translate-x-full group-hover:translate-x-0 duration-300">
            <div className="text-center m-2">
              <h3 className="text-white text-2xl font-bold mb-2">
             Natasha Kanjani
              </h3>
              <h4 className="text-white text-xl font-normal mb-2">
             Frontend Developer
              </h4>
              <ul>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    {" "}
                    <FacebookIcon />
                  </a>
                </li>
                <li className="inline-block mx-3">
                  <a href="#" className="text-white text-xl">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] md:py-[80]  mx-auto">
        <h1 className="text-4xl text-center ">FAQ Section</h1>
      </div>
      <div className="max-w-[1200px] mx-auto py-[50px] ">
        <ul class="max-w-[1200px] mx-auto  divide-y   rounded-xl p-3">
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-5 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>How do I place an order?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  To place an order, simply browse our website and add your
                  desired items to the shopping cart. Proceed to checkout, where
                  you'll be prompted to enter your shipping and payment details.
                  Once your order is confirmed, you'll receive a confirmation
                  email with your order details.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-5 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                What is your return policy?
                  
                </span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                We offer a hassle-free return policy. If you're not completely satisfied with your purchase, you can return it within 5-6 days for a full refund or exchange. Please refer to our 'Returns & Exchanges' page for detailed instructions.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What payment methods do you accept?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We accept payments via credit/debit card, Razorpay, and other
                  secure online payment methods. Rest assured, your payment
                  information is encrypted and securely processed.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Do you offer gift wrapping services?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  No, currently we do not offer gift wrapping services. However,
                  we're constantly updating our services, so please stay tuned
                  for any future additions or changes..
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>How can I contact customer support?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  You can reach our customer support team via email at
                  support@email.com or by filling out the contact form on our
                  website. We strive to respond to all inquiries within
                  24hours/2days during business hours.
                </p>
              </article>
            </details>
          </li>

          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What if my item is damaged or defective?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  We take pride in the quality of our products. In the rare
                  event that your item arrives damaged or defective, please
                  contact our customer service team within days of receiving.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Do you offer international shipping?</span>
              </summary>

              <article class="px-4 pb-4">
                <p>
                  No, at the moment we do not offer international shipping. Our
                  services are currently available within India. We're
                  continually assessing opportunities to expand our shipping
                  capabilities in the future.
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}
