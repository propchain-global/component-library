"use client";
import { useState } from "react";
import { LucideCopy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const CopyTxnId = ({ txn_id }: { txn_id: string }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(txn_id ?? "");
    setCopied(true);
    toast({
      variant: 'success',
      title: "Transaction id copied to clipboard!",
    })
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <LucideCopy
            size={16}
            className="h-4x w-4x text-foreground-weakest cursor-pointer"
            onClick={handleCopy}
          />
        </TooltipTrigger>
        {copied ? <TooltipContent forceMount>{copied ? "Copied!" : null}</TooltipContent> : null }
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyTxnId;
