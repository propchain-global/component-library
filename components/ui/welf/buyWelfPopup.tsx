import APYArc from './apy-arc';
import { Button } from '@/components/ui/button';
import BuyWelfModal from './buyWelfModal';
import Image from 'next/image';
import {
  TabsList,
  TabsTrigger,
} from "../tabs";
import APYBreakdown from './apyBreakdown';

interface BuyWelfProps {
  title: string;
  showPopup: boolean;
  type?: 'buy' | 'stake'
}

const BuyWelfPopup = ({ title, showPopup, type = 'buy' }: BuyWelfProps) => {

  return (
    <>
      {showPopup && (
        <div className="absolute flex flex-col justify-end gap-9 h-full w-full p-6 bg-linear-2 top-0 left-0 backdrop-blur-md ">
          <div className="flex flex-col gap-4">
            <Image src='welf-token.svg' alt='' width={88} height={88} className="" />

            <div className="text-body-xl-strong">{title}</div>

            <div className="flex flex-col items-center">
              <APYArc variant="0-3">
                <APYBreakdown />
              </APYArc>
            </div>
          </div>

          {type === 'buy' &&
            <BuyWelfModal>
              <Button
                className="w-full rounded-md h-12 [&_svg]:size-5"
              >
                <Image src="welf-icon.svg" alt='' height={20} width={20} />
                Buy WELF
              </Button>
            </BuyWelfModal>
          }
          {type === 'stake' &&
            <TabsList className='p-0'>
              <TabsTrigger className='' value="stake" asChild>
                <Button
                  className="w-full rounded-md h-12 [&_svg]:size-5 "
                >
                  Stake
                </Button>
              </TabsTrigger>
            </TabsList>
          }
        </div>
      )}
    </>
  );
};
export default BuyWelfPopup;
