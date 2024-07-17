import Login from "@/components/Login/Login";
import SideMenu from "../components/SideMenu/SideMenu";
import Dashboard from "./dashboard/index";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <main className={scss.main}>
        {session && (
          <>
      
          </>
        )}
        <Dashboard />
        {!session && 

        <Login />
}
      </main>
    </>
  );
};

export default Home;
