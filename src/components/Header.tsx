
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Header() {
  const [currentAccount, setCurrentAccount] = useState(String)
  const {ethereum} = window
  async function checkIfWalletIsConnected(){
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

  useEffect(() => {
		checkIfWalletIsConnected()
	}, [])
  async function connectWallet(){
    try{
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
  return (
    <Grid container direction="row-reverse">
      <Grid item xs={3.05}>
        {currentAccount === '' ? <Item onClick={connectWallet} >ConnectWallet</Item> : <Item> {'wallet address: ' + currentAccount} </Item>}
      </Grid>
      {currentAccount !== '' ? 
      <>
        <Grid item xs={4}>
        <TextField
          label="Search"
          id="outlined-size-small"
          defaultValue="Search"
          size="small"
        />
        </Grid>
        <Grid item xs={4}>
          <Item>Create Universal Profile</Item>
        </Grid>
        <Grid item xs={0.45}>
          <Item>Profile</Item>
        </Grid>
        <Grid item xs={0.37}>
          <Item>Feed</Item>
        </Grid></> : '' 
      }
      
    </Grid>
  )
}