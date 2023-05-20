import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

export default function Headline({className, size = 'm', children, ...rest}: props){
    return <h2
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--headline-small',
            size === 'm' && 'typography--headline-medium',
            size === 'l' && 'typography--headline-large'
        )}
    >
        {children}
    </h2>
}