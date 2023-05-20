import {create} from "zustand";

interface AuthStore {
    id: string,
    vkid: number,
    setData(payload: {vkid: number, id: string}): void
}

const useStore = create<AuthStore>((setState) => ({
    id: '',
    vkid: 0,
    setData(payload: { vkid: number; id: string }) {
        setState({vkid: payload.vkid, id: payload.id}, false)
    }
}))