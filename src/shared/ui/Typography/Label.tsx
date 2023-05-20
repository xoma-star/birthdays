import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

export default function Label({className, size = 'm', children, ...rest}: props){
    return <h4
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--label-small',
            size === 'm' && 'typography--label-medium',
            size === 'l' && 'typography--label-large'
        )}
    >
        {children}
    </h4>
}