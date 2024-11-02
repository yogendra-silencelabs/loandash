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
        // Make sure the data structure matches your expectations
        setTotalRequests(data.data.totalRequests);
        setApprovedRequests(data.data.totalApproved);
        setRejectedRequests(data.data.totalRejected);
        setPendingRequests(data.data.totalPending);
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
      const formattedRequests = data.data.map((request: any) => ({
        name: request.userId, // Map userId to name
        privacyLevel: request.consentLevel, // Map consentLevel to privacyLevel
        accounts: "N/A", // Placeholder for accounts (adjust as needed)
        privacyColor: "#ffffff", // Default color (adjust based on consentLevel if needed)
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
        {/* ... */}
      </div>

      {/* Dashboard Title Section */}
      <div className="self-stretch h-[404px] py-12 justify-start items-start inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          {/* ... */}

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
