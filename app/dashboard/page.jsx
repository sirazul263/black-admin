import protectedPage from "@/helpers/auth";
import Layout from "../components/Layout";
import DashboardMain from "./components/DashboardMain";
import { cookies } from "next/headers";

export default function Dashboard() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"dashboard"}>
        <DashboardMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
