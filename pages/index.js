import Head from "next/head";
import { useState } from "react";
import {
  Client,
  Contact,
  Footer,
  Header,
  Methods,
  Navbar,
  Pricing,
  Services,
} from "../components";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div data-darktheme={darkTheme} className="parentDiv">
      <Head>
        <title>Web design</title>
        <meta
          name="description"
          content="We help our clients succeed by creating brand identities, digital experiences, and print materials."
        />
        <link rel="icon" href="/profile.webp" />
      </Head>
      <div className="min-h-screen mainDiv relative overflow-x-hidden">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <div className='coverDiv'></div>
          <Header />
          <Services />
          <Methods />
          <Pricing />
          <Client />
          <Contact />        
        <Footer />
      </div>
    </div>
  );
}
