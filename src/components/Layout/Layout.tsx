import React from "react";
import SideMenu from "@/components/SideMenu/SideMenu";
import scss from "./Layout.module.scss";
// import { useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../Footer";

const Layout = (props: any) => {
  // const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        {/* {session && <SideMenu />}
         */}
         <SideMenu/>
        {props.children}
        <Footer/>
      </main>
    </>
  );
};

export default Layout;
