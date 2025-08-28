"use client";

import React, { useState } from "react";
import Image from "next/image";
import BMI from "../images/BMI.png";
import Link from "next/link";

export default function BMIpage() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<string>("ผลลัพธ์จะแสดงที่นี่");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) {
      setResult("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }
    const hMeter = h / 100;
    const bmi = w / (hMeter * hMeter);
    let status = "";
    if (bmi < 18.5) status = "น้ำหนักน้อย";
    else if (bmi < 23) status = "น้ำหนักปกติ";
    else if (bmi < 25) status = "น้ำหนักเกิน";
    else if (bmi < 30) status = "อ้วน";
    else status = "อ้วนมาก";
    setResult(`BMI: ${bmi.toFixed(2)} (${status})`);
  };

  const clearForm = () => {
    setWeight("");
    setHeight("");
    setResult("ผลลัพธ์จะแสดงที่นี่");
  };

  return (
    <div>
      {/* Card Container */}
      <div className="max-w-xl w-full mx-auto mt-5 mb-2  bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          {/* Placeholder for image */}
          <div className="flex justify-center mb-4">
            <Image src={BMI} alt="Calculator" width={96} height={96} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            BMI Calculator
          </h1>
          <p className="text-lg text-gray-500 font-medium">คำนวณดัชนีมวลกาย</p>
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
                ป้อนน้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="weight"
                placeholder="เช่น 65"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
              />
            </div>

            {/* Height Input */}
            <div>
              <label
                htmlFor="height"
                className="block text-gray-700 font-semibold mb-2"
              >
                ป้อนส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="height"
                placeholder="เช่น 170"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
              <button
                id="calculateBtn"
                type="button"
                onClick={calculateBMI}
                className="w-full bg-purple-500 cursor-pointer text-white font-bold py-3 px-4 rounded-xl hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-200"
              >
                คำนวณ
              </button>
              <button
                id="clearBtn"
                type="button"
                onClick={clearForm}
                className="w-full bg-gray-200 cursor-pointer text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200"
              >
                ล้างข้อมูล
              </button>
            </div>
          </div>

          {/* Result Display Section */}
          <div
            id="resultBox"
            className="mt-8 p-6 bg-purple-100 rounded-2xl text-center shadow-inner"
          >
            <p className="text-lg text-gray-600">{result}</p>
          </div>
        </main>
        <Link
          href="./"
          className="group block p-2 mt-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-purple-600 transition-colors">
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
