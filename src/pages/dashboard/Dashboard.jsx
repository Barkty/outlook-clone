import styles from './Dashboard.module.css';
import TopNav from '../../components/loggedInNavbar/TopNav';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
        </div>
    )
}

export default Dashboard;