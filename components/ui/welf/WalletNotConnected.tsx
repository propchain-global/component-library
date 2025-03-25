import ConnectButton from "./ConnectButton";
import Image from "next/image";

const WalletNotConnected = ({
  type,
}: {
  type: "Stake" | "Unstake" | "Claim reward";
}) => {
  const messages = {
    Stake: "Connect your wallet to view and stake your $WELF",
    Unstake: "Unstake anytime, get instant rewards",
    "Claim reward": "Claim your rewards anytime",
  };

  return (
    <div className="h-full w-full md:p-4x p-3x bg-portfolio-info-blur-bg backdrop-blur-md flex flex-col justify-end absolute left-0 top-0 rounded-xl">
      <Image src="plug-pin.svg" width={88} height={88} alt="WELF token" />
      <div className="text-body-xl-strong text-foreground-weak mt-4x">
        {messages[type]}
      </div>
      <div className="text-body-s text-foreground-weaker mt-1.5x mb-8x">
        Start earning rewards effortlessly by staking your $WELF tokens. Connect your wallet to begin.
      </div>
      <ConnectButton size="xl" />
    </div>
  );
};
export default WalletNotConnected;