import React from 'react'
import {Icon24ArticleOutline, Icon24CalendarOutline, Icon24Settings} from "@vkontakte/icons";
import {Panels} from "@/shared/model/useNavigation.ts";

const menu = [
    {name: 'Список', panel: Panels.LIST, icon: <Icon24ArticleOutline/>},
    {name: 'Календарь', panel: Panels.CALENDAR, icon: <Icon24CalendarOutline/>},
    {name: 'Настройки', panel: Panels.SETTINGS, icon: <Icon24Settings />}
]

export default menu