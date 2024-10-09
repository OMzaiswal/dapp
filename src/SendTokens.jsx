import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";


export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [ recAdd, setRecAdd ] = useState();
    const [ amount, setAmount ] = useState();

    async function sendToken() {
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(recAdd),
            lamports: amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);
        alert(`Sent ${amount} SOL to ${recAdd}`);
    }

    return <div>
        <input type="text" placeholder="Recipient's Solana address"
        onChange={ (e) => setRecAdd(e.target.value)}
        ></input>
        <input type="text" placeholder="Amount"
        onChange={ (e) => setAmount(e.target.value)}
        ></input>
        <button onClick={sendToken}>Send</button>
    </div>
}