import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
 import {Link,useNavigate} from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
const handleNavigate = ({route}) => {
   navigate(route);
}
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                HI ADMIN
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' >
                    <BsGrid1X2Fill className='icon'/> CREATE USER
            </li>
            
            <li className='sidebar-list-item'>
            <Link to='/student/list'>
                    <BsFillGrid3X3GapFill className='icon' onClick={() => handleNavigate('/student/list')}/> VIEW USER
                    </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to='/bulk'>
                    <BsMenuButtonWideFill className='icon' onClick={() => handleNavigate('/Bulk')}/> BULK UPLOAD
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> SETTING
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar