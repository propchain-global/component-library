import { LucideChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import { useStakeStore } from "@/store/stake";

const PoolReward = () => {
  const { selectedStakes } = useStakeStore();
  return (
    <Accordion
      type="multiple"
      className="flex flex-col gap-6"
      defaultValue={selectedStakes.length > 0 ? selectedStakes?.[0]?.stake?.rewards?.periods?.map(
        (_, ind) => `item-${ind}`
      ) : []}
    >
      {selectedStakes.length > 0 &&
        selectedStakes.map((stake, index) => (
          <AccordionItem
            value={`item-${index}`}
            className="border-none bg-transparent"
            key={`reward-${index}`}
          >
            <AccordionTrigger className="flex justify-between items-center py-0 px-0">
              <div>
                <div className="flex items-center gap-2 mb-2x">
                  <Image
                    src={"/welf-token.svg"}
                    alt=""
                    height={16}
                    width={16}
                  />

                  <div className="text-foreground-weak text-number-2xs">
                    {stake.stake.amount}
                  </div>
                </div>

                <div className="py-1 px-2 bg-weak text-description-l-medium text-foreground-weaker flex items-center gap-1 rounded-custom">
                  {stake.stake.startTime.date}{" "}
                  <div className="h-0.5 w-0.5 bg-foreground-weaker"></div>{" "}
                  {stake.stake.startTime.time}
                </div>
              </div>

              <div className="flex items-center text-description-l-medium text-foreground-weaker gap-1">
                Hide Reward
                <LucideChevronDown
                  size={16}
                  className="transition-transform duration-200"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-3x pb-0">
              <div className="border border-default rounded-lg overflow-hidden bg-weak">
                <div className="grid grid-cols-3 gap-2 px-4 py-3 text-foreground-weakest text-body-m bg-weaker border-bottom border-default">
                  <div>Period</div>
                  <div>Rate (APY)</div>
                  <div className="text-right">Reward</div>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  {stake.stake?.rewards?.periods.map((item, index) => (
                    <div
                      key={item.period + index}
                      className="grid grid-cols-3 gap-2 text-foreground-weak text-body-m"
                    >
                      <div>{item.period}</div>
                      <div>{item.rate}%</div>
                      <div className="flex justify-end items-center gap-0.5">
                        <Image
                          src={"/welf-token.svg"}
                          alt=""
                          height={16}
                          width={16}
                        />
                        {item.reward.toFixed(3)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};
export default PoolReward;
