"use client";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Button } from "./ui/button";
import { useDisconnect } from "@reown/appkit/react";
import { useEffect, useState } from "react";
export default function ConnectButton() {
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount();
  const [mounted, setMounted] = useState(false);
  const { disconnect } = useDisconnect();

  const handleDisconnect = async () => {
    await disconnect();
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {isConnected ? (
        <>
          <div
            className="cursor-pointer"
            onClick={() => open({ view: "Account" })}
          >
            View Account: {address}
          </div>
          <Button variant="destructive" onClick={handleDisconnect}>
            {" "}
            Disconnect{" "}
          </Button>
        </>
      ) : (
        <Button
          variant={
            mounted && status === "connecting" ? "ghost" : "default"
          }
          onClick={() => open()}
        >
          {mounted && status === "connecting" ? "Connecting..." : "Connect"}
        </Button>
      )}
    </>
  );
}
