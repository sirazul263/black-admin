import { cookies } from "next/headers";
import LoginMain from "./components/LoginMain";
import { redirect } from "next/navigation";
export default function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("auth_token");
  if (accessToken) {
    redirect("/dashboard");
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-clr-primary "
      style={{ height: "100vh" }}
    >
      <LoginMain />
    </div>
  );
}
