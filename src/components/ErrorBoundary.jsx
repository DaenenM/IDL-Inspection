import { Component } from 'react'
import { Button } from '@/components/ui'

/**
 * Catches render errors below it so one broken component does not blank the
 * whole app. Must stay a class -- there is no hook equivalent.
 */
export class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Swap for your error reporter when you add one.
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
          <h1 className="text-2xl font-medium">Something went wrong</h1>
          <p className="opacity-70">{this.state.error.message}</p>
          <Button onClick={() => window.location.reload()}>Reload page</Button>
        </div>
      )
    }

    return this.props.children
  }
}
