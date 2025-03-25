import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
    LucideAward,
    LucideLockKeyhole,
    LucideLockKeyholeOpen,
    LucideWallet,
} from 'lucide-react';
import { CurrencyField } from '@/components/ui/currency-field';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


type StakingProps = {
    stakedAmount: number;
    rewardAmount: number;
    isWalletConnected: boolean;
}

export default function Staking({ stakedAmount, rewardAmount, isWalletConnected }: StakingProps) {
    return (
        <Tabs defaultValue="stake" className="max-w-[493px] relative">
            <TabsList className="bg-none text-body-s-strong w-full">
                <TabsTrigger
                    value="stake"
                    className="w-full flex items-center text-staking-card-default gap-2x px-4x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tl-l rounded-tr-l"
                >
                    <LucideLockKeyhole className="w-5 h-5" />
                    Stake
                </TabsTrigger>
                <TabsTrigger
                    value="unstake"
                    className="w-full flex items-center text-staking-card-default gap-2x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tr-l rounded-tl-l"
                >
                    <LucideLockKeyholeOpen className="w-5 h-5" />
                    Unstake
                </TabsTrigger>
                <TabsTrigger
                    value="rewards"
                    className="w-full flex items-center text-staking-card-default gap-2x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tr-l rounded-tl-l"
                >
                    <LucideAward className="w-5 h-5" />
                    Rewards
                </TabsTrigger>
            </TabsList>
            <TabsContent
                value="stake"
                className=" mt-0 "
            >
               <div className='p-6x gap-4x flex flex-col'>
                <div className="gap-2x flex flex-col">
                    <CurrencyField
                        label="Amount to Stake"
                        token="PROPC"
                        placeholder="0.00"
                        balance={1000}
                        onChange={() => {}}
                    />
                    <div className="flex flex-row justify-between text-staking-card-default">
                        <p className="text-body-s-medium">You will Get</p>
                        <p className="text-body-s-strong">0 PROPC</p>
                    </div>
                    <div className="w-full h-[140px] bg-staking-card-multiplier bg-cover bg-center"></div>
                </div>

                <Button size='l' className="w-full" variant="primary">
                    {' '}
                    Stake
                </Button>

                <p className="text-body-s-medium text-staking-card-default text-center">
                    Keep your tokens staked for 10 days unlock{' '}
                    <span className="text-staking-card-active">
                        1.4x reward
                    </span>
                </p>
                </div>
            </TabsContent>
            <TabsContent value="unstake" className="mt-0">
               <div className='p-6x gap-4x flex flex-col'>
               <div className="flex flex-col gap-3x py-4x">
                  <p className="text-body-m text-staking-card-default">Staked Amount</p>
                  <div className="flex justify-between items-center">
                  <p className="text-body-2xl-strong text-foreground-white">{stakedAmount.toLocaleString()} <span className='text-body-m-medium text-staking-card-disabled'>PROPC</span> </p>
                  <div className="flex items-center gap-2x">
                     <LucideLockKeyhole className='w-4 h-4 text-accent-default'/>
                     <p className='text-body-m text-staking-card-default'>Current APY 12.9%</p>
                  </div>
                  </div>
               </div>
               <CurrencyField
                        label="I'm unstaking"
                        token="PROPC"
                        placeholder="0.00"
                        balance={1000}
                        onChange={() => {}}
                    />
               <div className="p-3 gap-4x flex flex-col rounded-m bg-staking-card-default">
                  <div className="flex flex-col gap-2x">
                     <p className="text-body-l-strong text-staking-card-active">
                     You are Almost There to Earn 1.5x 
                     </p>
                     <p className='text-body-m-medium text-staking-card-default'>
                     if you choose to keep your tokens staked for just 10 more days, you'll unlock a <span className="text-staking-card-active">
                        1.4x reward
                    </span> multiplier
                     </p>

                  </div>

                  <div className="w-full h-[140px] bg-staking-card-multiplier bg-cover bg-center -mb-3x"></div>

                  
               </div> 
               <Button size='l' className="w-full" variant="primary">
                    {' '}
                    Unstake
                </Button>

                <p className="text-body-s-medium text-staking-card-default text-center">
                Currently, 432 users are staking.
                </p>  
                </div>
            </TabsContent>
            <TabsContent value="rewards" className="mt-0">
               <div className='p-6x gap-4x flex flex-col items-center justify-center'>
               <div className="p-5x gap-2x flex flex-col items-center">
                  <Image src="/propchain/staking-rewards.png" alt="propchain-rewards" width={72} height={63} />
                  <p className="text-body-l-medium text-staking-card-default">Total Rewards Earned</p>
                  <div className="flex items-center gap-1x">

                  <p className="text-display-xs-strong text-foreground-white">{rewardAmount.toLocaleString()}</p>
                  <span className='text-body-m-medium text-staking-card-disabled'>PROPC</span>
                  </div>
               </div>
               {rewardAmount > 0 && <Button size='l' className="w-full" variant="primary">
                    {' '}
                    Claim Now 200 PROPC
                </Button>}
               </div>
            </TabsContent>
            {!isWalletConnected && <div className='absolute top-0 bottom-0 left-0 right-0 bg-staking-card-active backdrop-blur-lg p-6x rounded-2xl'>

               <div className="flex flex-col gap-8x items-start h-full justify-end">
                  <div className="flex flex-col gap-1.5">
                     <p className="text-heading-h2 text-staking-card-default">
                     Stake Your $PROPC
                     </p>
                     <p className='text-body-m-medium text-staking-card-default'>
                     Start earning rewards effortlessly by staking your 
                     $PROPC tokens. Connect your wallet to begin.
                     </p>
                     </div>
                     <Button size='l'  variant="primary" IconRight={LucideWallet}>
                        Connect Wallet
                     </Button>
                  
               </div>
            </div>}
        </Tabs>
    );
}
