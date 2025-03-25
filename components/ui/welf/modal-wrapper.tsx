import { LucideX } from 'lucide-react';
import React from 'react';
import Image from "next/image";
import { ModalHeader } from './modal-header';

interface ModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  supportingText?: string;
}
export const ModalWrapper = ({ title, supportingText, children, showModal, setShowModal, ...props }: ModalWrapperProps) => {

  return (
    <>
    {
      showModal &&
      <div className='fixed top-0 left-0 h-full w-full bg-modal-background-color backdrop-blur-lg z-10 overflow-scroll no-scrollbar flex flex-col py-10x px-4x md:p-12x' {...props}>
        <div className='flex items-center justify-between  md:mb-[12x] mb-8x w-full'>
          <Image 
            src="/word-mark-white-md.svg"
            width={74}
            height={24}
            alt=''
          />
          <button
            className='h-10x w-10x flex items-center justify-center bg-gradinet-surface-linear rounded-full backdrop-blur-md'
            onClick={() => setShowModal(false)}
          >
            <LucideX />
          </button>
        </div>
        
        <ModalHeader 
          title={title}
          type="centered"
          supportingText={supportingText}
        />

        {children}
      </div>
    }
    </>
  )
}
