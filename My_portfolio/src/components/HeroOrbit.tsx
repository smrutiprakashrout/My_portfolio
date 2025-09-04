import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  spinduration,
  spinoduration,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinduration?: string;
  shouldOrbit?: boolean;
  spinoduration?:string;
  shouldSpin?:boolean,
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit == true && "animate-spin")}
        style={{
          animationDuration: spinduration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div className="animate-spin [animation-duration:10s]">
            <div
              className=" inline-flex "
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
