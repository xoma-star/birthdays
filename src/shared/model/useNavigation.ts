import {create} from "zustand";

export enum Panels {
    LIST = "LIST",
    CALENDAR = "CALENDAR",
    SETTINGS = "SETTINGS"
}

interface NavigationStore {
    activePanel: Panels,
    setActivePanel(payload: Panels): void
}

const useNavigation = create<NavigationStore>((setState) => ({
    activePanel: Panels.LIST,
    setActivePanel(payload: Panels) {
        setState({activePanel: payload}, false)
    }
}))

export default useNavigation