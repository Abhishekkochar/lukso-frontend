import Head from 'next/head'
import Web3Modal from "web3modal";
import { providers, Contract, ethers } from 'ethers';
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [currentAccount, setCurrentAccount] = useState('')
  async function checkIfWalletIsConnected(){
    const {ethereum} = window
    if(ethereum){
      console.log('Ethereum', ethereum)
    } else {
      console.log('No wallet found')
    }

    const accounts = await ethereum.request({method: 'eth_accounts'})

    if(accounts.length !== 0){
      console.log('Found Accounts: ', accounts[0])
      setCurrentAccount(accounts[0])

    } else {
      console.log('No Authorized account found')
    }
  }

  async function connectWallet(){
    try{
        const { ethereum } = window

        if (!ethereum) {
          console.log('Metamask not detected')
          return
        }
        let chainId = await ethereum.request({ method: 'eth_chainId'})
        console.log('Connected to chain:' + chainId)

        const LuksoChainId = '0x16'

        if (chainId !== LuksoChainId) {
          alert('You are not connected to the Lukso Testnet!')
          return
        }

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

        console.log('Found account', accounts[0])
        setCurrentAccount(accounts[0])
		} catch (error) {
			  console.log('Error connecting to metamask', error)
		}
  }

  useEffect(() => {
		checkIfWalletIsConnected()
	}, [])

  return (
		<div className='flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen'>
			<div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>
			</div>
			<h2 className='text-3xl font-bold mb-20 mt-12'>
				Build UP
			</h2>
			{currentAccount === '' ? (
				<button
				className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
				onClick={connectWallet}
				>
				Connect Wallet
				</button>
				) : null}
		</div>
	)
}


export default Home
