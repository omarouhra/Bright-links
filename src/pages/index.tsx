import Logo from "@/components/Logo";
import {
  GithubRepository,
  LinkedinShare,
  TwitterShare,
} from "@/components/Share";
import LogoMask from "@/Icon/logoMask";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const Home = () => {
  const [activeBox, setActiveBox] = useState<
    "Videos" | "Websites" | "Apps" | "Podcasts"
  >("Videos");

  return (
    <div>
      <section className="bg-[#EEEEEE] px-5">
        <div className="relative mx-auto max-w-[1600px]">
          <div className="invisible absolute top-0 -right-1/3  opacity-40 lg:right-0 xl:visible">
            <LogoMask />
          </div>
          <header className=" flex  items-start py-12  ">
            <Logo />
          </header>
          <section>
            <div className="flex flex-col items-start justify-center py-8 md:py-16 ">
              <div className="py- space-y-[3.125rem]">
                <div className="space-y-5">
                  <h1 className="max-w-2xl text-4xl font-light leading-relaxed md:text-6xl md:leading-normal">
                    Your golden library of{" "}
                    <span className="bg-gradient-to-r from-[#DF6F1F] to-[#FFE5A4] bg-clip-text font-bold text-transparent">
                      Islamic
                    </span>{" "}
                    resources
                  </h1>
                  <p className="max-w-2xl text-base font-light text-gray-800 md:text-lg">
                    Brighter path, is an app where you can find different
                    resources to learn more about your deen!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex space-x-8 text-base font-normal md:space-x-12 md:text-xl">
              <button className="bordrer-b border-b-2  border-[#DF6F1F] py-2">
                Videos
              </button>
              <button className="py-2">Websites</button>
              <button className="py-2">Apps</button>
              <button className="py-2">Poadcast</button>
            </div>
          </section>
        </div>
      </section>

      <main className="mx-auto max-w-[1600px] px-5">
        <div className=" flex flex-col items-center justify-center space-y-8 py-12 ">
          <p className="max-w-xl text-center md:leading-loose">
            Let your friends know about Brither Links App! For any suggestions
            or bugs reporting! Check the Github repository. Thanks
          </p>
          <div className="flex  items-center justify-center space-x-6">
            <TwitterShare />
            <LinkedinShare />
            <GithubRepository />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin
    .from("resources")
    .select("*")
    .order("id");

  return { props: { resources: data } };
};

export default Home;
