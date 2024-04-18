import { CodeToLife } from "@/components/pages/home/code-to-life";
import { ContactForm } from "@/components/pages/home/contact-form";
import HomeDesign from "@/components/pages/home/home-design";
import { HomeHero } from "@/components/pages/home/home-hero";
import { RadarServices } from "@/components/pages/home/radar-services";
import { PulseBeams } from "@/components/pulse-beam";
import { PinContainer } from "@/components/ui/3d-pin";
import { BoxesCore } from "@/components/ui/background-boxes";
import { BackgroundCellCore } from "@/components/ui/background-ripple-effect";
import { LampDemo } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <div>
      <div>
        <HomeHero />
      </div>
      <div className="relative bg-slate-950 flex justify-center overflow-hidden">
        <BackgroundCellCore />
        <div className="relative z-50 mt-40 pointer-events-none select-none">
          <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
            Build Applications <br></br>
            the right way
          </h1>
        </div>
      </div>
      {/* <HomeDesign /> */}
      <LampDemo />
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <BoxesCore />
        <h1 className="md:text-4xl text-xl text-white relative z-20 !p-0 !m-0">
          Interactive User Interfaces
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Applications that are alive. Hover over the boxes
        </p>
      </div>
      <CodeToLife />

      <div className="flex container my-[100px]">
        <div className="flex-1">
          {" "}
          <div className="flex flex-col items-center justify-center h-[30rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
              Your next project starts here
            </p>
            <TypewriterEffectSmooth
              words={[
                {
                  text: "Build",
                },
                {
                  text: "modern",
                },
                {
                  text: "apps",
                },
                {
                  text: "with",
                },
                {
                  text: "DevDotDev.",
                  className: "text-blue-500 dark:text-blue-500",
                },
              ]}
            />
            {/* <ContactForm />
             */}
            <div className="">
              <div className="w-full relative ">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="flex items-center justify-between ">
                  <div className=" mt-[30px] flex-1 relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="w-[500px]">
                      <ContactForm />
                    </div>
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* console */}
      <div className="h-[40rem] w-full flex items-center justify-center flex-[.1]">
        <PinContainer
          title="/x.com/devdotdev"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Find us on X (formerly Twitter)
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Click below to follow</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
      <div className="mt-[00px]">
        <RadarServices />
      </div>
    </div>
  );
}
export const content = [
  {
    title: "Discovery Phase:",
    description:
      "This phase involves understanding the project's goals, target audience, and requirements. It's about laying the foundation by creating a roadmap and strategy that aligns with the client's objectives, conducting market research, and setting clear, actionable milestones to guide the development process.",
  },
  {
    title: "Design Phase",
    description:
      "Here, the focus shifts to creating the visual blueprint of the project. This phase involves designing user interfaces and user experiences (UI/UX) that are intuitive and engaging. It encompasses wireframing, prototyping, and iterating designs based on feedback, ensuring the final product is not only aesthetically pleasing but also user-friendly.",
  },
  {
    title: "Development Phase",
    description:
      "This phase involves the actual construction of the web or application, turning design mockups into a functioning product. Our developers write clean, efficient code to build scalable and robust features, while ensuring cross-platform compatibility and adherence to the latest web standards.",
  },
  {
    title: "Deployment and Maintenance",
    description:
      "After thorough testing and quality assurance, the project goes live. But our work doesn't stop there; we continue to monitor, update, and optimize the application or website, providing ongoing support to ensure it remains secure, functional, and aligned with evolving user needs and technological advancements.",
  },
];
