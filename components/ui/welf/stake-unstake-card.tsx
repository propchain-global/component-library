import * as React from "react";

import {
  LucideLockKeyhole,
  LucideLockKeyholeOpen,
  LucideGift,
} from "lucide-react";
import { StakeUnstackCardProps } from "@/types/portfolio";

import StackCard from "./stake-card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";
import UnstackCard from "./unstake-card";
import ClaimReward from "./claim-reward";
import { Suspense } from "react";
const StakeUnstackCard = ({ usdBalance, user }: StakeUnstackCardProps) => {
  const isConnected = user ? true : false;

  return (
    <>
      <div className={"flex gap-2x flex-col shrink-0  w-auto relative"}>
        <Tabs defaultValue="stake">
          <TabsList>
            <TabsTrigger
              value="stake"
              className="flex flex-1 items-center md:px-4x px-2x gap-2x h-10x  cursor-pointer md:text-body-s-medium text-description-l-medium  data-[state=active]:bg-nav-radial-gradient data-[state=active]:text-accent-strong data-[state=active]:hover:text-accent-default data-[state=active]:hover:bg-nav-radial-gradient-hover border-transparent data-[state=active]:border data-[state=active]:border-default text-foreground-weakest hover:text-foreground-weaker rounded-lg backdrop-blur-large-48 bg-blend-lighten"
            >
              <LucideLockKeyhole className="md:h-5px md:w-5px h-4x w-4x shrink-0" />
              Stake
            </TabsTrigger>
            <TabsTrigger
              value="unstake"
              className="flex flex-1 items-center md:px-4x px-2x gap-2x h-10x  cursor-pointer md:text-body-s-medium text-description-l-medium  data-[state=active]:bg-nav-radial-gradient data-[state=active]:text-accent-strong data-[state=active]:hover:text-accent-default data-[state=active]:hover:bg-nav-radial-gradient-hover border-transparent data-[state=active]:border data-[state=active]:border-default text-foreground-weakest hover:text-foreground-weaker rounded-lg backdrop-blur-large-48 bg-blend-lighten"
              
            >
              <LucideLockKeyholeOpen className="md:h-5px md:w-5px h-4x w-4x shrink-0" />
              Unstake
            </TabsTrigger>
            <TabsTrigger
              value="claim-reward"
              className="flex flex-1 items-center md:px-4x px-2x gap-2x h-10x  cursor-pointer md:text-body-s-medium text-description-l-medium  data-[state=active]:bg-nav-radial-gradient data-[state=active]:text-accent-strong data-[state=active]:hover:text-accent-default data-[state=active]:hover:bg-nav-radial-gradient-hover border-transparent data-[state=active]:border data-[state=active]:border-default text-foreground-weakest hover:text-foreground-weaker rounded-lg backdrop-blur-large-48 bg-blend-lighten"

            >
              <LucideGift className="md:h-5px md:w-5px h-4x w-4x shrink-0" />
              Reward
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stake">
            <StackCard usdBalance={usdBalance} isConnected={isConnected} />
          </TabsContent>
          <TabsContent value="unstake">
            <Suspense >
              <UnstackCard user={user} isConnected={isConnected} balance={0} />
            </Suspense>
          </TabsContent>
          <TabsContent value="claim-reward">
            <Suspense>
              <ClaimReward
                user={user}
                isConnected={isConnected}
              />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

StakeUnstackCard.displayName = "StakeUnstackCard";

export { StakeUnstackCard };
