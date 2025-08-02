import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import NavLink from '../NavLink'

describe('NavLink Component', () => {
  // Clean up after each test to avoid DOM conflicts
  afterEach(() => {
    cleanup()
  })

  it('renders correctly with label and icon', () => {
    render(
      <NavLink
        href="/dashboard"
        label="Dashboard"
        icon={<span data-testid="test-icon">Icon</span>}
      />
    )

    // Check if the link renders with correct href
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/dashboard')

    // Check if the label is rendered
    expect(screen.getByText('Dashboard')).toBeTruthy()

    // Check if the icon is rendered
    expect(screen.getByTestId('test-icon')).toBeTruthy()
  })

  it('applies active styles when isActive is true', () => {
    render(
      <NavLink
        href="/dashboard"
        label="Dashboard"
        icon={<span>Icon</span>}
        isActive={true}
      />
    )

    const link = screen.getByRole('link')
    expect(link.className).toContain('bg-purple-100')
    expect(link.className).toContain('text-purple-700')
  })

  it('applies inactive styles when isActive is false', () => {
    render(
      <NavLink
        href="/dashboard"
        label="Dashboard"
        icon={<span>Icon</span>}
        isActive={false}
      />
    )

    const link = screen.getByRole('link')
    expect(link.className).toContain('text-gray-700')
    expect(link.className).toContain('hover:bg-gray-100')
  })
})
