import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUsForm from "../components/ContactUsForm";

import MiniHeader from "../components/miniHeader";

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Contact </title>
      </Helmet>
      <MiniHeader index={15} />
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
