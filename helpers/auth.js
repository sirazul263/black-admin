import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function protectedPage() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  if (!accessToken) {
    return redirect("/");
  }
}
