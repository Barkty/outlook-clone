import styles from './Navbar.module.css'
import { CgMenuGridR, CgUndo } from 'react-icons/cg'
import { VscSearch, VscMailRead, VscEdit, VscError } from 'react-icons/vsc'
import { BsCameraVideo, BsSkype, BsPeople, BsInbox, BsFolder } from 'react-icons/bs'
import { AiOutlineQrcode, AiOutlineQuestion } from 'react-icons/ai'
import { SiMicrosoftonenote, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftword, SiMinutemailer} from 'react-icons/si'
import { RiCalendarCheckLine, RiAttachment2, RiEditBoxLine, RiDeleteBin6Line, RiStickyNoteLine } from 'react-icons/ri'
import { HiOutlineCog, HiSpeakerphone, HiMail, HiOutlineArchive } from 'react-icons/hi'
import { IoCalendarOutline, IoMenuOutline, IoChevronForwardSharp, IoChevronDownSharp } from 'react-icons/io5'
import { ImCheckmark } from 'react-icons/im'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//import word from '../../images/word-icon.jpg'

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

export const Icons = () => {
    const [click, setClick] = useState('Mail')
    const handleClick = (menu) => {
        setClick(menu);
    }

    return (
        <div className={styles.icons}>
            <div className={styles.icons__wrap}>
                <div className={click === 'Mail' ? styles.icons__active : styles.icons__icon} onClick={()=>{handleClick('Mail')}}>
                    <HiMail/>
                </div>
                <div className={click === 'Calendar' ? styles.icons__active : styles.icons__icon} onClick={()=>{handleClick('Calendar')}}>
                    <IoCalendarOutline/>
                </div>
                <div className={click === 'People' ? styles.icons__active : styles.icons__icon} onClick={()=>{handleClick('People')}}>
                    <BsPeople/>
                </div>
                <div className={click === 'Attachment' ? styles.icons__active : styles.icons__icon} onClick={()=>{handleClick('Attachment')}}>
                    <RiAttachment2/>
                </div>
                <div className={click === 'To-do' ? styles.icons__active : styles.icons__icon} onClick={()=>{handleClick('To-do')}}>
                    <ImCheckmark/>
                </div>
                <div className={styles.icons__word}>
                    <SiMicrosoftword/>
                    {/* <img alt='Word' src={word}/> */}
                </div>
                <div className={styles.icons__excel}>
                    <SiMicrosoftexcel/>
                </div>
                <div className={styles.icons__power}>
                    <SiMicrosoftpowerpoint/>
                </div>
            </div>
        </div>
    )
}

export const SecondNav = () => {

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__actions}>
                <div className={styles.navigation__actions__menu}>
                    <IoMenuOutline className={styles.navigation__actions__menu__icon}/>
                </div>
                <div className={styles.navigation__actions__action}>
                    <button className={styles.navigation__actions__action__message}>
                        <RiEditBoxLine/>
                        New message
                    </button>
                </div>
                <div className={styles.navigation__actions__action}>
                    <button className={styles.navigation__actions__action__mark}>
                        <VscMailRead className={styles.navigation__actions__action__mark__icon}/>
                        Mark all as read
                    </button>
                </div>
                <div className={styles.navigation__actions__action}>
                    <button className={styles.navigation__actions__action__undo}>
                        <CgUndo className={styles.navigation__actions__action__undo__icon}/>
                        Undo
                    </button>
                </div>
            </div>
        </div>
    )
}

export const EmailFolder = () => {
    const [fav, setFav] = useState(false);
    const [folder, setFolder] = useState(false);
    const [group, setGroup] = useState(false);
    // const handleActive = (menu) => {
    //     setActive(menu);
    // }

    return (
        <div className={styles.folder}>
            <div className={styles.folder__favourites}>
                <div className={styles.folder__favourites__text}
                onClick={()=>setFav(!fav)}
                >
                    {fav ? <IoChevronDownSharp className={styles.folder__favourites__text__icon}/> : <IoChevronForwardSharp className={styles.folder__favourites__text__icon}/>}
                    Favourites
                </div>
                <div className={fav ? styles.folder__favourites__nav : styles.folder__favourites__fav}>
                    <div className={styles.folder__favourites__nav__text}>
                        <BsInbox className={styles.folder__favourites__text__icon}/>
                        Inbox
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <SiMinutemailer className={styles.folder__favourites__text__icon}/>
                        Sent items
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <VscEdit className={styles.folder__favourites__text__icon}/>
                        Drafts
                    </div>
                    <Link to='/'>
                        Add favourites
                    </Link>
                </div>
            </div>
            <div className={styles.folder__favourites}>
                <div className={styles.folder__favourites__text}
                onClick={()=>setFolder(!folder)}
                >
                    {folder ? <IoChevronDownSharp className={styles.folder__favourites__text__icon}/> : <IoChevronForwardSharp className={styles.folder__favourites__text__icon}/>}
                    Folders
                </div>
                <div className={folder ? styles.folder__favourites__nav : styles.folder__favourites__fav}>
                    <div className={styles.folder__favourites__nav__text}>
                        <BsInbox className={styles.folder__favourites__text__icon}/>
                        Inbox
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <VscError className={styles.folder__favourites__text__icon}/>
                        Junk Email
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <VscEdit className={styles.folder__favourites__text__icon}/>
                        Drafts
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <SiMinutemailer className={styles.folder__favourites__text__icon}/>
                        Sent items
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <RiDeleteBin6Line className={styles.folder__favourites__text__icon}/>
                        Deleted items
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <HiOutlineArchive className={styles.folder__favourites__text__icon}/>
                        Archive
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <RiStickyNoteLine className={styles.folder__favourites__text__icon}/>
                        Notes
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <BsFolder className={styles.folder__favourites__text__icon}/>
                        Conversation History
                    </div>
                    <Link to='/'>
                        New folder
                    </Link>
                </div>
            </div>
            <div className={styles.folder__favourites}>
                <div className={styles.folder__favourites__text}
                onClick={()=>setGroup(!group)}
                >
                    {group ? <IoChevronDownSharp className={styles.folder__favourites__text__icon}/> : <IoChevronForwardSharp className={styles.folder__favourites__text__icon}/>}
                    Groups
                </div>
                <div className={group ? styles.folder__favourites__nav : styles.folder__favourites__fav}>
                    <Link to='/'>
                        New group
                    </Link>
                    {/* <div className={styles.folder__favourites__nav__text}>
                        <BsInbox className={styles.folder__favourites__text__icon}/>
                        Inbox
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <SiMinutemailer className={styles.folder__favourites__text__icon}/>
                        Sent items
                    </div>
                    <div className={styles.folder__favourites__nav__text}>
                        <VscEdit className={styles.folder__favourites__text__icon}/>
                        Drafts
                    </div>*/}
                </div> 
            </div>
        </div>
    )
}