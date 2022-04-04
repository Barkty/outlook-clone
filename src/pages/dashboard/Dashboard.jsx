import styles from './Dashboard.module.css';
import TopNav, { EmailFolder, Icons, SecondNav } from '../../components/loggedInNavbar/TopNav';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
            <Icons/>
            <SecondNav/>
            <EmailFolder/>
        </div>
    )
}

export default Dashboard;