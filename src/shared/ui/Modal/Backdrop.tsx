import React from 'react'
import classNames from 'classnames'

interface props {
    onClick(): void,
    show: boolean
}

export default function Backdrop({show, onClick}: props) {
    return <div
        title={'Закрыть'}
        aria-hidden
        onClick={onClick}
        className={classNames(
            'w-full bg-ui-background-contrast absolute h-full top-0 left-0 cursor-pointer max-lg:hidden duration-300',
            show && 'opacity-30',
            !show && 'opacity-0'
        )}
    />
}