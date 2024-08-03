import React from 'react';

export default function Home() {
  return (
    <>
      <div className="h-screen text-center flex items-center justify-center">
        <div className=''>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to our Elite Ecommerce
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
