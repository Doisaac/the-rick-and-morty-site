import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router'

const menuItems = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'search',
    to: '/search',
  },
] as const

export const CustomNavigation = () => {
  const { pathname } = useLocation()

  const isActive = (path: string) => {
    return path === pathname
  }

  return (
    <NavigationMenu className="pb-20">
      <NavigationMenuList className="gap-1">
        {menuItems.map((menuItem) => {
          return (
            <NavigationMenuItem key={menuItem.to}>
              <NavigationMenuLink
                asChild
                className={cn(
                  'capitalize text-white hover:bg-purple-700/80 rounded-md',
                  isActive(menuItem.to)
                    ? 'bg-purple-700/80 focus:bg-purple-700/80'
                    : 'focus:bg-transparent'
                )}
              >
                <Link to={menuItem.to}>{menuItem.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
