import styles from './Dashboard.module.css';
import TopNav, { EmailFolder, Icons, SecondNav } from '../../components/loggedInNavbar/TopNav';
import Mail, { Email } from '../../components/loggedInNavbar/Mails';

const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <TopNav/>
            <Icons/>
            <SecondNav/>
            <EmailFolder/>
            <Mail/>
            <Email/>
        </div>
    )
}

export default Dashboard;