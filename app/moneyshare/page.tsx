"use client";

import React from "react";
import Image from "next/image";
import Money from "../images/Microsoft-Fluentui-Emoji-3d-Money-Mouth-Face-3d.512.png";
import Link from "next/link";

export default function MoneySharepage() {
  return (
    <div>
      <div className="max-w-3xl w-full mt-5 mb-2 mx-auto bg-white transition-all duration-200 rounded-3xl shadow-2xl overflow-hidden p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          {/* Placeholder for image */}
          <div className="flex justify-center mb-4">
            <Image src={Money} alt="Money" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            Money Share Calculator
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            คำนวณเงินที่ต้องหาร
          </p>
        </header>

        {/* Calculator Form */}
        <main>
          <div className="space-y-6">
            {/* Total Amount Input */}
            <div>
              <label
                htmlFor="totalAmount"
                className="block text-gray-700 font-semibold mb-2"
              >
                ป้อนจำนวนเงิน
              </label>
              <input
                type="number"
                id="totalAmount"
                placeholder="เช่น 1500"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
              />
            </div>

            {/* Number of People Input */}
            <div>
              <label
                htmlFor="numberOfPeople"
                className="block text-gray-700 font-semibold mb-2"
              >
                ป้อนจำนวนคน
              </label>
              <input
                type="number"
                id="numberOfPeople"
                placeholder="เช่น 3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
              <button
                id="calculateBtn"
                className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-teal-600 hover:outline-none focus:ring-4 hover:ring-teal-300 transition-all duration-200"
              >
                คำนวณ
              </button>
              <button
                id="clearBtn"
                className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-300 hover:outline-none hover:ring-4 hover:ring-gray-300 transition-all duration-200"
              >
                ล้างข้อมูล
              </button>
            </div>
          </div>

          {/* Result Display Section */}
          <div
            id="resultBox"
            className="mt-8 p-6 bg-teal-100 rounded-2xl text-center shadow-inner"
          >
            <p className="text-lg text-gray-600">ผลลัพธ์จะแสดงที่นี่</p>
          </div>
        </main>
        <Link
          href="./"
          className="group block p-2 mt-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-teal-600 transition-colors">
            กลับ
          </h2>
        </Link>
      </div>
      <div className="container mx-auto text-center">
        Created by DTI-SAU
        <br />
        2025 SAU. All rights reserved.
      </div>
    </div>
  );
}
