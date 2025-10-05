"use client";

import { cUSD } from "@/utils/constants/addresses";
import { erc20Abi } from "viem";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Home() {

  const { address } = useAccount();
  const { writeContract } = useWriteContract()

  
  const [isLoading, setIsLoading] = useState(false);
  const [toAddress, setToAddress] = useState<`0x${string}` | undefined>(undefined);
  const [amount, setAmount] = useState<number | undefined>(undefined);


  /*
  async function pasteAddressfromClipboard() {
    const clipboard = await navigator.clipboard.readText();
    setToAddress(clipboard as `0x${string}`);
  }
*/
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {address}

      <Button>Paste Address</Button>
      <Button onClick={() => writeContract({
        address: cUSD as `0x${string}`,
        abi: erc20Abi,
        functionName: "transfer",
        args: ["0x99342D3CE2d10C34b7d20D960EA75bd742aec468", BigInt("2800000000000000000")],
      })}>Send</Button>
    </div>
  );
}
