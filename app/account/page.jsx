import { cookies } from "next/headers";
import Layout from "../components/Layout";
import AccountMain from "./components/AccountMain";
import protectedPage from "@/helpers/auth";

export default function Account() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"account"}>
        <AccountMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
