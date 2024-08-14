/* eslint-disable react/react-in-jsx-scope */
// import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className='outerWrapper'>
        <div
          className='banner aboutBanner'
          style={{
            backgroundImage: 'url("https://krwzqpaj7utmeydl.public.blob.vercel-storage.com/banners/contactUs-j0Yd9ydyCc30eU504BthhPOCIH1jX7.jpg")',
          }}
        >
          <h2 className='category'>About Us</h2>
        </div>
        <div className='wrapper'>
          <div className='quote'>
            <p className='quoteMark leftQuote'>&ldquo;</p>
            <p className='quoteText'>Cinderella is proof that a new pair of shoes can change your&nbsp;life.</p>
            <p className='quoteMark rightQuote'>&rdquo;</p>
          </div>
          <section className='about'>
            <div className='aboutImg'>
              <Image
                src='https://krwzqpaj7utmeydl.public.blob.vercel-storage.com/banners/aboutUsImg-ZzNyl8KoRSUJ1RrpoS08U69jRSoRVv.jpg'
                width={650}
                height={350}
                sstyle={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className='mission'>
              <h5>Our Mission</h5>
              <p>
                At Shoos, we blend modern style with social responsibility, offering footwear that not only elevates your look but also makes a positive impact. Our mission is to deliver cutting-edge designs that reflect your unique style, while championing ethical practices that respect people and
                the planet. With every step, you're not just moving forward in fashion—you're contributing to a better world.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
