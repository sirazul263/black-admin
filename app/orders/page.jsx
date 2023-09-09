import { cookies } from "next/headers";
import Layout from "../components/Layout";
import OrderMain from "./components/OrderMain";
import protectedPage from "@/helpers/auth";

export default function Orders() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"orders"}>
        <OrderMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
