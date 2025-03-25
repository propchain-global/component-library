import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { LucideChevronDown, LucideInfo } from "lucide-react";

interface CooldownPeriodNoticeProps {
  variant : 'text' | 'progress'
  progress? : number,
  releaseDate?: string,
}

const TOTAL_DAYS = 7;
const PROGRESS_PER_DAY = 100 / TOTAL_DAYS;

const calculateActiveStage = (progress: number | undefined): number => {
  if (!progress) return 0;
  return Math.min(Math.floor(progress / PROGRESS_PER_DAY), TOTAL_DAYS);
};

const CooldownPeriodNotice = ({
  variant,
  progress,
  releaseDate
}: CooldownPeriodNoticeProps) => {
  const activeStage = calculateActiveStage(progress);

  return(
    <Accordion
      type="single"
      collapsible
      className="border border-alert-border-warning rounded-md"
      defaultValue="cooldown-period"
    >
      <AccordionItem
        className="border-none bg-alert-background-warning px-4x py-3x"
        value="cooldown-period"
      >
        <AccordionTrigger className="flex justify-between items-center text-alert-text-warning ">
          <div className="flex gap-3 text-body-s-strong items-center">
            <LucideInfo
              height={16}
              width={16}
            />
            Cooldown Period Notice
          </div>

          <LucideChevronDown
            size={16}
            className="transition-transform duration-200"
          />
        </AccordionTrigger>
        <AccordionContent className="mt-3 pb-0 md:pb-0 pb-0 pt-6x">

          {
            variant === 'text' &&
            <ul className="list-disc list-outside pl-11 flex flex-col gap-2">
              <li className="text-foreground-white text-xs font-medium">
                A 7-day cooldown period applies to unstaking.
              </li>
              <li className="text-foreground-white text-xs font-medium">
                Your unstaked $WELF will be credited to your wallet after the cooldown period ends.
              </li>
              <li className="text-foreground-white text-xs font-medium">
                During this time, no rewards will accrue on your staked $WELF, as staking will be paused.
              </li>
              <li className="text-foreground-white text-xs font-medium">
                You can still claim any rewards earned during the staking period.
              </li>
            </ul>
          }

          {
            variant === 'progress' &&
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-description-s-strong text-surface-warning">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={`day-${i}`}
                    className={`${activeStage === i ? 'text-white' : ''}`}
                  >
                    {i}D
                  </div>
                ))}
              </div>

              <Progress
                className="h-6 bg-alert-background-warning [&_div]:bg-foreground-warningOnSurface [&_div]:rounded-lg"
                value={progress}
              />

              <div className="text-warning text-description-s-medium text-center">
                {`${releaseDate}`}
              </div>
            </div>
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default CooldownPeriodNotice;