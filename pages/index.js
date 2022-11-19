import dynamic from "next/dynamic";
import Head from "next/head";
import { CommentSection } from "../src/components/comment";
import { DrawSection } from "../src/components/draw";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import Script from "next/script";

// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Script strategy={"beforeInteractive"}>
        {`
          function setInitDefaultThemeColor() {
            const userColorScheme = window.matchMedia("(prefers-color-scheme: light)")
              .matches
              ? "light"
              : "dark";
          
            const storedColorScheme = localStorage.getItem("theme");
          
            const getColorScheme = () => {
              if (storedColorScheme) return storedColorScheme === "light";
              return userColorScheme === "light";
            };
          
            const root = document.documentElement;
            const isLightColorScheme = getColorScheme();
          
            if (!isLightColorScheme) root.querySelector("#app").classList.add("dark")
          }
        
        document.addEventListener("DOMContentLoaded", setInitDefaultThemeColor);
        `}
      </Script>
      <div className="flex flex-col gap-40">
        <Header />
        <HeroSection />
        <ProjectSection />
        <DynamicMemorySection />
        <DrawSection />
        <CommentSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
