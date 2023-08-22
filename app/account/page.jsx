import Layout from "../components/Layout";
import AccountMain from "./components/AccountMain";

export default function Account() {
  return (
    <div>
      <Layout page={"account"}>
        <AccountMain />
      </Layout>
    </div>
  );
}
