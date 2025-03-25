import React from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default function StakeWelcomeBanner() {
  return (
    <div className='flex flex-col gap-3x py-8x rounded-2xl items-start'>
      <h2 className="text-heading-h2 md:text-heading-h1 text-banner-staking-welcome-default">
      Stake $PROPC – Empower Real Estate Finance
      </h2>
      <p className='text-description-l-strong md:text-heading-h5 text-banner-staking-welcome-default'>
      Unlock rewards and grow with the future of real estate finance.
      </p>

      <Button variant='link' IconRight={ExternalLink} size='s' className='text-accent-default'>
      Learn How Staking Works
      </Button>

    </div>
  )
}
