import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";


export function ShowSolBalance() {

    const wallet = useWallet();
    const { connection } = useConnection();
    const [ balance, setBalance ] = useState();

    async function getBalance() {
        const bal = await connection.getBalance(wallet.publicKey);
        setBalance(bal);
    }

    getBalance();

    return <div>
        <p>Balance: {balance / LAMPORTS_PER_SOL} SOL </p>
    </div>
}