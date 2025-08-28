"use client";

import React, { use } from "react";
import Image from "next/image";
import BMR from "../images/BMR.png";
import Link from "next/link";

export default function BMRpage() {
  return (
    <div>
      <div className="max-w-xl w-full mx-auto mt-5 mb-2  bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          {/* Placeholder for image */}
          <div className="flex justify-center mb-4">
            <Image src={BMR} alt="Calculator" width={96} height={96} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            BMR Calculator
          </h1>
          <p className="text-lg text-gray-500 font-medium">คำนวณ BMR</p>
        </header>

        {/* Calculator Form */}
        <main>
          <div className="space-y-6">
            {/* Weight Input */}
            <div>
              <label
                htmlFor="weight"
                className="block text-gray-700 font-semibold mb-2"
              >
                น้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="weight"
                placeholder="เช่น 65"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200"
              />
            </div>

            {/* Height Input */}
            <div>
              <label
                htmlFor="height"
                className="block text-gray-700 font-semibold mb-2"
              >
                ส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="height"
                placeholder="เช่น 170"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200"
              />
            </div>

            {/* Age Input */}
            <div>
              <label
                htmlFor="age"
                className="block text-gray-700 font-semibold mb-2"
              >
                อายุ
              </label>
              <input
                type="number"
                id="age"
                placeholder="เช่น 25"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200"
              />
            </div>

            {/* Gender Radio Buttons */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                เพศ
              </label>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-emerald-500 focus:ring-emerald-400"
                  />
                  <span className="ml-2 text-gray-700">ชาย</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-emerald-500 focus:ring-emerald-400"
                  />
                  <span className="ml-2 text-gray-700">หญิง</span>
                </label>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
              <button
                id="calculateBtn"
                className="w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-200"
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
            className="mt-8 p-6 bg-emerald-100 rounded-2xl text-center shadow-inner"
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
