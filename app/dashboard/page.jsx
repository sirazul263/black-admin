import protectedPage from "@/helpers/auth";
import Layout from "../components/Layout";
import DashboardMain from "./components/DashboardMain";

export default function Dashboard() {
  protectedPage();
  return (
    <div>
      <Layout page={"dashboard"}>
        <DashboardMain />
      </Layout>
    </div>
  );
}
