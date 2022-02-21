import styles from './Security.module.css';
import { BsMicrosoft } from 'react-icons/bs'
import { VscShield } from 'react-icons/vsc'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { AiFillFolder } from 'react-icons/ai';
import { GrOnedrive, GrDiamond } from 'react-icons/gr';
//import { IoDiamondOutline } from 'react-icons/io'

const Security = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__top}></div>
            <div className={styles.wrapper__bottom}>
                <div className={styles.wrapper__bottom__text}>
                    <h1>Backed by enterprise-grade security</h1>
                    <p>Outlook works around clock to help protect your privacy and keep your inbox free of clutter.</p>
                </div>
                <div className={styles.wrapper__bottom__con}>
                    <div className={styles.wrapper__bottom__icon}>
                        <ul className={styles.wrapper__bottom__icon__list}>
                            <li>
                                <BsMicrosoft className={styles.wrapper__bottom__icon__list__icons}/>
                            </li>
                            <li>
                                <VscShield className={styles.wrapper__bottom__icon__list__icons}/>
                            </li>
                            <li>
                                <MdOutlineAttachEmail className={styles.wrapper__bottom__icon__list__icons}/>
                            </li>
                            <li>
                                <AiFillFolder className={styles.wrapper__bottom__icon__list__icons}/>
                                <GrOnedrive className={styles.wrapper__bottom__icon__list__icon1}/>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.wrapper__bottom__iconText}>
                        <ul className={styles.wrapper__bottom__iconText__list}>
                            <li>Protection delivered by the same tools Microsoft uses for business customers.</li>
                            <li>Data encryption in your mailbox and after mail is sent.</li>
                            <li>Automatic deactivation of unsafe links that contain phishing scams, viruses, and malwares. 
                                <span><GrDiamond className={styles.wrapper__bottom__iconText__list__icon}/>Premium</span>
                            </li>
                            <li>Ransomeware detection and recovery for your files in OneDrive
                                <span><GrDiamond className={styles.wrapper__bottom__iconText__list__icon}/>Premium</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security;