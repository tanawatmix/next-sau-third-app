import React from "react";
import Image from "next/image";
import Link from "next/link";
import BMI from "./images/BMI.png";
import BMR from "./images/BMR.png";
import Calcu from "./images/Ionic-Ionicons-Calculator-outline.512.png";
import Money from "./images/Microsoft-Fluentui-Emoji-3d-Money-Mouth-Face-3d.512.png";
import logo from "./images/Iconcreme-Halloween-Cat.ico";
import { Yesteryear } from "next/font/google";

export default function Home() {
  return (
    <div>
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-10 md:mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="Calculator Icon" className="w-25 h-25" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-600">
            Calculator Variety
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            เครื่องมือคำนวณ by DTI-SAU
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Money Share */}
          <Link
            href="./moneyshare"
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <Image src={Money} alt="Money Icon" className="w-16 h-16" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-cyan-600 transition-colors">
              คำนวณหารค่าใช้จ่าย (Money Share)
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
              เครื่องมือช่วยหารค่าใช้จ่ายกับเพื่อนๆ
            </p>
          </Link>

          {/* Card 2: BMI Calculator */}
          <Link
            href="./bmi"
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <Image src={BMI} alt="Calculator Icon" className="w-16 h-16" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-teal-600 transition-colors">
              คำนวณค่า BMI
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
              คำนวณดัชนีมวลกายเพื่อสุขภาพที่ดี
            </p>
          </Link>

          {/* Card 3: BMR Calculator */}
          <Link
            href="./bmr"
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                <Image src={BMR} alt="Calculator Icon" className="w-16 h-16" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-sky-600 transition-colors">
              คำนวณค่า BMR
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
              อัตราการเผาผลาญพลังงานของร่างกาย
            </p>
          </Link>

          {/* Card 4: Car Installment */}
          <Link
            href="./carinstallment"
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <Image
                  src={Calcu}
                  alt="Calculator Icon"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-700 group-hover:text-indigo-600 transition-colors">
              คำนวณผ่อนรถ
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
              วางแผนการเงินสำหรับการผ่อนชำระรถ
            </p>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-5">
        <div className="container mx-auto text-center">
          Created by DTI-SAU 
          <br />
          2025 SAU. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
