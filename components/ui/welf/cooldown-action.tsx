"use client";
import { Button } from "@/components/ui/button";
import { useTxStore } from "@/store/tx-store";

import { extractErrorDetails } from "@/utils";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useChainId, useWriteContract } from "wagmi";

import { formatHash } from "@/utils";
import { ModalWrapper } from "./modal-wrapper";
import Image from "next/image";
import { ModalHeader } from "./modal-header";
import { LucideCopy, LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { useStakeStore } from "@/store/stake";
import { useToast } from "@/hooks/use-toast";
import CopyTxnId from "./CopyTxnId";
const CooldownAction = ({totalAmount, functionName = "withdrawCooldown" }: {totalAmount: string, functionName?: 'batchClaimRewards' | 'withdrawCooldown' }) => {

  const {
    data: hash,
    writeContract,



    error,
    isError,

    reset,
  } = useWriteContract();

  const search = useSearchParams();
  const user = search.get("user");
  const chainId = useChainId();
  const { setHash } = useTxStore();
  const { isStaking, setIsStaking } = useStakeStore();
  const [showModal, setShowModal] = useState(false);
  const type = functionName === "batchClaimRewards" ? "Claim Reward" : "Withdraw Cooldown";
  const { toast } = useToast();

  return (
    <>
      {" "}
      {!showModal && (
        <Button
          className="w-full rounded-md h-12 [&_svg]:size-5 mt-2"
          variant="primary"
        >
             {type === "Withdraw Cooldown" ? "Release Stake" : "Claim now"}
        </Button>
      )}
      {showModal && (
        <ModalWrapper
          showModal={showModal}
          setShowModal={setShowModal}
          title={""}
        >
          <div className="max-w-[480px] w-full flex gap-4x mx-auto mt-8x flex-col">
            {isStaking.status !== "idle" && isStaking.status !== "pending" && (
              <div className="flex flex-col items-center w-full">
                {isStaking.status !== "idle" &&
                  isStaking.status !== "pending" && (
                    <Image
                      src={
                        isStaking.status === "success"
                          ? "/successful-checkmark.png"
                          : "/reject.png"
                      }
                      width={128}
                      height={128}
                      alt=""
                      className="mb-4x"
                    />
                  )}

                {isStaking.status !== "idle" &&
                  isStaking.status !== "pending" && (
                    <ModalHeader
                      type="centered"
                      title={
                        isStaking.status === "success"
                          ? `${type} successful!`
                          : `${type} unsuccessful!`
                      }
                      alert={isStaking.status === "failed"}
                      supportingText={
                        isStaking.status === "success"
                            ? `Your WELF has been successfully ${type === "Withdraw Cooldown" ? "withdrawn" : "claimed"} from the staking pool.`
                          : error
                          ? extractErrorDetails(error.cause as string)
                              .detailedMessage
                          : `Your WELF could not be ${type === "Withdraw Cooldown" ? "withdrawn" : "claimed"}. Please try again or contact support if the issue persists.`
                      }
                    />
                  )}

                {(isStaking.status === "success" ||
                  isStaking.status === "failed") &&
                  hash && (
                    <div className="flex flex-col gap-1x mt-8x w-full">
                      <div className="py-2x px-4x bg-weak rounded-md flex justify-between items-center w-full">
                        <div className="text-body-s-medium text-foreground-weakest">
                          Amount {type === "Withdraw Cooldown" ? "Withdrawn" : "Claimed"}
                        </div>
                        <div className="text-body-s-medium text-foreground-weakest ">
                          <span className="text-foreground-weak mr-1">
                            {totalAmount}
                          </span>
                          WELF
                        </div>
                      </div>

                      <div className="py-2x px-4x bg-weak rounded-md flex justify-between items-center w-full mb-6x">
                        <div className="text-body-s-medium text-foreground-weakest">
                          Transaction ID
                        </div>

                        <div className="flex items-center gap-3x">
                          <div className="text-foreground-weak">
                            {formatHash(hash as `0x${string}`)}{" "}
                          </div>
                          <div>
                            {/* ISSUE 7: There should be a toast when the user copies the hash */}
                            {/* toast added pls check */}
                            <LucideCopy
                              className="h-4x w-4x text-foreground-weakest cursor-pointer"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  hash as `0x${string}`
                                );
                                toast({
                                  variant: 'success',
                                  title: "Hash copied to clipboard!",
                                })
                              }}
                            />
                            <CopyTxnId txn_id={hash as `0x${string}`} />
                          </div>
                          <div>
                            <Link
                              href={`https://${
                                chainId === 1 ? "" : "sepolia"
                              }.etherscan.io/tx/${hash as `0x${string}`}`}
                              target="_blank"
                            >
                              <LucideExternalLink className="h-4x w-4x text-foreground-weakest cursor-pointer" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                {isStaking.status === "success" ? (
                  <Button
                    variant="primary"
                    size="xl"
                    className="w-full"
                    onClick={() => {
                      setIsStaking({ loading: false, status: "idle" });
                      reset();
                      setShowModal(false);
                 
                    }}
                  >
                    Okay
                  </Button>
                ) : isError || isStaking.status === "failed" ? (
                  <div className="flex gap-3x w-full">
                    <Button
                      onClick={() => {
                        reset();
                        setIsStaking({ loading: false, status: "idle" });
                        setShowModal(false);
                      }}
                      variant="primary"
                      size="xl"
                      className="w-full"
                    >
                      Try again
                    </Button>
                    <Button
                      variant="outline"
                      size="xl"
                      className="w-full"
                      onClick={() => {
                        setIsStaking({ loading: false, status: "idle" });
                        reset();
                        setShowModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default  CooldownAction;
