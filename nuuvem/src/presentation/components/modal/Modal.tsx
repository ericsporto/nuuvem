import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IJokes } from '../../../interfaces/jokes.interface'
import Image from 'next/image'
import { ButtonStyled } from '../button/Button.styles'
import RealChuck from '../../../assets/realChuck.png'

export interface IModal {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  randomJokes: IJokes
}

export default function JokesModal({ open, setOpen, randomJokes }: IModal) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className='flex flex-col justify-center items-center'>
                    <div>
                      <Image
                        src={RealChuck}
                        width={150}
                        height={120}
                        alt="image"
                        className="rounded-full"
                      />

                    </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-primaryDark"
                    >
                      {randomJokes?.value}
                    </Dialog.Title>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="mt-5 sm:mt-6">
              <ButtonStyled onClick={() => setOpen(false)} variant="primary">
                Go Back and try again!
              </ButtonStyled>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
