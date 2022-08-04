import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Web3Modal from "web3modal";
import { providers, Contract, ethers } from 'ethers';
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [haveMetamask, setHaveMetamask] = useState(true)
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [walletConnected, setWalletConnected] = useState(false)
  
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(()=>{
    const checkMetamask = async()=>{
      if(!ethereum) {
        setHaveMetamask(false)
      }
      setHaveMetamask(true)
    }
    checkMetamask() }, [])
  
    const connectWallet = async () => {
      try {
        if (!ethereum) {
          setHaveMetamask(false);
        }
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        let balance = await provider.getBalance(accounts[0]);
        let bal = ethers.utils.formatEther(balance);
        setAccountAddress(accounts[0]);
        setAccountBalance(bal);
        setWalletConnected(true);
      } catch (error) {
        setWalletConnected(false);
      }
    };
  return (
    <div className="App">
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {walletConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Wallet Address:</h3>
                  <p>
                    {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}
                  </p>
                </div>
                <div className="card-row">
                  <h3>Wallet Balance:</h3>
                  <p>{accountBalance}</p>
                </div>
              </div>
            ) : (
              <img src={logo} className="App-logo" alt="logo" />
            )}
            {walletConnected ? (
              <p className="info">🎉 Connected Successfully</p>
            ) : (
              <button className="btn" onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
        ) : (
          <p>Please Install MataMask</p>
        )}
      </header>
    </div>
  );
}


export default Home
