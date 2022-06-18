import React, { useEffect, useState } from "react";
import { ethers, Contract, providers } from "ethers";
import abi from "../constants/OxPantry.json";
import { contractAddress } from "../constants/constants";
import UAuth from '@uauth/js'
import WalletConnectProvider from '@walletconnect/web3-provider'
import * as UAuthWeb3Modal from '@uauth/web3modal'
import UAuthSPA from '@uauth/js'
import web3modal from './web3modal'


export const ConnectContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const oxPantryContract = new ethers.Contract(contractAddress, abi.abi, signer);
 
  return oxPantryContract;
};

const fetchPublic = async() => {
  const contract = createEthereumContract();
  
 try {
   const result =await contract.fetchPublicFiles();
  
  return result
  }
 catch(error){
   console.log(error)
 
 }
}

const fetchAll = async(ID) => {
  const contract = createEthereumContract();
  
 try {
   const result =await contract.Allfiles(ID);
  
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const takeAction = async( fileid) => {
  const contract = createEthereumContract();
  
 try {

  await contract.makeReportedPrivate(fileid);
  

  }
 catch(error){
   console.log(error)
  
 }
}

const fetchPrivate = async() => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.fetchUserFiles();
  
  return result
  }
 catch(error){
   console.log(error)
 
 }
}

const makePrivate = async(id) => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.makeFilePrivate(id);
  
  return result
  }
 catch(error){
   console.log(error)
 
 }
}

const makePublic = async(id) => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.makeFilePublic(id);
  
  return result
  }
 catch(error){
   console.log(error)
 
 }
}


const uploads = async(hash, size, type, name, description, isPublic) => {
  
  
  try {
   if (ethereum) {
     const transactionsContract = createEthereumContract();
    await transactionsContract.uploadFile(hash, size, type, name, description, isPublic,{
     gasPrice: 100,
     gasLimit: 1000000
 });}
   }
 
  catch(error){
    console.log(error)
   
  }
 }


 const makeMod = async(addr) => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.assignMod(addr);
  
  return result
  }
 catch(error){
   console.log(error)
 
 }
}


const remMod = async(addr) => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.removeMod(addr);
  
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const reportFile = async(id) => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.report(id);
  
  return result
  }
 catch(error){
   console.log(error)

 }
}

const reportedList = async() => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.reportedListArray();
  //console.log(result)
  return result
  }
 catch(error){
   console.log(error)
  
 }
}



const checkModerator = async(addr) => {
  const contract = createEthereumContract();
  
 try {
   const result = await contract.checkMod(addr);
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const add2Blacklist = async(addr) => {
  const contract = createEthereumContract();
  
 try {
   const result = await contract.addToBlackList(addr);
  console.log(result)
  return result
  }
 catch(error){
   console.log(error)
 
 }
}

const remFrmBlacklist = async(addr) => {
  const contract = createEthereumContract();
  
 try {
   const result = await contract.removeFromBlackList(addr);
  console.log(result)
  return result
  }
 catch(error){
   console.log(error)
 
 }
}

const blackList = async() => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.blackListArray();
  
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const pauseContract = async() => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.pause();
  
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const unPauseContract = async() => {
  const contract = createEthereumContract();
  
 try {
   const  result =await contract.unpause();
  
  return result
  }
 catch(error){
   console.log(error)
  
 }
}

const shareFile = async(id,receiver, hash ) => {
    const contract = createEthereumContract();
    
   try {
     const  result =await contract.shareFile(id,receiver, hash);
    
    return result
    }
   catch(error){
     console.log(error)
   
   }
  }

const getSharedFiles = async() => {
    const contract = createEthereumContract();
    try {
        const  result =await contract.getSharedFiles();
       
       return result
       }
      catch(error){
        console.log(error)
      
      }
    }
export const ConnectProvider = ({ children }) =>{
    const [currentAccount, setCurrentAccount] = useState("");
      // const [web3Modal, setWeb3Modal] = useState()
     const [connectedWallet, setConnectedWallet] = useState(false);
     
   

    async function connectUWallet() {
      const provider = await web3modal.connect();
      console.log(provider)
      addListeners(provider);
      const ethersProvider = new providers.Web3Provider(provider)
      const userAddress = await ethersProvider.getSigner().getAddress()
      console.log(userAddress)
      setCurrentAccount(userAddress)
      setConnectedWallet(true)
    }
  
    
    
    async function addListeners(web3ModalProvider) {
  
      web3ModalProvider.on("accountsChanged", (accounts) => {
        window.location.reload()
      });
      
      // Subscribe to chainId change
      web3ModalProvider.on("chainChanged", (chainId) => {
        window.location.reload()
      });
    }
    
    return (
      <ConnectContext.Provider
        value={{
          checkModerator,
          pauseContract,
          unPauseContract,
          remFrmBlacklist,
          currentAccount,
          connectedWallet,
          connectUWallet,
          add2Blacklist,
          fetchPrivate,
          reportedList,
          fetchPublic,
          makePrivate,
          makePublic,
          takeAction,
          reportFile,
          blackList,
          fetchAll,
          uploads,
          makeMod,
          remMod,
          shareFile,
          getSharedFiles
        }}
      >
        {children}
      </ConnectContext.Provider>
    );
  };