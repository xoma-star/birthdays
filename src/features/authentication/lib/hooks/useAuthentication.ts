import bridge from "@vkontakte/vk-bridge";
import pb from "@/shared/api";

const useAuthentication = () => {
    const signup = async (vkid: number, sign: string) => {
        try {
            await pb.collection('users').create({username: vkid.toString(), password: sign, passwordConfirm: sign})
        }
        catch (e: unknown) {
            if (e && typeof e === 'object') {
                if ('status' in e) {
                    if (e.status === 400) {
                        console.log('signup eror')
                    }
                }
            }
        }
    }
    const login = async () => {
        try {
            const vkParams = await bridge.send('VKWebAppGetLaunchParams')
            console.log(vkParams)
            try {
                const response = await pb.collection('users').authWithPassword(vkParams.vk_user_id.toString(), vkParams.sign)
                console.log(response)
            }
            catch (e: unknown) {
                if (e && typeof e === 'object') {
                    if ('status' in e) {
                        if (e.status === 400) {
                            await signup(vkParams.vk_user_id, vkParams.sign)
                        }
                    }
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return {
        login
    }
}

export default useAuthentication