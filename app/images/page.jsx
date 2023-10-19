import { cookies } from "next/headers";

import protectedPage from "@/helpers/auth";
import Layout from "@/app/components/Layout";

export default function Images() {
  protectedPage();
  //Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  return (
    <div>
      <Layout page={"images"}></Layout>
    </div>
  );
}
