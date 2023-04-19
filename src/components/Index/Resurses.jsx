import React from "react";
import { resourses } from "../../service/constans";
import Title from "./Title";

const Resurses = () => {
  return (
    <div className="pb-[96px]">
      <Title title={"Foydali resurslar"} />
      <div className="container pt-2">
        <div className="flex flex-wrap justify-between items-center">
          {resourses.map((item, index) => {
            return (
              <div className="xs:w-full lg:w-[220px] flex justify-center items-center xs:mt-3">
                <div className="card w-[220px] h-[220px] bg-white rounded-full flex flex-col justify-center items-center">
                  <div className="w-[123px] h-[98px] flex justify-center items-center">
                    <img
                      className="max-h-[95px] mb-[6px]"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <p className="w-[155px] font-medium leading-4 text-xs text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resurses;
