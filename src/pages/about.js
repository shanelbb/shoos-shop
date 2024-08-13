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
        <div className='banner aboutBanner'>
          <h2 className='category'>About Us</h2>
        </div>
        <div className='wrapper'>
          <section className='mission'>
            <h5>Our Mission</h5>
            <p>
              At Shoos, we are committed to stepping lightly on the planet while making bold strides in fashion. Our mission is to offer a curated collection of stylish, eco-friendly footwear that empowers individuals to express themselves without boundaries. We believe in doing good for the world,
              from sustainable sourcing to ethical production, and in creating a space where everyone is welcome, regardless of gender. At Shoos, every step you take is a step toward a more inclusive, conscious, and vibrant future.
            </p>
          </section>
          <section className='aboutImgAndQuote'>
            <div className='aboutImg'>
              <Image
                src='/./assets/banners/aboutUsImg.jpg'
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
            <div className='quote'>
              <p className='quoteMark leftQuote'>&ldquo;</p>
              <p className='quoteText'>Cinderella is proof that a new pair of shoes can change your&nbsp;life.</p>
              <p className='quoteMark rightQuote'>&rdquo;</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
