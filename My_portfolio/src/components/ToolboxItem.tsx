import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";
import React from "react";

export const ToolBoxItems = ({
  items,
  className,
  itemWrapperClassName,
}: {
  items: {
  title: string;
  IconType: React.ComponentType<{ className?: string }>;
}[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <div key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 mr-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.IconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
