import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

export default function Display({className, size = 'm', children, ...rest}: props){
    return <h1
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--display-small',
            size === 'm' && 'typography--display-medium',
            size === 'l' && 'typography--display-large'
        )}
    >
        {children}
    </h1>
}