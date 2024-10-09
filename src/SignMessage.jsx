import { ed25519 } from '@noble/curves/ed25519'
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"

export function SignMessage() {

    const [ msg, setMsg ] = useState('');
    const { publicKey, signMessage } = useWallet();

    async function signMsg() {
        if (!publicKey) throw new Error('Wallet not connected');
        if (!signMessage) throw new Error('Wallet does not support message signing');

        const encodedMsg = new TextEncoder().encode(msg);
        const signature = await signMessage(encodedMsg);

        if (!ed25519.verify(signature, encodedMsg, publicKey.toBytes())) throw new Error('Invalid Message Signature!');
        alert('Success');
    }

    return <div>
        <input 
        onChange={e => setMsg(e.target.value)}
        type="text" placeholder="Message" />
        <button onClick={signMsg}>Sign Message</button>
    </div>
}