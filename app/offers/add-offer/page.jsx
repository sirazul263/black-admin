import { cookies } from "next/headers";

import protectedPage from "@/helpers/auth";
import Layout from "@/app/components/Layout";
import AddOfferMain from "./components/AddOfferMain";

export default function AddOffers() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"offers"}>
        <AddOfferMain token={accessToken.value} />
      </Layout>
    </div>
  );
}
