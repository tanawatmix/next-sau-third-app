"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Calcu from "../images/Ionic-Ionicons-Calculator-outline.512.png";

export default function CarInstallmentPage() {
  const [name, setName] = useState("");
  const [carPrice, setCarPrice] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [downPayment, setDownPayment] = useState<number>(15);
  const [loanDuration, setLoanDuration] = useState<number>(12);
  const [result, setResult] = useState<string>("ผลลัพธ์จะแสดงที่นี่");

  const handleCalculate = () => {
    if (
      !name ||
      carPrice === "" ||
      interestRate === "" ||
      !downPayment ||
      !loanDuration
    ) {
      setResult("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // เงินดาวน์
    const downPaymentAmount = (carPrice as number) * (downPayment / 100);
    // ยอดจัด = ค่ารถ - เงินดาวน์
    const loanAmount = (carPrice as number) - downPaymentAmount;
    // ดอกเบี้ยทั้งหมด = (ยอดจัด * อัตราดอกเบี้ย / 100) * (เดือน / 12)
    const totalInterest =
      loanAmount * ((interestRate as number) / 100) * (loanDuration / 12);
    // ค่าผ่อนต่อเดือน = (ยอดจัด + ดอกเบี้ยทั้งหมด) / จำนวนเดือนผ่อน
    const monthlyPay = (loanAmount + totalInterest) / loanDuration;

    setResult(
      `ชื่อผู้คำนวณ: ${name}
ราคารถ: ${carPrice?.toLocaleString()} บาท
เงินดาวน์: ${downPayment}% (${downPaymentAmount.toLocaleString()} บาท)
ยอดจัด: ${loanAmount.toLocaleString()} บาท
ดอกเบี้ยทั้งหมด: ${totalInterest.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })} บาท
จำนวนเดือนที่ผ่อน: ${loanDuration} เดือน
ค่าผ่อนต่อเดือน: ${monthlyPay.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })} บาท`
    );
  };

  const handleClear = () => {
    setName("");
    setCarPrice("");
    setInterestRate("");
    setDownPayment(15);
    setLoanDuration(12);
    setResult("ผลลัพธ์จะแสดงที่นี่");
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={carPrice === "" ? "" : carPrice}
                onChange={(e) =>
                  setCarPrice(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
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
                value={interestRate === "" ? "" : interestRate}
                onChange={(e) =>
                  setInterestRate(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
              />
            </div>

            {/* Down Payment Radio Buttons */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                เงินดาวน์ (%)
              </label>
              <div className="flex flex-wrap gap-4">
                {[15, 20, 25, 30, 35].map((percent) => (
                  <label key={percent} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="downPayment"
                      value={percent}
                      checked={downPayment === percent}
                      onChange={() => setDownPayment(percent)}
                      className="form-radio text-blue-500 focus:ring-blue-400"
                    />
                    <span className="ml-2 text-gray-700">{percent}%</span>
                  </label>
                ))}
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
                value={loanDuration}
                onChange={(e) => setLoanDuration(Number(e.target.value))}
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
                type="button"
                className="w-full bg-blue-500 cursor-pointer text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                onClick={handleCalculate}
              >
                คำนวณ
              </button>
              <button
                id="clearBtn"
                type="button"
                className="w-full bg-gray-200 cursor-pointer text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200"
                onClick={handleClear}
              >
                ล้างข้อมูล
              </button>
            </div>
          </div>

          {/* Result Display Section */}
          <div
            id="resultBox"
            className="mt-8 p-6 bg-blue-100 rounded-2xl text-center shadow-inner whitespace-pre-line"
          >
            <p className="text-lg text-gray-600">{result}</p>
          </div>
        </main>
        <Link
          href="./"
          className="group block p-2 mt-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-blue-600 transition-colors">
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
