import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../button";

import RewardCalculator from "./RewardCalculator";
import { PoolInfo } from "@/types/stake";

const RewardCalculatorPopup = async () => {
  const poolInfo = {};
  return (
    <>
      {/* For desktop */}
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="tertiary"
              size="m"
              className="px-0 py-0 hover:bg-transparent"
            >
              Reward calculator
            </Button>
          </DialogTrigger>

          <DialogContent
            className="rounded-none md:rounded-none border-none bg-none shadow-none"
          >
            <RewardCalculator poolInfo={poolInfo as unknown as PoolInfo} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default RewardCalculatorPopup;
