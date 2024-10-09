import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Z9eXJaniFaiJ4zFRvrjNWtWCn7V-3wVc"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between'
            }}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
           <Airdrop/>
           <ShowSolBalance />
           <SendTokens />
           <SignMessage />
         </WalletModalProvider>
       </WalletProvider>
     </ConnectionProvider>
  )
}

export default App
