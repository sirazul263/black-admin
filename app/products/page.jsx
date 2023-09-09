import protectedPage from "@/helpers/auth";
import Layout from "../components/Layout";
import ProductMain from "./components/ProductMain";
import { cookies } from "next/headers";

export default function Products() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"products"}>
        <ProductMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
