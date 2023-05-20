import React from 'react'
import classNames from 'classnames'

interface props{
    className?: string
}

const Logo = ({className}: props) => (
    <div className={classNames('[&>*]:lg:hover:rotate-45 [&>*]:lg:hover:p-4 [&>*]:lg:hover:scale-[0.80] [&>*>*]:lg:hover:-rotate-90', className)}>
        <div className={'w-[60px] h-[60px] p-[26px] bg-ui-primary-container flex items-center justify-center rounded-lg cursor-pointer duration-200'}>
            <div className={'bg-ui-primary-container-contrast w-full h-full duration-300'} />
        </div>
    </div>
)

export default Logo