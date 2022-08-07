import '../styles/globals.css'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components'
import type { AppProps } from 'next/app'

const DynamicHeader = dynamic(() => import('../src/components/Header'), {
  ssr:false,
})

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
 
`

const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  z-index: 1;
`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <HeaderWrapper>
          <DynamicHeader/>
      </HeaderWrapper>
      <BodyWrapper>
      <Component {...pageProps} />
      </BodyWrapper>
    </AppWrapper>
	)
}

export default MyApp
