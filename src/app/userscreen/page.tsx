"use client";
import Image from 'next/image';
import router from 'next/router';
import { useState, useEffect } from 'react';

export default function UserScreen() {
  return (
    <div className="w-[1440px] h-[900px] px-12 bg-[#0d0402] flex-col justify-start items-start inline-flex">
      <div className="self-stretch py-3 bg-[#0d0402] justify-between items-center inline-flex">
        <div className="justify-start items-center gap-6 flex">
          <div className="w-6 h-6 relative" />
          <div className="justify-start items-center gap-1 flex">
            <div className="w-8 h-8 relative" />
            <div className="text-[#ff9c87] text-2xl font-normal font-['Timmana'] leading-normal">
              LoanDash
            </div>
          </div>
        </div>
        <div className="h-10 justify-end items-center gap-6 flex">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
          <div className="w-10 h-10 rounded-[999px] justify-center items-center flex">
            <img
              className="w-10 h-10 relative rounded-[999px] border border-black/0"
              src="https://via.placeholder.com/40x40"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[759px] py-12 justify-center items-center inline-flex">
        <div className="w-[568px] h-[759px] relative bg-gradient-to-b from-[#0d0402] to-[#1d100d] rounded-2xl border border-[#667080]">
          <div className="h-12 left-[-67px] top-[624px] absolute rounded-[100px]" />
          <div className="w-[296px] h-[150px] p-6 left-[34.50px] top-[45px] absolute bg-[#e0beb7]/10 rounded-2xl border border-white/0 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-[89px] flex-col justify-center items-center gap-[23px] flex">
              <div className="self-stretch text-[#e4d9d7] text-[34px] font-semibold font-['Inter'] leading-10">
                Sanjeev K
              </div>
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="w-[104px] h-[23px] bg-[#7bf179] rounded-[10px] justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-[#261b18] text-[13px] font-medium font-['Inter'] leading-none">
                    Low Privacy
                  </div>
                </div>
                <div className="w-[104px] h-[23px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-center text-[#261b18] text-[13px] font-medium font-['Inter'] leading-none">
                    2 accounts
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-[42.50px] top-[248px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-[#cbd4fe] text-[25px] font-normal font-['Epilogue']">
              CURRENT BALANCE
            </div>
            <div className="text-[#e4e9ff] text-[52px] font-medium font-['Epilogue']">
              ₹ 12,247,246
            </div>
          </div>
          <div className="left-[42.50px] top-[387px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-[#cbd4fe] text-[25px] font-normal font-['Epilogue']">
              MONTHLY SALARY
            </div>
            <div className="text-[#e4e9ff] text-[52px] font-medium font-['Epilogue']">
              ₹ 101,200
            </div>
          </div>
          <div className="h-[68px] left-[354.50px] top-[127px] absolute flex-col justify-center items-center gap-3 inline-flex">
            <div className="self-stretch h-[68px] p-4 bg-[#002203] rounded-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex">
                  <div className="text-[#7bf179] text-xs font-light font-['Sora'] leading-3">
                    Chase
                  </div>
                  <div className="text-[#7bf179] text-sm font-normal font-['Sora'] leading-[14px]">
                    xxxxxxxxx1901
                  </div>
                </div>
                <img
                  className="w-[45px] h-11 origin-top-left rotate-180"
                  src="https://via.placeholder.com/45x44"
                />
              </div>
            </div>
          </div>
          <div className="w-[183px] h-[68px] left-[354.50px] top-[45px] absolute flex-col justify-center items-center gap-3 inline-flex">
            <div className="self-stretch h-[67px] p-4 bg-[#002203] rounded-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex">
                  <div className="text-[#7bf179] text-xs font-light font-['Sora'] leading-3">
                    Wells Fargo
                  </div>
                  <div className="text-[#7bf179] text-sm font-normal font-['Sora'] leading-[14px]">
                    xxxxxxxx2022
                  </div>
                </div>
                <img
                  className="w-[45px] h-11"
                  src="https://via.placeholder.com/45x44"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[765px] h-[759px] relative bg-gradient-to-b from-[#0d0402] to-[#1d100d] rounded-2xl border border-[#667080]">
          <img
            className="w-10 h-10 left-[25px] top-[246px] absolute rounded-[100px]"
            src="https://via.placeholder.com/40x40"
          />
          <div className="left-[81px] top-[254px] absolute text-white text-xl font-bold font-['Inter'] leading-normal">
            InsightAI
          </div>
          <div className="w-[652px] left-[81px] top-[290px] absolute text-white text-base font-medium font-['Inter'] leading-snug">
            Get insights on the loan requester while empowering privacy
            <br />
            <br />
            Timeline available: 6 months
            <br />
            Validity: 1 week
          </div>
          <div className="left-[32.50px] top-[531px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="pl-1 pr-2 py-1.5 bg-[#667080] rounded-[100px] justify-center items-center gap-1 inline-flex">
              <div className="w-4 h-4 relative bg-[#eef0f4] rounded-[100px] border-2 border-[#667080]">
                <div className="w-[22.63px] h-[0px] left-0 top-0 absolute origin-top-left rotate-45 border border-[#667080]"></div>
                <div className="w-[22.63px] h-[0px] left-0 top-[16px] absolute origin-top-left -rotate-45 border border-[#667080]"></div>
              </div>
              <div className="text-[#eef1f4] text-base font-medium font-['Inter']">
                How many check bounces has the user made?
              </div>
            </div>
            <div className="pl-1 pr-2 py-1.5 bg-[#667080] rounded-[100px] justify-center items-center gap-1 inline-flex">
              <div className="w-4 h-4 relative bg-[#eef0f4] rounded-[100px] border-2 border-[#667080]">
                <div className="w-[22.63px] h-[0px] left-0 top-0 absolute origin-top-left rotate-45 border border-[#667080]"></div>
                <div className="w-[22.63px] h-[0px] left-0 top-[16px] absolute origin-top-left -rotate-45 border border-[#667080]"></div>
              </div>
              <div className="text-[#eef1f4] text-base font-medium font-['Inter']">
                Loan repayment trends
              </div>
            </div>
          </div>
          <div className="h-12 left-[32px] top-[624px] absolute rounded-[100px] flex-col justify-end items-start gap-1 inline-flex">
            <div className="px-4 py-3 bg-white rounded-[100px] border border-[#667080] justify-center items-start gap-3 inline-flex">
              <div className="w-[633px] text-[#667080] text-base font-normal font-['Inter'] leading-snug">
                Ask Insight AI
              </div>
              <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1344px] h-12 relative bg-[#0d0402]" />
    </div>
  );
}
