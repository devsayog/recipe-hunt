import { Combobox, Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Fragment, useMemo, useState } from 'react'

import { useLazySearchQuery } from '@/services/mealDb'
import { debounce } from '@/utils/debounce'

import { Heading4, Paragraph } from './Typography'

const SearchIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

interface ISearchPaletteProps {
  handleClose: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const SearchPalette = ({ handleClose, isOpen }: ISearchPaletteProps) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [trigger, { data }] = useLazySearchQuery()

  const initApiCall = useMemo(() => {
    return debounce((q: string) => {
      const trimmed = q.trim()
      if (!trimmed) {
        return null
      }
      return trigger(trimmed)
    })
  }, [trigger])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    initApiCall(query)
  }
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery('')}
    >
      <Dialog
        onClose={handleClose}
        className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]"
      >
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0  bg-zinc-800/30 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(id: string) => {
              router.push(`/meal/${id}`)
              handleClose(false)
            }}
            as="div"
            className="relative mx-auto max-w-xl divide-y divide-zinc-700 overflow-hidden rounded-xl bg-gray-900 shadow-2xl ring-1 ring-white/10"
          >
            <div className="flex items-center px-4">
              <SearchIcon className="h-6 w-6 text-gray-400" />
              <Combobox.Input
                onChange={handleChange}
                className="h-12 w-full border-0 bg-transparent text-sm text-gray-300 placeholder:text-gray-400 focus:ring-0 md:text-base xl:text-lg"
                placeholder="Search ..."
              />
            </div>
            {data?.meals === null && (
              <div className="px-4">
                <Heading4 text="No results found." />
              </div>
            )}
            {Array.isArray(data?.meals) && query.trim() && (
              <Combobox.Options
                static
                className="scrollbar max-h-96 overflow-y-auto"
              >
                {data?.meals.map((result) => (
                  <Combobox.Option value={result.idMeal} key={result.idMeal}>
                    {({ active }) => (
                      <div
                        className={`flex items-center px-4 py-2 ${
                          active ? 'bg-pink-500/30 text-gray-300' : ''
                        }`}
                      >
                        <div>
                          <Image
                            alt={result.strMeal}
                            src={result.strMealThumb}
                            layout="intrinsic"
                            height={60}
                            width={60}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="basis-full pl-5">
                          <Paragraph text={result.strMeal} />
                          <div className="flex space-x-5">
                            <Paragraph
                              sm
                              text={`Category: ${result.strCategory}`}
                            />
                            <Paragraph sm text={`Area: ${result.strArea}`} />
                          </div>
                        </div>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default SearchPalette
