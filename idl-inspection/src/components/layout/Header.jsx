import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router'
import { COMPANY, COMPANY_PHONE_HREF, ROUTES } from '@/constants'
import { SERVICE_INDEX } from '@/data/serviceIndex'
import { COURSE_INDEX } from '@/data/courseIndex'
import { openHashTarget } from '@/utils'

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
    )
}

// Top-level navigation links rendered on both desktop and mobile menus.
// `children` turns an entry into a desktop dropdown; the parent stays a real
// link. `mobileChildren: false` keeps those sub-links out of the hamburger
// menu, so a long list does not bury the top-level items on a phone.
const NAV_LINKS = [
    { label: 'Home',             to: ROUTES.HOME             },
    {
        label: 'Services',
        to: ROUTES.SERVICES,
        // Built from the services data so the menu cannot drift out of sync
        // with the accordion panels on the page.
        children: SERVICE_INDEX.map(({ id, title }) => ({
            label: title,
            to: `${ROUTES.SERVICES}#${id}`,
        })),
    },
    {
        label: 'NDT Training',
        to: ROUTES.NDT_TRAINING,
        children: COURSE_INDEX.map(({ id, title }) => ({
            label: title,
            to: `${ROUTES.NDT_TRAINING}#${id}`,
        })),
        // Ten courses would dominate the mobile menu, so it links to the page
        // and lets the accordion do the work there.
        mobileChildren: false,
    },
    { label: 'NDT Examinations', to: ROUTES.NDT_EXAMINATIONS },
    { label: 'About Us',         to: ROUTES.ABOUT            },
    { label: 'Contact',          to: ROUTES.CONTACT          },
]

// ── Nav link with animated underline + active state ───────────────────────────

const NAV_ITEM_BASE = `relative py-1.5 text-base font-semibold tracking-wide whitespace-nowrap transition-colors duration-200
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-primary
     after:transition-all after:duration-300 after:ease-out`

const NAV_ITEM_ACTIVE = 'text-primary after:w-full after:bg-primary'
const NAV_ITEM_IDLE =
    'text-base-content/70 hover:text-base-content after:w-0 hover:after:w-full'

function NavItem({ label, to, onClick }) {
    return (
        <NavLink
            to={to}
            end={to === ROUTES.HOME}
            onClick={onClick}
            className={({ isActive }) =>
                `${NAV_ITEM_BASE} ${isActive ? NAV_ITEM_ACTIVE : NAV_ITEM_IDLE}`
            }
        >
            {label}
        </NavLink>
    )
}

// ── Nav item with a hover/focus dropdown ──────────────────────────────────────

/**
 * `flipped` is false while the panel is dismissed, so the chevron does not sit
 * upside down pointing at a menu that is no longer showing.
 */
function ChevronIcon({ flipped = true }) {
    return (
        <svg className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200
                         ${flipped ? 'group-hover:rotate-180 group-focus-within:rotate-180' : ''}`}
             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
    )
}

/**
 * Dropdown opens on hover and on keyboard focus. Visibility is CSS-driven so
 * there is no open state to manage, with one exception: after a click the
 * pointer is still sitting inside the panel, so :hover stays true and the menu
 * would hang open over the page the user just navigated to. `dismissed` force-
 * hides it until the pointer leaves, which resets it for the next hover.
 *
 * The parent stays a real link to the section page, so clicking "Services"
 * still works rather than only toggling a menu.
 */
function NavDropdown({ label, to, items }) {
    const { pathname } = useLocation()
    // NavLink's isActive would not fire for the parent when the URL carries a
    // hash from a child link, so match on the path directly.
    const isActive = pathname === to

    const [dismissed, setDismissed] = useState(false)

    const handleChildClick = (event) => {
        openHashTarget(event)
        setDismissed(true)
        // Drop focus, or focus-within would hold the panel open for keyboard
        // and click-focus users even with `dismissed` set.
        event.currentTarget.blur()
    }

    return (
        <div
            className="group relative"
            onPointerLeave={() => setDismissed(false)}
        >
            <Link
                to={to}
                // The parent navigates too, so it dismisses the panel as well.
                onClick={(event) => {
                    setDismissed(true)
                    event.currentTarget.blur()
                }}
                className={`${NAV_ITEM_BASE} flex items-center gap-1.5
                            ${isActive ? NAV_ITEM_ACTIVE : NAV_ITEM_IDLE}`}
            >
                {label}
                <ChevronIcon flipped={!dismissed} />
            </Link>

            {/* pt-3 bridges the gap between the trigger and the panel so the
                pointer does not cross unhovered space on the way down. */}
            <div
                className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3
                            transition-all duration-200 ease-out
                            ${dismissed
                                ? 'invisible opacity-0'
                                : `invisible opacity-0
                                   group-hover:visible group-hover:opacity-100
                                   group-focus-within:visible group-focus-within:opacity-100`
                            }`}
            >
                <ul className="min-w-[15rem] rounded-box border border-base-200 bg-base-100 p-2 shadow-lg">
                    {items.map(({ label: childLabel, to: childTo }) => (
                        <li key={childTo}>
                            <Link
                                to={childTo}
                                onClick={handleChildClick}
                                className="block rounded-lg px-4 py-2.5 text-sm font-semibold
                                           text-base-content/70 transition-colors duration-150
                                           hover:bg-base-200 hover:text-base-content"
                            >
                                {childLabel}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

export function Header() {
    // Mobile menu is controlled state (rather than DaisyUI's focus-based dropdown)
    // so the hamburger can toggle it closed as well as open.
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)
    const menuRef = useRef(null)

    // Close on outside click and on Escape.
    useEffect(() => {
        if (!menuOpen) return
        const onPointerDown = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu()
        }
        const onKeyDown = (e) => { if (e.key === 'Escape') closeMenu() }
        document.addEventListener('pointerdown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('pointerdown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [menuOpen])

    return (
        <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-200 shadow-sm">
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-8">

                {/* ── Wordmark ──
                    Swap for an <img> logo once the artwork exists; the flex-shrink-0
                    wrapper is already sized for it. */}
                <Link to={ROUTES.HOME} className="flex-shrink-0 group flex items-center">
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-primary
                                     transition-transform duration-300 ease-out group-hover:scale-105">
                        {COMPANY.name}
                    </span>
                </Link>

                {/* ── Desktop nav links ──
                    Absolutely centred on the bar rather than flex-1, so the wordmark's
                    width doesn't push the links off the page centre.
                    pointer-events-auto keeps them clickable. Six labels need more room
                    than the Cervus build's four, so the desktop row appears at xl
                    rather than lg. */}
                <nav className="hidden xl:flex items-center gap-8
                                absolute left-1/2 -translate-x-1/2
                                pointer-events-none [&>*]:pointer-events-auto">
                    {NAV_LINKS.map(({ label, to, children }) =>
                        children ? (
                            <NavDropdown key={to} label={label} to={to} items={children} />
                        ) : (
                            <NavItem key={to} label={label} to={to} />
                        ),
                    )}
                </nav>

                {/* ── Right-side actions ──
                    Only the hamburger lives here now, so this column is empty at xl
                    and up. Kept as a flex cell so justify-between still pins the
                    wordmark left. */}
                <div className="flex items-center gap-3">

                    {/* Mobile hamburger: the three bars morph into an X while the menu is
                        open, so the same button visibly doubles as the close control. */}
                    {/* dropdown-open is required: DaisyUI hides .dropdown-content with
                        display:none unless the dropdown is :focus-within or has this class.
                        We drive visibility from React state, so we set it explicitly. */}
                    <div className={`dropdown dropdown-end xl:hidden ${menuOpen ? 'dropdown-open' : ''}`}
                         ref={menuRef}>
                        <button type="button"
                                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen(o => !o)}
                                className="btn btn-ghost btn-md btn-square transition-colors duration-200">
                            <span className="relative block h-6 w-6" aria-hidden="true">
                                {/* Top bar → rotates to one stroke of the X */}
                                <span className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full
                                                  bg-current transition-all duration-300 ease-out
                                                  ${menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-[7px]'}`} />
                                {/* Middle bar → fades out */}
                                <span className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2
                                                  rounded-full bg-current transition-all duration-300 ease-out
                                                  ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                                {/* Bottom bar → rotates to the other stroke of the X */}
                                <span className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full
                                                  bg-current transition-all duration-300 ease-out
                                                  ${menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[7px]'}`} />
                            </span>
                        </button>
                        {menuOpen && (
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 w-64 p-2
                                       shadow-lg border border-base-200">
                            {NAV_LINKS.map(({ label, to, children, mobileChildren = true }) => (
                                <li key={to}>
                                    <Link to={to}
                                          onClick={closeMenu}
                                          className="text-base font-semibold hover:bg-base-200 transition-colors duration-150 rounded-lg py-3">
                                        {label}
                                    </Link>

                                    {/* Sub-links are listed inline rather than in a nested
                                        flyout: there is no hover on touch, and the menu is
                                        already a vertical list. Entries opting out with
                                        mobileChildren: false show only the parent link. */}
                                    {children && mobileChildren && (
                                        <ul className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-base-200 pl-3">
                                            {children.map(({ label: childLabel, to: childTo }) => (
                                                <li key={childTo}>
                                                    <Link to={childTo}
                                                          onClick={(e) => { openHashTarget(e); closeMenu() }}
                                                          className="text-sm font-medium text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors duration-150 rounded-lg py-2">
                                                        {childLabel}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <div className="h-px bg-base-200 my-2" />
                            <li>
                                <a href={COMPANY_PHONE_HREF}
                                   className="flex items-center gap-2 font-semibold text-primary
                                              hover:bg-primary/10 transition-colors duration-150 rounded-lg py-3">
                                    <PhoneIcon />
                                    {COMPANY.phone}
                                </a>
                            </li>
                        </ul>
                        )}
                    </div>

                </div>
            </div>
        </header>
    )
}
