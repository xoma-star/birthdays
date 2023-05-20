import Root from "./shared/ui/Root.tsx";
import {Header} from "./widgets/Header";
import View from "./shared/ui/View.tsx";
import Panel from "./shared/ui/Panel.tsx";
import useNavigation, {Panels} from "@/shared/model/useNavigation.ts";
import {useAuthentication} from "@/features/authentication";
import {useEffect} from "react";

function App() {
    const activePanel = useNavigation(s => s.activePanel)
    const {login} = useAuthentication()

    useEffect(() => {
        login()
    }, [])

    return <Root>
        <Header/>
        <View activePanel={activePanel}>
            <Panel id={Panels.LIST}>
                list
            </Panel>
            <Panel id={Panels.CALENDAR}>
                calendar
            </Panel>
            <Panel id={Panels.SETTINGS}>

            </Panel>
        </View>
    </Root>
}

export default App
