import { FULL_NAME } from "../../lib/config";
import { Typography } from "../atom/Typography";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col mx-auto max-w-4xl w-full">
      <img
        width={300}
        height={300}
        src="/images/avatar.jpg"
        alt="avatar"
        className="rounded shadow-lg md:absolute right-[-41px] top-[-16px]"
      />
      <div className="flex flex-col gap-4 w-fit">
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl">
          I'm{" "}
          <Typography variant={"gradient"}>
            {FULL_NAME}
          </Typography>
        </h1>
        <p className="max-w-xl text-xl">
          <b>Apprenti React.</b> I’m a Web Application Developer that make thing on
          internet, A real wizard of applications, a sleight of hand and here is the {" "}
          <Typography variant={"gradient"}>application of your dreams</Typography>
        </p>
      </div>
    </div>
  );
};
