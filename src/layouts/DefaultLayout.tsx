import { Outlet } from 'react-router-dom'

import githubBlogLogo from '../assets/logo.svg'

export function DefaultLayout() {
  return (
    <main className="h-screen">
      <header className="relative -z-10 flex h-[200px] bg-[url(../src/assets/cover.svg)] bg-cover bg-center bg-no-repeat md:h-[18.5rem]">
        <img
          src={githubBlogLogo}
          alt="Github Blog logo"
          className="absolute left-1/2 top-10 w-24 -translate-x-1/2 md:top-16 md:w-36"
        />
      </header>
      <div className="z-10 mx-auto -mt-16 w-full max-w-4xl px-5 pb-32 md:-mt-24 md:px-0">
        <Outlet />
      </div>
    </main>
  )
}
