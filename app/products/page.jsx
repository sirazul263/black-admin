import Layout from "../components/Layout";
import ProductMain from "./components/ProductMain";

export default function Products() {
  return (
    <div>
      <Layout page={"products"}>
        <ProductMain />
      </Layout>
    </div>
  );
}
