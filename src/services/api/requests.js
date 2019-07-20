import { getRequest } from './rest'
import { getLangEndpoint } from './endpoints'

export const fetchLangRequest = langParam => {
    console.log('fetchLoginRequest goes', langParam)

    return getRequest({
        endpoint: langParam ? `${getLangEndpoint}?group=${langParam}` : `${getLangEndpoint}`
    }).then(data => data.json()).then(data => data.data)
}
