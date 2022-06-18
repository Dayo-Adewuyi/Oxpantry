import React from 'react'
import '../../styles/Sidebar.css'

import NewFile from './NewFile.jsx'
import SidebarItem from './SidebarItem.jsx'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import GavelSharpIcon from '@material-ui/icons/GavelSharp';

const index = () => {
    return (
        <div className='sidebar'>
            <NewFile />

            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Files'} />
                <SidebarItem arrow icon={(<PublicSharpIcon/>)} label={'Public Files'} />
                <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<GavelSharpIcon />)} label={'Admins'} />
                
                
                <hr/>
                
               

            </div>

        </div>
    )
}

export default index
