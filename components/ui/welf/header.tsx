import { LucideWallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { NavigationBar } from './navigation-bar';
import { LucideLayers, LucideLayoutDashboard } from 'lucide-react';
import { Button } from '../button';
import { WalletConnected } from './wallet-connected';
import { IconButton } from './icon-button';
interface HeaderProps {
    isWalletConnected: boolean;
}
export const Header = ({ isWalletConnected }: HeaderProps) => {
    return (
        <div className="flex justify-between items-center px-4x h-20x lg:px-54">
            <Image
                src="/word-mark-md.png"
                alt="Logo"
                className="md:hidden brightness-0 invert"
                width={74}
                height={28}
            />
            <div className=" items-center gap-8x hidden md:flex">
                <Image
                    src="/word-mark-lg.png"
                    alt="Logo"
                    className=" brightness-0 invert"
                    width={74}
                    height={28}
                />
                <div className="flex items-center gap-2x">
                    <NavigationBar
                        title="Portfolio"
                        Icon={LucideLayoutDashboard}
                        state="active"
                    />
                    <NavigationBar
                        title="Stake"
                        Icon={LucideLayers}
                        state="default"
                    />
                </div>
            </div>
            <div className=" items-center gap-2x hidden md:flex">
                <Button variant="outline" size='l'>
                    <Image
                        src="/logo-sm.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                    />
                    Buy $WELF
                </Button>
                {!isWalletConnected ? (
                    <Button>
                        <LucideWallet /> Connect Wallet
                    </Button>
                ) : (
                    <WalletConnected size="xl" />
                )}
            </div>
            <div className=" items-center gap-2x flex md:hidden">
                <Button variant="outline" size='m'>
                    <Image
                        src="/logo-sm.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                    />
                    Buy $WELF
                </Button>
                {isWalletConnected ? (
                    <IconButton Icon={LucideWallet} />
                ) : (
                    <WalletConnected size="l" showWalletInfo={false} />
                )}
            </div>
        </div>
    );
};
