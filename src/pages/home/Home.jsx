import Download from "../../components/download/Download";
import Header from "../../components/header/Header";
import Interface from "../../components/interface/Interface";
import Layout from "../../components/layout/Layout";
import Security from "../../components/security/Security";

const Home = () => {

    return (
        <Layout>
            <Header/>
            <Download/>
            <Interface/>
            <Security/>
        </Layout>
    )
}
export default Home;