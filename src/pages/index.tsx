import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isActive?: boolean; text: string };

const Box = ({ isActive = false, text, ...rest }: Props) => {
  const boxClassName = `text-xl font-semibold rounded-[0.312rem] inline-flex py-2.5 px-[3.437rem] ${
    isActive ? "bg-[#E58538] text-white" : "bg-[#EAEAEA] text-[#8A8A8A]"
  }`;

  return (
    <button className={boxClassName} {...rest}>
      {text}
    </button>
  );
};

const Home = () => {
  const [activeBox, setActiveBox] = useState<
    "Videos" | "Websites" | "Apps" | "Podcasts"
  >("Videos");

  return (
    <>
      <main>
        <section className="flex flex-col items-center justify-center text-center">
          <div className="space-y-[3.125rem]">
            <div className="space-y-5">
              <h1 className="text-[2.5rem] font-medium">
                Your golden library of{" "}
                <span className="bg-gradient-to-r from-[#DF6F1F] to-[#FFE5A4] bg-clip-text font-bold text-transparent">
                  Islamic
                </span>{" "}
                resources
              </h1>

              <p className="text-lg">
                Brighter path, is an app where you can find different resources
                to learn more about your deen!
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <Box
                text="Videos"
                isActive={activeBox === "Videos"}
                onClick={() => setActiveBox("Videos")}
              />
              <Box
                text="Websites"
                isActive={activeBox === "Websites"}
                onClick={() => setActiveBox("Websites")}
              />
              <Box
                text="Apps"
                isActive={activeBox === "Apps"}
                onClick={() => setActiveBox("Apps")}
              />
              <Box
                text="Podcasts"
                isActive={activeBox === "Podcasts"}
                onClick={() => setActiveBox("Podcasts")}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
