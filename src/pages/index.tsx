import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import {
  GithubRepository,
  LinkedinShare,
  TwitterShare,
} from "@/components/Share";
import ResourceCard from "@/components/ResourceCard";
import LogoMask from "@/Icon/logoMask";
import Logo from "@/components/Logo";

import type { TResource } from "@/types/resource";
import type { TCategory } from "@/types/category";

const Home = ({ resources }: { resources: TResource[] }) => {
  const [active, setActive] = useState<TCategory>("video");

  const categoryClassname = (category: TCategory) =>
    ` ${
      active === category
        ? "bordrer-b border-b-2 border-[#DF6F1F] py-2 text-[#DF6F1F] transition duration-300"
        : "bordrer-b border-b-2 py-2 transition duration-300"
    }`;

  const filtredResources = resources.filter(
    (resource) => resource.category === active
  );

  return (
    <>
      <main>
        <section className="bg-[#ececec] px-5 shadow-lg">
          <div className="inner-container relative">
            <div className="absolute top-0 -right-1/3 hidden  lg:right-0 xl:inline-block">
              <LogoMask />
            </div>

            <header className="flex items-start py-12">
              <Logo />
            </header>

            <div>
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
                <button
                  onClick={() => setActive("video")}
                  className={categoryClassname("video")}
                >
                  Videos
                </button>
                <button
                  onClick={() => setActive("website")}
                  className={categoryClassname("website")}
                >
                  Websites
                </button>
                <button
                  onClick={() => setActive("app")}
                  className={categoryClassname("app")}
                >
                  Apps
                </button>
                {/* <button
                  onClick={() => setActive("podcast")}
                  className={categoryClassname("podcast")}
                >
                  Poadcast
                </button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="inner-container grid grid-cols-1   gap-8 py-12 md:grid-cols-2 md:gap-12 ">
            {filtredResources?.map((props) => (
              <ResourceCard {...props} key={props.id} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5">
          <div className=" flex flex-col items-center justify-center space-y-8 py-24 ">
            <p className="max-w-xl text-center md:leading-loose">
              Let your friends know about Brither Links App! For any suggestions
              or bugs reporting! Check the Github repository. Thanks
            </p>

            <div className="flex items-center justify-center space-x-6">
              <TwitterShare />
              <LinkedinShare />
              <GithubRepository />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative  overflow-y-hidden px-5 pt-24 pb-8 text-center">
        <div className="grascale absolute -bottom-[400px] -left-[300px] animate-spin opacity-20">
          <LogoMask />
        </div>
        <div className=" mx-auto  max-w-[1600px] space-y-12">
          <p className="italic text-[#DF6F1F]">
            This app is for the sake of{" "}
            <span className="font-semibold">Allah</span> and the Good of the
            Ummah!
          </p>

          <div className="grayscale">
            <Logo />
          </div>
        </div>
      </footer>
    </>
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
