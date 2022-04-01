import styles from './Dashboard.module.css';
import TopNav, { Icons } from '../../components/loggedInNavbar/TopNav';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
            <Icons/>
        </div>
    )
}

export default Dashboard;