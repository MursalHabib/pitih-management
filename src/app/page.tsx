"use client";

import Image from "next/image";
import { Inter, Rubik } from "@next/font/google";
import styles from "./page.module.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export default function Home() {
  return (
    <main className="h-full m-8">
      <div className="flex justify-between sm:px-2 flex-col md:flex-row gap-4">
        <div className="flex-1 ">
          <div className="h-52 bg-gradient-to-r from-cyan-500 to-blue-700 p-8 rounded-3xl transition ease-in-out hover:-translate-y-1 hover:scale-105">
            <h1
              className={`${rubik.variable} font-sans text-lg font-light text-white`}
            >
              Uang Sekarang
            </h1>
            <h1
              className={`${rubik.variable} font-sans text-xl font-bold text-white`}
            >
              Rp. 10.000.000
            </h1>
          </div>
          <div className="flex justify-between my-6 gap-4">
            <button
              className={`${rubik.variable} font-sans flex-1 border border-blue-700 border-2 hover:bg-blue-700 hover:text-white bg-white rounded-full border-blue-700 py-3 text-blue-700`}
            >
              Uang Masuk
            </button>
            <button
              className={`${rubik.variable} font-sans flex-1 border border-gray-700 border-2 hover:bg-gray-700 hover:text-white bg-white rounded-full border-gray-700 py-3 text-gray-700`}
            >
              Uang Keluar
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-start">
            <h1
              className={`${rubik.variable} font-sans text-xl font-bold mb-4 flex-1`}
            >
              Histori
            </h1>
          </div>
          <div>
            <div className="bg-gray-100 p-2 rounded-xl mb-2">
              <div className="flex justify-between">
                <div>
                  <p
                    className={`${rubik.variable} font-sans text-sm font-semibold`}
                  >
                    Nama pemasukan
                  </p>
                  <p className={`${rubik.variable} font-sans text-sm`}>
                    Tanggal
                  </p>
                </div>
                <div
                  className={`${rubik.variable} font-sans text-md font-black text-green-700`}
                >
                  + 5.000.000
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-2 rounded-xl mb-2">
              <div className="flex justify-between">
                <div>
                  <p
                    className={`${rubik.variable} font-sans text-sm font-semibold`}
                  >
                    Nama pemasukan
                  </p>
                  <p className={`${rubik.variable} font-sans text-sm`}>
                    Tanggal
                  </p>
                </div>
                <div
                  className={`${rubik.variable} font-sans text-md font-black text-green-700`}
                >
                  10.000.000
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-2 rounded-xl mb-2">
              <div className="flex justify-between">
                <div>
                  <p
                    className={`${rubik.variable} font-sans text-sm font-semibold`}
                  >
                    Nama pengeluaran
                  </p>
                  <p className={`${rubik.variable} font-sans text-sm`}>
                    Tanggal
                  </p>
                </div>
                <div
                  className={`${rubik.variable} font-sans text-md font-black text-red-700`}
                >
                  - 1.000.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
