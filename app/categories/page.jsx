import Layout from "../components/Layout";
import CategoryMain from "./components/CategoryMain";

export default function Categories() {
  return (
    <div>
      <Layout page={"categories"}>
        <CategoryMain />
      </Layout>
    </div>
  );
}
