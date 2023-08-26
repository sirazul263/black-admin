import protectedPage from "@/helpers/auth";
import Layout from "../components/Layout";
import CategoryMain from "./components/CategoryMain";
import { cookies } from "next/headers";
import { getCategories } from "@/services/categoryServices";

export default async function Categories() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");

  return (
    <div>
      <Layout page={"categories"}>
        <CategoryMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
