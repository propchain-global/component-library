"use client";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitEvents,
} from "@reown/appkit/react";
import { Button } from "../button";

import { useEffect, useState } from "react";
import { LucideWallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconButton } from "../icon-button";
import { cn } from "@/lib/utils";

export default function ConnectButton({
  size,
  showWalletInfo = false,
  buttonClassName,
  IconClassName,
}: {
  size: "l" | "xl";
  showWalletInfo?: boolean;
  buttonClassName?: string;
  IconClassName?: string;
}) {
  const { open } = useAppKit();
  
  return (
    <>
      <Button
        className={cn("hidden md:flex", buttonClassName)}
        onClick={() => open()}
      >
        <LucideWallet />{" "}
        Connect Wallet
      </Button>
      <IconButton
        Icon={LucideWallet}
        className={cn("md:hidden", buttonClassName, IconClassName)}
        onClick={() => open()}
      />
    </>
  );
}
