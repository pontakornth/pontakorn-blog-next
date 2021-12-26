import { useColorSchemePreference, useLocalStorage } from 'web-api-hooks'
import { useEffect, useLayoutEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from './Button'

// This statement somehow solves problem. 
// TODO: Fix this for real.
const IconMoon = dynamic(() => import('~icons/carbon/moon.jsx'))
const IconSun = dynamic(() => import('~icons/carbon/sun.jsx'))

type Theme = 'dark' | 'light'

export const DarkModeToggle = () => {
	// Preference from media query
	const mediaColor = useColorSchemePreference()
	// Preference from localStorage
	const [localColor, setLocalColor] = useLocalStorage<Theme>('dark')
	useEffect(() => {
		if (localColor === null) {
			setLocalColor(mediaColor)
		}
	}, [mediaColor])
	useEffect(() => {
		// Prefer local starage over media quer.y
		let isDark: boolean
		// There is no localStorage preference.
		if (localColor === null) {
			isDark = mediaColor === 'dark'
			setLocalColor(mediaColor as Theme)
		} else {
			isDark = localColor === 'dark'
		}
		document.documentElement.classList.remove('dark')
		if (isDark) {
			document.documentElement.classList.add('dark')
		}
	}, [localColor])
	const toggleDark = () => setLocalColor(color => color === 'dark' ? 'light' : 'dark')
	if (localColor === 'dark') {
		return (
			<Button tw="text-xl" onClick={toggleDark}>
				<IconMoon />
			</Button>
		)
	} else {
		return (
			<Button tw="text-xl" onClick={toggleDark}>
				<IconSun />
			</Button >

		)
	}

}