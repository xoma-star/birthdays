import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

export default function Body({className, size = 'm', children, ...rest}: props){
    return <h5
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--body-small',
            size === 'm' && 'typography--body-medium',
            size === 'l' && 'typography--body-large'
        )}
    >
        {children}
    </h5>
}