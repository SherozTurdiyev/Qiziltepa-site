import * as React from "react";
import Navbar from "../components/Navbar";
import "../assets/global.css";
import Layout from "../components/Layout";
import Header from "../components/Index/Header";
import Title from "../components/Index/Title";
import Services from "../components/Index/Services";
import News from "../components/Index/News";
import Videos from "../components/Index/Videos";
import Resurses from "../components/Index/Resurses";

const IndexPage = () => {
  return (
    <main className="bg-lightPrimary min-h-screen">
      <Layout>
        {/* header */}
        <Header/>
        {/* service */}
        <Services/>
        {/* Mews */}
        <News/>
        {/* Voqealar */}
        <Videos/>
        {/* resurslar */}
        <Resurses/>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
