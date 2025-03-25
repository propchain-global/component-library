

const APYBreakdown = async () => {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const poolInfo = {};
 
  return(
    <div
      className="border border-default rounded-lg overflow-hidden bg-weak"
    >
      <div className="flex justify-between px-4 py-3 text-foreground-weakest text-md bg-weaker font-normal border-bottom border-default">
        <div>
          Period
        </div>
        <div>
          Rate (APY)
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 text-foreground-weak text-body-m">
        {poolInfo &&poolInfo?.activeTier.formattedDurations.map((duration, index) => (
          <div className="flex justify-between" key={duration}>
            <div>{duration}</div>
            <div> {poolInfo?.activeTier.apys[index]}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default APYBreakdown;