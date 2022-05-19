import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <p>Tel.666501425</p>
        <a
          href="https://www.linkedin.com/in/maksym-kaczorowski-008b3a154/"
          target="_blank"
        >
          Linked in
        </a>
      </Layout>
    </div>
  );
};
export default ContactPage;
