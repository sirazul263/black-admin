import Layout from "../components/Layout";
import OrderMain from "./components/OrderMain";

export default function Orders() {
  return (
    <div>
      <Layout page={"orders"}>
        <OrderMain />
      </Layout>
    </div>
  );
}
