import React from "react";
import { Check, Trash } from "./common/Icons";
import { todoData } from "./common/Helper";
const Todo = () => {
  return (
    <>
      <div className="px-3 h-screen flex justify-center items-center">
        <div className="sm:px-[29px] px-[18px] pt-[18px] sm:pt-[29px] pb-[18px] w-[480px] border border-[#E2E8F0] rounded-lg">
          <h2 className="font-semibold text-[#020617] ff_inter text-[24px] text-center leading-normal">
            Toods
          </h2>
          <p className="ff_inter text-[#64748B] text-[12px] font-medium mb-2 leading-normal">
            Enter Todo
          </p>
          <div className="flex items-center justify-between border border-[#E2E8F0] pl-6 pr-2 py-1 rounded-lg">
            <input
              className="outline-none w-full pe-2 ff_inter font-normal text-[14px] text-[#334155] placeholder:text-[#334155]"
              type="text"
              placeholder="Learn html css"
            />
            <button className="ff_inter bg-[#2563EB] hover:bg-red-500 transition-all duration-300 font-semibold text-[14px] text-white leading-normal px-6 rounded-lg py-[12px]">
              Add
            </button>
          </div>
          <div className="rounded-lg border-[#E2E8F0] border-b  border-l border-r overflow-hidden mt-[18px]">
            {todoData.map((obj, todo) => (
              <div>
                <div
                  key={todo}
                  className="flex justify-between items-center border-t border-collapse border-[#E2E8F0] px-4 py-[10px]">
                  <p className="ff_inter text-[#64748B] text-[14px] font-normal leading-normal">
                    {obj.para}
                  </p>
                  <div className="flex gap-[13px]">
                    <span className="cursor-pointer">
                      <Trash />
                    </span>
                    <span className="cursor-pointer check_icon">
                      <Check />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
