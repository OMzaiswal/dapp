import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

export function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();
    const [ amount, setAmount ] = useState(0);
    
    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, amount*1000000000);
        alert("airdropped sol")
    }

    return <div style={{
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }}>
        <h1>Welcome !</h1>
        <div>
        <input type="text" placeholder="Amount"
        style={{
            padding: '10px',
            paddingLeft: '5px',
            width: '100px',
            marginRight:'10px'
        }} 
        onChange={ e => setAmount(e.target.value)}></input>
        <button 
        style={{ padding: '10px'}}
        onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    </div>
}