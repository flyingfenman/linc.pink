import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "linc.pink | Business Directory",
  description: "Your gateway to multiple businesses in one convenient location",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .min-h-screen {
            min-height: 100vh;
          }
          
          .flex {
            display: flex;
          }
          
          .flex-col {
            flex-direction: column;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-center {
            justify-content: center;
          }
          
          .p-4 {
            padding: 1rem;
          }
          
          .w-full {
            width: 100%;
          }
          
          .max-w-md {
            max-width: 28rem;
          }
          
          .mx-auto {
            margin-left: auto;
            margin-right: auto;
          }
          
          .py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .mb-10 {
            margin-bottom: 2.5rem;
          }
          
          .w-24 {
            width: 6rem;
          }
          
          .h-24 {
            height: 6rem;
          }
          
          .bg-white {
            background-color: #ffffff;
          }
          
          .rounded-full {
            border-radius: 9999px;
          }
          
          .shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .mb-4 {
            margin-bottom: 1rem;
          }
          
          .text-3xl {
            font-size: 1.875rem;
          }
          
          .font-bold {
            font-weight: 700;
          }
          
          .text-center {
            text-align: center;
          }
          
          .mt-2 {
            margin-top: 0.5rem;
          }
          
          .max-w-xs {
            max-width: 20rem;
          }
          
          .space-y-5 > * + * {
            margin-top: 1.25rem;
          }
          
          .block {
            display: block;
          }
          
          .no-underline {
            text-decoration: none;
          }
          
          .relative {
            position: relative;
          }
          
          .overflow-hidden {
            overflow: hidden;
          }
          
          .rounded-2xl {
            border-radius: 1rem;
          }
          
          .transition-all {
            transition-property: all;
          }
          
          .duration-300 {
            transition-duration: 300ms;
          }
          
          .absolute {
            position: absolute;
          }
          
          .inset-0 {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          
          .opacity-10 {
            opacity: 0.1;
          }
          
          .p-6 {
            padding: 1.5rem;
          }
          
          .w-16 {
            width: 4rem;
          }
          
          .h-16 {
            height: 4rem;
          }
          
          .rounded-xl {
            border-radius: 0.75rem;
          }
          
          .shadow-md {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          .mr-4 {
            margin-right: 1rem;
          }
          
          .flex-shrink-0 {
            flex-shrink: 0;
          }
          
          .w-10 {
            width: 2.5rem;
          }
          
          .h-10 {
            height: 2.5rem;
          }
          
          .object-contain {
            object-fit: contain;
          }
          
          .flex-1 {
            flex: 1 1 0%;
          }
          
          .text-xl {
            font-size: 1.25rem;
          }
          
          .opacity-80 {
            opacity: 0.8;
          }
          
          .text-sm {
            font-size: 0.875rem;
          }
          
          .mt-1 {
            margin-top: 0.25rem;
          }
          
          .opacity-70 {
            opacity: 0.7;
          }
          
          .h-6 {
            height: 1.5rem;
          }
          
          .w-6 {
            width: 1.5rem;
          }
          
          .mt-8 {
            margin-top: 2rem;
          }
          
          .mb-4 {
            margin-bottom: 1rem;
          }
          
          .text-white {
            color: #ffffff;
          }
          
          .bg-gradient-purple {
            background: linear-gradient(135deg, #8b5cf6, #d946ef, #ec4899);
          }
          
          .bg-gradient-green {
            background: linear-gradient(135deg, #22c55e, #064e3b, #000000);
          }
          
          .bg-gradient-blue {
            background: linear-gradient(135deg, #6366f1, #a855f7, #ffffff);
          }
          
          .bg-gradient-gray {
            background: linear-gradient(135deg, #111827, #374151, #111827);
          }
          
          .bg-gradient-rose {
            background: linear-gradient(135deg, #fb7185, #f9a8d4, #fecdd3);
          }
          
          .bg-gray-800 {
            background-color: #1f2937;
          }
          
          .text-rose-900 {
            color: #9f1239;
          }
          
          .space-y-3 > * + * {
            margin-top: 0.75rem;
          }
          
          .w-28 {
            width: 7rem;
          }
          
          .h-28 {
            height: 7rem;
          }
          
          .p-1\.5 {
            padding: 0.375rem;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .text-opacity-80 {
            opacity: 0.8;
          }
          
          .text-opacity-70 {
            opacity: 0.7;
          }
          
          .h-14 {
            height: 3.5rem;
          }
          
          .justify-between {
            justify-content: space-between;
          }
          
          .text-base {
            font-size: 1rem;
          }
          
          .font-medium {
            font-weight: 500;
          }
          
          .rounded-xl {
            border-radius: 0.75rem;
          }
          
          .mr-3 {
            margin-right: 0.75rem;
          }
          
          .h-5 {
            height: 1.25rem;
          }
          
          .w-5 {
            width: 1.25rem;
          }
          
          .h-4 {
            height: 1rem;
          }
          
          .w-4 {
            width: 1rem;
          }
          
          .mr-2 {
            margin-right: 0.5rem;
          }
          
          .text-opacity-60 {
            opacity: 0.6;
          }
          
          .bg-rose-500 {
            background-color: #f43f5e;
          }
          
          .bg-pink-500 {
            background-color: #ec4899;
          }
          
          .bg-fuchsia-500 {
            background-color: #d946ef;
          }
          
          .bg-purple-500 {
            background-color: #a855f7;
          }
          
          .bg-emerald-500 {
            background-color: #10b981;
          }
          
          .bg-blue-500 {
            background-color: #3b82f6;
          }
          
          .bg-indigo-500 {
            background-color: #6366f1;
          }
          
          .bg-indigo-600 {
            background-color: #4f46e5;
          }
          
          .bg-purple-600 {
            background-color: #9333ea;
          }
          
          .bg-violet-600 {
            background-color: #7c3aed;
          }
          
          .bg-green-600 {
            background-color: #16a34a;
          }
          
          .bg-green-700 {
            background-color: #15803d;
          }
          
          .bg-green-800 {
            background-color: #166534;
          }
          
          .bg-gray-800 {
            background-color: #1f2937;
          }
          
          .hover\\:scale-\\[1\\.02\\]:hover {
            transform: scale(1.02);
          }
          
          .hover\\:shadow-lg:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .active\\:scale-\\[0\\.98\\]:active {
            transform: scale(0.98);
          }
          
          .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .mb-6 {
            margin-bottom: 1.5rem;
          }
          
          .border {
            border-width: 1px;
          }
          
          .border-white\\/20 {
            border-color: rgba(255, 255, 255, 0.2);
          }
          
          .hover\\:bg-white\\/10:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          .text-gray-700 {
            color: #374151;
          }
          
          .border-gray-300 {
            border-color: #d1d5db;
          }
          
          .hover\\:bg-gray-100:hover {
            background-color: #f3f4f6;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

