import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>
        I'm Maksym, Front-End developer living in beautiful city of Cracow in
        Poland.
      </h2>
      <p>
        Need a developer?<Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};
export default IndexPage;
