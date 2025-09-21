import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrCodeSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-4">আমার ওয়েবসাইটের QR Code</h1>

      <QRCodeCanvas
        value="https://www.example.com"   // এখানে তোমার ওয়েবসাইটের লিংক দাও
        size={200}                        // QR code এর সাইজ (px)
                       // QR কালার
        level="H"                          // Error correction level (L,M,Q,H)
        includeMargin={true}               // বাইরের মার্জিন যোগ করতে চাইলে
      />

      <p className="mt-4 text-gray-100">
        মোবাইল দিয়ে এই কোড স্ক্যান করলেই সরাসরি সাইটে যাবে।
      </p>
    </div>
  );
}
