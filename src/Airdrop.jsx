import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();
    
    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 1000000000);
        alert("airdropped sol")
    }

    return <div>
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}