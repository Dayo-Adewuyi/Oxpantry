import React, { useState, useContext } from 'react'
import '../../styles/NewFile.css'
// import {create as ipfsHttpClient} from 'ipfs-http-client'
import { ethers } from "ethers";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ConnectContext } from "../../context/ConnectContext";
// const ipfs = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const NewFile = () => {
    const {uploads } = useContext(ConnectContext);
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState({})
    const [uploading, setUploading] = useState(false)
    const [fileDetails, setFileDetails] = React.useState({
        fileName: "",
        fileDescription: "", 
        fileHash: "",
        fileType: "",
        fileSize: "",
    })

    console.log(fileDetails)
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () => {
        setUploading(true)

        
    }

    return (
        <div className='newFile'>
            <div className="newFile__container" onClick={handleOpen}>
                <AddIcon fontSize='large' />
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>  

                                    <input type='text' placeholder='FileName' name = 'fileName' onChange={(e) => setFileDetails({ ...fileDetails, fileName: e.target.value })} />
                                    <input type="file" onChange={handleChange} />
                                    <button onClick={handleUpload}>Upload</button>
                                </>
                            )
                    }
                </div>
            </Modal>
        </div>
    )
}

export default NewFile
