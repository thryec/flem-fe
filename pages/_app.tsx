import '../styles/globals.css'
import App from 'next/app'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import Cookies from 'universal-cookie'
import consts from '../cookies'

function MyApp({ Component, pageProps }: AppProps) {
  const magicApiKey: any = 'pk_live_993DEAFFFEA3D6B4'

  const { chains, provider, webSocketProvider } = configureChains(
    defaultChains,
    [
      alchemyProvider({ apiKey: 'DY2j_lkzxS3cjB8JRB3KV60mZNZ_sctC' }),
      publicProvider(),
    ]
  )
  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
      <ThirdwebProvider
        desiredChainId={ChainId.Mainnet}
        walletConnectors={[
          'metamask',
          'walletConnect',
          {
            name: 'magic',
            options: {
              apiKey: magicApiKey,
              rpcUrls: {
                [ChainId.Mainnet]:
                  'https://eth-mainnet.g.alchemy.com/v2/SFt1fObAdxidwp4fI4F5TH8PWPxnz6Yj',
              },
            },
          },
        ]}
      >
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThirdwebProvider>
    </WagmiConfig>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  console.log('app context: ', appContext)

  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ''

  if (password === 'flemingprotocol') {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default MyApp
