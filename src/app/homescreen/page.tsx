"use client";
import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";

interface LoanRequest {
  name: string;
  privacyLevel: string;
  accounts: string;
  privacyColor: string;
}

export default function HomeScreen() {
  const [isClient, setIsClient] = useState(false);
  const [totalRequests, setTotalRequests] = useState(0);
  const [approvedRequests, setApprovedRequests] = useState(0);
  const [rejectedRequests, setRejectedRequests] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [loanRequests, setLoanRequests] = useState<LoanRequest[]>([]);

  const fetchData = () => {
    console.log("Fetching data from APIs...");

    // Fetch loan statistics
    fetch("http://localhost:3005/api/statistic")
      .then((response) => {
        console.log("Loan statistics response status:", response.status);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch loan statistics.");
        }
      })
      .then((data) => {
        console.log("Loan statistics data received:", data);
        setTotalRequests(data.totalRequests);
        setApprovedRequests(data.approved);
        setRejectedRequests(data.rejected);
        setPendingRequests(data.pending);
      })
      .catch((error) =>
        console.error("Error fetching loan statistics:", error)
      );

    // Fetch loan requests
    fetch("http://localhost:3005/api/loan_requests")
      .then((response) => {
        console.log("Loan requests response status:", response.status);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch loan requests.");
        }
      })
      .then((data) => {
        console.log("Loan requests data received:", data);
        const formattedRequests = data.map((request: any) => ({
          name: request.name,
          privacyLevel: request.privacyLevel,
          accounts: request.accounts,
          privacyColor: request.privacyColor,
        }));
        setLoanRequests(formattedRequests);
      })
      .catch((error) => console.error("Error fetching loan requests:", error));
  };

  useEffect(() => {
    setIsClient(true);
    console.log("Initial data fetch");
    fetchData(); // Initial fetch

    // Set up an interval to fetch data every 60 seconds
    const interval = setInterval(() => {
      console.log("Refetching data...");
      fetchData();
    }, 60000);

    // Clear the interval when the component unmounts
    return () => {
      console.log("Clearing interval on component unmount");
      clearInterval(interval);
    };
  }, []);

  const handleUserClick = () => {
    console.log("Navigating to user screen");
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
            <div className="text-[#ff9c87] text-2xl font-normal font-['Timmana'] leading-normal">
              LoanDash
            </div>
          </div>
        </div>
        <div className="h-10 justify-end items-center gap-6 flex">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
          {isClient && (
            <div className="w-10 h-10 rounded-[999px] justify-center items-center flex"></div>
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
                  <div className="text-[#fffaf9] text-[15px] font-medium font-['Inter'] leading-tight">
                    Share
                  </div>
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
                {[1, 2, 3, 4].map((index) => {
                  // Generate a random color
                  const randomColor = `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`;

                  return (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-[999px] border-2 border-[#050000] justify-center items-center flex"
                      style={{ backgroundColor: randomColor }}
                    ></div>
                  );
                })}
              </div>

              <div className="justify-start items-center gap-1 flex">
                <div className="text-[#ebd5d0]/60 text-[15px] font-normal font-['Inter'] leading-tight">
                  Alice, Bob, Charlie
                </div>
                <div className="text-[#ebd5d0]/60 text-[15px] font-normal font-['Inter'] leading-tight">
                  +12 others
                </div>
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
                {["Total Requests", "Approved", "Rejected", "Pending"].map(
                  (title, index) => (
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
                          {index === 0
                            ? totalRequests
                            : index === 1
                            ? approvedRequests
                            : index === 2
                            ? rejectedRequests
                            : pendingRequests}
                        </div>
                        <div className="self-stretch text-[#ffa18c] text-[13px] font-medium font-['Inter'] leading-none">
                          {/* Add percentage changes here if needed */}
                        </div>
                      </div>
                    </div>
                  )
                )}
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
