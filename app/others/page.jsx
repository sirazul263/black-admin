import { cookies } from "next/headers";
import Layout from "../components/Layout";
import protectedPage from "@/helpers/auth";
import OthersMain from "./components/OthersMain";

export default function Others() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"others"}>
        <OthersMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
