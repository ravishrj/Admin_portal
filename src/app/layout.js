//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./clientLayout";
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
        <head>
        <link href="/style.css" rel="stylesheet" />
        <link href="/profile.css" rel="stylesheet" />
      </head>
      <body
       
      >
        <ToastContainer/>
        <ClientLayout> {children}</ClientLayout>
       
      </body>
    </html>
  );
}
