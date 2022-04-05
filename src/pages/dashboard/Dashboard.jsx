import styles from './Dashboard.module.css';
import TopNav, { EmailFolder, Icons, SecondNav } from '../../components/loggedInNavbar/TopNav';
import Mail from '../../components/loggedInNavbar/Mails';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
            <Icons/>
            <SecondNav/>
            <EmailFolder/>
            <Mail/>
        </div>
    )
}

export default Dashboard;