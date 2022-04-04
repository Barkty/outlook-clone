import styles from './Dashboard.module.css';
import TopNav, { Icons, SecondNav } from '../../components/loggedInNavbar/TopNav';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
            <Icons/>
            <SecondNav/>
        </div>
    )
}

export default Dashboard;