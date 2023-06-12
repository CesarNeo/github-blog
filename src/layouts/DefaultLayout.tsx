import { Outlet } from 'react-router-dom'

import githubBlogLogo from '../assets/logo.svg'

export function DefaultLayout() {
  return (
    <main className="h-screen w-screen">
      <header className="relative -z-10 flex h-[18.5rem] bg-[url(../src/assets/cover.svg)] bg-cover bg-center bg-no-repeat">
        <img
          src={githubBlogLogo}
          alt="Github Blog logo"
          className="absolute left-1/2 top-16 w-36 -translate-x-1/2"
        />
      </header>
      <div className="z-10 mx-auto -mt-24 max-w-4xl">
        <Outlet />
      </div>
    </main>
  )
}
