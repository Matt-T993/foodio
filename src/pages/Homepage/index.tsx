import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "components/Navbar";
import Header from "components/Header";
import PopularDish from "components/PopularDish";
import PopularMenu from "components/PopularMenu";
import PopularChef from "components/PopularChef";
import Testimonial from "components/Testimonial";
import RSVP from "components/RSVP";
import Footer from "components/Footer";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>foodie</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[129px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[70px] p-[50px] md:p-5 bg-gradient">
            <Navbar />
            <Header />
          </div>
        </div>
        <PopularDish />
        <PopularMenu />
        <PopularChef />
        <Testimonial />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}
