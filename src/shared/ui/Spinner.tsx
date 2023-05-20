import React from 'react'
import {Icon24Spinner} from '@vkontakte/icons'

export default function Spinner(){
    return <div className={'w-full h-full flex items-center justify-center'}>
        <Icon24Spinner className={'animate-spin'} />
    </div>
}