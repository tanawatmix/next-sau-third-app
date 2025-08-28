"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Calcu from "../images/Ionic-Ionicons-Calculator-outline.512.png";

export default function CarInstallmentPage() {
  return (
    <div>
      <div className="max-w-2xl w-full mx-auto mt-5 mb-2  bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          {/* Placeholder for image */}
          <div className="flex justify-center mb-4">
            <Image src={Calcu} alt="Calculator" width={96} height={96} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            Car Installment Calculator
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            คำนวณ Car installment
          </p>
        </header>

        {/* Calculator Form */}
        <main>
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                ชื่อผู้คำนวณ
              </label>
              <input
                type="text"
                id="name"
                placeholder="เช่น สมศักดิ์"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Car Price Input */}
            <div>
              <label
                htmlFor="carPrice"
                className="block text-gray-700 font-semibold mb-2"
              >
                ราคารถ
              </label>
              <input
                type="number"
                id="carPrice"
                placeholder="เช่น 800000"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Interest Rate Input */}
            <div>
              <label
                htmlFor="interestRate"
                className="block text-gray-700 font-semibold mb-2"
              >
                ดอกเบี้ยต่อปี (%)
              </label>
              <input
                type="number"
                id="interestRate"
                placeholder="เช่น 2.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Down Payment Radio Buttons */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                เงินดาวน์ (%)
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value="15"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                  />
                  <span className="ml-2 text-gray-700">15%</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value="20"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                  />
                  <span className="ml-2 text-gray-700">20%</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value="25"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                  />
                  <span className="ml-2 text-gray-700">25%</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value="30"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                  />
                  <span className="ml-2 text-gray-700">30%</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value="35"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                  />
                  <span className="ml-2 text-gray-700">35%</span>
                </label>
              </div>
            </div>

            {/* Loan Duration Dropdown */}
            <div>
              <label
                htmlFor="loanDuration"
                className="block text-gray-700 font-semibold mb-2"
              >
                จำนวนเดือนที่ผ่อน
              </label>
              <select
                id="loanDuration"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
              >
                <option value="12">12 เดือน</option>
                <option value="18">18 เดือน</option>
                <option value="24">24 เดือน</option>
                {/* สามารถเพิ่มตัวเลือกอื่นๆ ได้ตามต้องการ */}
              </select>
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
              <button
                id="calculateBtn"
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              >
                คำนวณ
              </button>
              <button
                id="clearBtn"
                className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200"
              >
                ล้างข้อมูล
              </button>
            </div>
          </div>

          {/* Result Display Section */}
          <div
            id="resultBox"
            className="mt-8 p-6 bg-blue-100 rounded-2xl text-center shadow-inner"
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
