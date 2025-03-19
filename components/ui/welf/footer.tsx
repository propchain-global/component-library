import { LucideFacebook, LucideTwitter, LucideLinkedin, LucideInstagram, } from 'lucide-react'
import React from 'react'
const leftItems = [
  {
    title: 'Terms and conditions',
    link: '#'
  },
  {
    title: 'Privacy policy',
    link: '#'
  },
  {
    title: 'Cookie policy',
    link: '#'
  }
]
const socials = [
  {
    Icon: LucideFacebook,
    link: '#'
  },
  {
    Icon: LucideTwitter,
    link: '#'
  },
  {
    Icon: LucideInstagram,
    link: '#'
  },
  {
    Icon: LucideLinkedin,
    link: '#'
  }
]

export const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-6x md:gap-0 md:justify-between flex-col md:flex-row p-4x lg:px-54 md:h-10x'>
      <div className='flex  gap-4x'>
        {leftItems.map((item, index) => (
          <a key={index} href={item.link} className='text-body-s-strong  text-button-link-neutral-default'>{item.title}</a>
        ))}
      </div>
      <div className='flex gap-4x md:gap-6x'>
        {socials.map((item, index) => (
          <a key={index} href={item.link}><item.Icon className='w-5x h-5x md:w-6x md:h-6x' /></a>
        ))}
      </div>
    </div>
  )
}
