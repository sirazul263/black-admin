import Layout from "../components/Layout";
import DashboardMain from "./components/DashboardMain";

export default function Dashboard() {
  return (
    <div>
      <Layout page={"dashboard"}>
        <DashboardMain />
      </Layout>
    </div>
  );
}
