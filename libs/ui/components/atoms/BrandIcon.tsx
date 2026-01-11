import { ReactNode } from 'react'

export interface IBrandIconProps {
  children?: ReactNode
  siteName?: string
}

export const BrandIcon = ({
  children,
  siteName = 'VinyCherry',
}: IBrandIconProps) => {
  return (
    <div className="inline-flex items-center space-x-3">
      {/* Vinyle avec bras */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Vinyle */}
        <div className="relative w-10 h-10 rounded-full bg-gray-900 border-2 border-primary shadow-md z-0">
          {/* Sillons */}
          <div className="absolute inset-1 rounded-full border border-gray-700" />
          <div className="absolute inset-2 rounded-full border border-gray-700" />
          <div className="absolute inset-3 rounded-full border border-gray-700" />

          {/* Label */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary" />

          {/* Trou */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-900" />
        </div>

        {/* Bras de platine */}
        <div
          className="
            absolute
            top-3 right-0
            w-8 h-1
            origin-[90%_50%]
            rotate-[-60deg]
            bg-gray-300
            rounded-full
            shadow-sm
            animate-vinyl-tonearm
            z-10

            before:content-['']
            before:absolute
            before:right-0
            before:top-1/2
            before:-translate-y-1/2
            before:w-2
            before:h-2
            before:rounded-full
            before:bg-gray-400

            after:content-['']
            after:absolute
            after:left-0
            after:top-1/2
            after:-translate-y-1/2
            after:w-1.5
            after:h-1.5
            after:rounded-sm
            after:bg-primary-600
          "
        />

        {children}
      </div>

      {/* Nom du site */}
      <span className="text-2xl font-bold text-primary">{siteName}</span>
    </div>
  )
}
