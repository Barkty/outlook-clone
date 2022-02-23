import Download from "../../components/download/Download";
import Header from "../../components/header/Header";
import Interface from "../../components/interface/Interface";
import Layout from "../../components/layout/Layout";
import Products from "../../components/products/Products";
import Security from "../../components/security/Security";

const Home = () => {

    return (
        <Layout>
            <Header/>
            <Download/>
            <Interface/>
            <Security/>
            <Products/>
        </Layout>
    )
}
export default Home;