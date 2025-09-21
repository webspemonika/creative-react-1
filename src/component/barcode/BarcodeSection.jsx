import React from "react";
import Barcode from "react-barcode";

export default function BarcodeSection() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">আমার ওয়েবসাইটের Barcode</h1>

      <Barcode
        value="https://www.example.com"   // এখানে তোমার ওয়েবসাইটের URL দাও
        format="CODE128"                  // Barcode type (CODE128, EAN13, UPC ইত্যাদি)
        width={2}                          // প্রতিটি লাইনের প্রস্থ
        height={100}                        // Barcode এর উচ্চতা
        displayValue={true}                 // নিচে টেক্সট দেখাবে কি না
        background="#ffffff"                // ব্যাকগ্রাউন্ড কালার
        lineColor="#000000"                 // Barcode লাইনের কালার
      />

      <p className="mt-4 text-gray-700">
        এই Barcode স্ক্যান করলে তোমার ওয়েবসাইটের লিংক দেখা যাবে।
      </p>
    </div>
  );
}
