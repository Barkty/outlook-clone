import styles from './Navbar.module.css'
import { CgMenuGridR } from 'react-icons/cg'
import { VscSearch } from 'react-icons/vsc'
import { BsCameraVideo, BsSkype } from 'react-icons/bs'
import { AiOutlineQrcode, AiOutlineQuestion } from 'react-icons/ai'
import { SiMicrosoftonenote } from 'react-icons/si'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { HiOutlineCog, HiSpeakerphone } from 'react-icons/hi'

const TopNav = () => {

    return (
        <div className={styles.nav}>
            <div className={styles.nav__icon}>
                <CgMenuGridR/>
            </div>
            <p className={styles.nav__title}>Outlook</p>
            <div className={styles.nav__searchbar}>
                <VscSearch className={styles.nav__searchbar__icon}/>
                <input type='search' placeholder='Search'/>
            </div>
            <div className={styles.nav__icons}>
                <div className={styles.nav__icons__meet}>
                    <BsCameraVideo/>
                    Meet now
                </div>
                <div className={styles.nav__icon}>
                    <AiOutlineQrcode/>
                </div>
                <div className={styles.nav__icon}>
                    <BsSkype/>
                </div>
                <div className={styles.nav__icon}>
                    <SiMicrosoftonenote/>
                </div>
                <div className={styles.nav__icon}>
                    <RiCalendarCheckLine/>
                </div>
                <div className={styles.nav__icon}>
                    <HiOutlineCog/>
                </div>
                <div className={styles.nav__icon}>
                    <AiOutlineQuestion/>
                </div>
                <div className={styles.nav__icon}>
                    <HiSpeakerphone/>
                </div>
                <div className={styles.nav__user}>
                    GK
                </div>
            </div>
        </div>
    )
}
export default TopNav;