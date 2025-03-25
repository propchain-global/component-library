import CooldownPeriodNotice from "./CooldownPeriodNotice";
import { Badge } from "@/components/ui/badge";
import { CoolDowns } from "@/types/stake";
import Image from "next/image";
import CooldownAction from "./cooldown-action";

const Pool = ({ cooldowns }: CoolDowns) => {
  return (
    <>
      {cooldowns && cooldowns?.map((cooldown, index) => (
        <div
          key={index}
          className={`p-4 transition-all duration-300 rounded-lg bg-weak   `}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-1">
              <div className="text-foreground-weakest text-body-s">
                Staked on:
              </div>
              <div className="text-foreground-weak text-body-s-medium">
                {" "}
                {cooldown?.staked_on?.date}{" "}
              </div>
              <div className="h-1 w-1 rounded-sm bg-foreground-weakest"></div>
              <div className="text-foreground-weak text-body-s-medium">
                {" "}
                {cooldown?.staked_on?.time}{" "}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mb-4">
              <Image src={"/welf-token.svg"} alt="" height={32} width={32} />

              <div className="text-number-s text-foreground-weak">
                {cooldown?.amount}
              </div>
            </div>

            <Badge
              variant="secondary-neutral"
              className="text-pills-secondary-neutral bg-pills-secondary-neutral text-description-l-medium py-1 px-1.5 rounded-xs"
              size={"l"}
            >
              APY: {cooldown?.apy}%
            </Badge>
          </div>

          <div className="px-4 py-3 bg-dark rounded-lg flex items-center justify-between mb-4">
            <div className="text-body-s text-foreground-weakest">
              Unstaked on:
            </div>
            <div className="flex items-center gap-1 text-foreground-weak text-body-s-medium">
              <div>{cooldown?.unstaked_on?.date}</div>
              <div className="bg-foreground-weakest rounded-full h-1 w-1"></div>
              <div>{cooldown?.unstaked_on?.time}</div>
            </div>
          </div>

          <CooldownPeriodNotice
            variant="progress"
            progress={cooldown?.percentageComplete}
            releaseDate={cooldown?.timeLeft}
          />
     
        </div>
      ))}
           {cooldowns?.some((cooldown) => cooldown.percentageComplete === 100) && (
            <CooldownAction totalAmount={cooldowns[0]?.amount} />
          )}
    </>
  );
};
export default Pool;
