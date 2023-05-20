import React from 'react'
import classNames from 'classnames'
import NavButton from '@/shared/ui/NavButton'
import menu from '../constants'
import Logo from '@/shared/ui/misc/Logo'
import useNavigation from "@/shared/model/useNavigation.ts";


const Header = () => {
    const activePanel = useNavigation(s => s.activePanel)
    const setActivePanel = useNavigation(s => s.setActivePanel)

    return (
        <header
            className={classNames(
                'lg:flex flex-shrink-0 items-start px-4 lg:pt-4 lg:gap-8 justify-between z-50',
                'max-lg:bottom-0 bg-ui-surface max-lg:shadow-elevation-2 max-lg:py-3.5 max-lg:w-full max-lg:h-[80px]'
            )}
        >
            <nav className={'flex flex-row lg:flex-col lg:gap-4 lg:justify-between max-lg:justify-around'}>
                <Logo className={'max-lg:hidden mb-10'} />
                {menu.map(x => (
                    <NavButton
                        onClick={() => setActivePanel(x.panel)}
                        isActive={activePanel === x.panel}
                        key={`${x.name}nav`}
                        icon={x.icon}
                        title={x.name}
                    >
                        {x.name}
                    </NavButton>
                ))}
            </nav>
        </header>
    )
}

export default Header