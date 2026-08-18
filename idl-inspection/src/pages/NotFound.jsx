import { Link } from 'react-router'
import { ROUTES } from '@/constants'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-24 text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-base-content/70">That page does not exist.</p>
      <Link to={ROUTES.HOME} className="btn btn-primary btn-md mt-2 font-semibold">
        Go home
      </Link>
    </div>
  )
}
