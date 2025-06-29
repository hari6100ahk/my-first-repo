import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Forever, your ultimate destination for trendy and high-quality clothing for men, women, and kids. We are dedicated to providing a seamless online shopping experience, offering a wide range of apparel for every occasion and style. From casual wear to formal attire, our collections are thoughtfully curated to ensure you always find something perfect for yourself and your loved ones.
            </p>
            <p>At Forever, we believe fashion is for everyone, which is why we bring you stylish, comfortable, and affordable options. With a user-friendly interface and secure payment methods, shopping has never been easier. Discover the joy of dressing up and staying fashionable with Forever, where style meets convenience.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Forever is to redefine the online shopping experience by offering a diverse range of premium-quality clothing for men, women, and kids. We are dedicated to making fashion accessible, affordable, and inclusive for everyone, ensuring style and comfort go hand in hand. By curating collections that cater to all occasions and preferences, we aim to bring elegance and trendsetting designs to your doorstep. At Forever, customer satisfaction, sustainability, and innovation drive everything we do as we strive to become your trusted destination for timeless fashion.</p>

        </div>
      </div>
      <div className='text-xl py-4 '>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Forever, quality is at the heart of everything we do. We meticulously select premium fabrics and partner with trusted manufacturers to ensure our clothing meets the highest standards. Every product undergoes rigorous quality checks to guarantee durability, comfort, and style. Our commitment to excellence ensures you receive nothing but the best, making Forever your reliable choice for timeless and long-lasting fashion.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At Forever, we prioritize your shopping experience by offering unparalleled convenience. From a user-friendly interface to seamless navigation, our platform is designed to make online shopping effortless. Enjoy flexible payment options, fast shipping, and easy returns, all tailored to fit your lifestyle. Shop anytime, anywhere, and discover the joy of stress-free shopping with Forever.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exeptional Customer Service:</b>
            <p className='text-gray-600'>At Forever, we are committed to delivering exceptional customer service that exceeds your expectations. Our dedicated support team is always ready to assist you with any inquiries, ensuring a smooth and satisfying shopping experience. Whether it’s resolving issues, providing product recommendations, or answering your questions, we’re here to make your journey with Forever truly delightful. Your satisfaction is our priority.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About