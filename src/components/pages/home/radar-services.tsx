import { IconContainer } from "@/components/ui/icon-container";
import { Radar } from "@/components/ui/radar";
import {
  BookImage,
  Bug,
  FlaskConical,
  Github,
  Globe,
  Paintbrush,
} from "lucide-react";

export const RadarServices = () => (
  <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          text="Web Development"
          delay={0.2}
          icon={<Globe className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          delay={0.4}
          text="iOS/Android Applications"
          icon={<Globe className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          text="Application Design"
          delay={0.3}
          icon={<Paintbrush className=" h-8 w-8 text-slate-600" />}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-md">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          text="Application Debugging"
          delay={0.5}
          icon={<Bug className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          text="Unit/Integration Testing"
          icon={<FlaskConical className=" h-8 w-8 text-slate-600" />}
          delay={0.8}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.6}
          text="Full CI/CD Pipeline"
          icon={<Github className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          delay={0.7}
          text="CMS Integration"
          icon={<BookImage className=" h-8 w-8 text-slate-600" />}
        />
      </div>
    </div>

    <Radar className="absolute -bottom-12" />
    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
  </div>
);
