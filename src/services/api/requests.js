import { getRequest } from './rest'
import { getLangEndpoint } from './endpoints'
import { URL_PARAMS } from '../../constants'

export const fetchLangRequest = langParam => 
    getRequest({
        endpoint: URL_PARAMS[langParam]
            ? `${getLangEndpoint}?group=${URL_PARAMS[langParam]}`
            : `${getLangEndpoint}`
    })
    .then(data => data.json())
    .then(data => data.data)
