import React, { useState } from "react";
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ApplyJob from "./ApplyJob";
import htmr from 'htmr';
import styled from 'styled-components';

const transform = {
  ul: 'span',
  li: 'li'
};

const DropDown = ({ info, keyy }) => {
  console.log(info.specifications);
  const [active, setActive] = useState(false);
  const [apply, setApply] = useState(false)
  
  
  return (
    <div>
      <AccordionComponent
        className="relative"
        allowZeroExpanded={true}
        onClick={() => setActive(!active)}
      >
        <AccordionItem
          className={`  shadow-half border-solid border-[2px] border-gray-300  rounded-md  ${
            active ? "bg-yellow-100" : "bg-white"
          } transition-all ease-in-out  duration-1000`}
          key={keyy}
        >
          <AccordionItemHeading>
            <AccordionItemButton className="flex items-center justify-between  text-xl md:text-2xl heading p-[24px]">
              <div className="title font-primary font-semibold text-base md:text-xl">
                {info.position}
              </div>
              <div className="arrow ">
                {" "}
                {active ? (
                  <img src="/icons/up.svg" className="h-3 w-3 md:h-6 md:w-6 " alt="" />
                ) : (
                  <img src="/icons/down.svg" className="h-3 w-3 md:h-6 md:w-6 " alt="" />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="tab-content overflow-hidden bg-gray-50 leading-normal border border-t-[2px] border-gray-300">
              <div className=" flex font-primary flex-col p-[24px]">
                  <p className='mb-[12px] text-base font-medium'>Experience: {info.experience}</p>
                  <p className='mb-[12px] text-base font-medium'>Requirement: {info.requirement}</p>
                  <p className='mb-[12px] text-base font-medium'>Job Specifications</p>
                  <div className="mb-[12px] text-sm text-gray-400" > {htmr(info.specifications, { transform })} </div>
                  <p className='mb-[12px] text-base font-medium '>Job Responsibilities</p>
                  <div className="mb-[12px] text-sm text-gray-400" > {htmr(info.responsibilites, { transform })} </div>
                  <button label='Apply' onClick={() => setApply(true)} className="border-solid border-[3px] border-black bg-white hover:bg-black text-black hover:text-white font-bold py-1.5 md:py-2 px-auto rounded-md mb-[6px] w-[80px] transition-all ease-linear duration-300 ">
                      Apply
                  </button>
                  {apply && <ApplyJob setApply={setApply} title={info.position} />}
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </AccordionComponent>
    </div>
  );
};

export default DropDown;