import { cookies } from "next/headers";
import Layout from "../components/Layout";
import OfferMain from "./components/OfferMain";
import protectedPage from "@/helpers/auth";

export default function Offers() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"offers"}>
        <OfferMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
