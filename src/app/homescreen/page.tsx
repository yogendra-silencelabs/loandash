"use client";
import Image from 'next/image';
import router from 'next/router';
import { useState, useEffect } from 'react';

interface LoanRequest {
  name: string;
  privacyLevel: string;
  accounts: string;
  privacyColor: string;
}

const loanRequests: LoanRequest[] = [
  { name: 'Sanjeev K', privacyLevel: 'Low Privacy', accounts: '2 accounts', privacyColor: '#7bf179' },
  { name: 'Rajesh R', privacyLevel: 'Medium Privacy', accounts: '1 account', privacyColor: '#ffd88c' },
  { name: 'Ravindran R', privacyLevel: 'High Privacy', accounts: '1 account', privacyColor: '#cc2300' },
];

export default function HomeScreen() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component renders on the client side
  }, []);
  
  const handleUserClick = () => {
    router.push("/userScreen");
  };

  return (
    <div className="min-h-screen w-full px-12 bg-[#0d0402] flex flex-col justify-start items-center">
      {/* Header Section */}
      <div className="self-stretch py-3 bg-[#0d0402] justify-between items-center inline-flex">
        <div className="justify-start items-center gap-6 flex">
          <div className="w-6 h-6 relative" />
          <div className="justify-start items-center gap-1 flex">
            <div className="w-8 h-8 relative" />
            <div className="text-[#ff9c87] text-2xl font-normal font-['Timmana'] leading-normal">LoanDash</div>
          </div>
        </div>
        <div className="h-10 justify-end items-center gap-6 flex">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
          {isClient && (
            <div className="w-10 h-10 rounded-[999px] justify-center items-center flex">
              <Image
                className="w-10 h-10 relative rounded-[999px] border border-black/0"
                src="https://via.placeholder.com/40x40"
                alt="Profile"
                width={40}
                height={40}
              />
            </div>
          )}
        </div>
      </div>

      {/* Dashboard Title Section */}
      <div className="self-stretch h-[404px] py-12 justify-start items-start inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-36 py-6 bg-[#0d0402] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-[#e4d9d7] text-[34px] font-semibold font-['Inter'] leading-10">
                    Loan Disbursement Dashboard
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
                <div className="px-2 py-1 bg-[#e0beb7]/10 rounded-lg border border-white/0 justify-center items-center gap-2 flex">
                  <div className="w-1.5 h-1.5 bg-[#0dcf4e] rounded-full" />
                  <div className="text-center text-[#e4d9d7] text-[15px] font-medium font-['Inter'] leading-tight">
                    Active
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-3 flex">
                <div className="px-4 py-2 bg-[#ff5733] rounded-lg justify-center items-center flex">
                  <div className="text-[#fffaf9] text-[15px] font-medium font-['Inter'] leading-tight">Share</div>
                </div>
                <div className="p-2 bg-[#0d0402] rounded-lg border border-[#b59790]/20 justify-center items-center flex">
                  <div className="w-5 h-5 justify-center items-center flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="justify-start items-start flex">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="w-8 h-8 rounded-[999px] border-2 border-[#050000] justify-center items-center flex">
                    <Image
                      className="w-8 h-8 relative rounded-[999px] border border-black/0"
                      src="https://via.placeholder.com/32x32"
                      alt={`Avatar ${index}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="text-[#ebd5d0]/60 text-[15px] font-normal font-['Inter'] leading-tight">
                  Alice, Bob, Charlie
                </div>
                <div className="text-[#ebd5d0]/60 text-[15px] font-normal font-['Inter'] leading-tight">+12 others</div>
              </div>
            </div>
          </div>

          {/* Loan Requests Overview */}
          <div className="self-stretch h-[212px] py-3 bg-[#0d0402] flex-col justify-center items-start gap-6 flex">
            <div className="self-stretch h-[188px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#e4d9d7] text-xl font-semibold font-['Inter'] leading-normal">
                Loan Requests Overview
              </div>
              <div className="self-stretch justify-start items-center gap-6 inline-flex">
                {['Total Requests', 'Approved', 'Rejected', 'Pending'].map((title, index) => (
                  <div
                    key={index}
                    className="grow shrink basis-0 p-6 bg-[#e0beb7]/10 rounded-2xl border border-white/0 flex-col justify-start items-start gap-4 inline-flex"
                  >
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="grow shrink basis-0 text-[#e4d9d7] text-[17px] font-semibold font-['Inter'] leading-normal">
                        {title}
                      </div>
                      <div className="w-6 h-6 relative" />
                    </div>
                    <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch text-[#e4d9d7] text-[34px] font-semibold font-['Inter'] leading-10">
                        {index === 0 ? '150' : index === 1 ? '120' : index === 2 ? '30' : '10'}
                      </div>
                      <div className="self-stretch text-[#ffa18c] text-[13px] font-medium font-['Inter'] leading-none">
                        {index === 0 ? '+10%' : index === 1 ? '+8%' : index === 2 ? '+2%' : '-5%'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Requests Section */}
          <div className="self-stretch h-[189px] py-3 bg-[#0d0402] flex-col justify-center items-start gap-6 flex">
        <div className="self-stretch h-[165px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-[#e4d9d7] text-xl font-semibold font-['Inter'] leading-normal">
            Pending requests
          </div>
          <div className="self-stretch justify-start items-center gap-6 inline-flex">
            {loanRequests.map((request, index) => (
              <div
                key={index}
                className="w-[296px] p-6 bg-[#e0beb7]/10 rounded-2xl border border-white/0 flex-col justify-start items-start gap-4 inline-flex cursor-pointer"
                onClick={handleUserClick}
              >
                <div className="self-stretch h-[77px] flex-col justify-start items-start gap-3.5 flex">
                  <div className="self-stretch text-[#e4d9d7] text-[34px] font-semibold font-['Inter'] leading-10">
                    {request.name}
                  </div>
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div
                      className="h-[23px] rounded-[10px] justify-center items-center gap-2.5 flex"
                      style={{ backgroundColor: request.privacyColor }}
                    >
                      <div className="grow shrink basis-0 text-center text-[#261b18] text-[13px] font-medium font-['Inter'] leading-none">
                        {request.privacyLevel}
                      </div>
                    </div>
                    <div className="h-[23px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-center text-[#261b18] text-[13px] font-medium font-['Inter'] leading-none">
                        {request.accounts}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
