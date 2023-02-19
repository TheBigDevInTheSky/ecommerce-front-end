import axios from 'axios'

interface REQUEST_METHOD {
    GET: String
    POST: String
    PUT: String
    DELETE: String
}

export const REQUEST_METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
}

export const REQUEST = {
    [REQUEST_METHOD.GET]: getRequest,
    [REQUEST_METHOD.POST]: postRequest,
    [REQUEST_METHOD.PUT]: putRequest,
    [REQUEST_METHOD.DELETE]: deleteRequest,
}

const apiURL = 'http://localhost:3000/'

export async function getRequest(endpoint = '', headers = {}) {
    const url = apiURL + endpoint

    const result = await axios.get(url, headers)

    return result.data
}

export async function postRequest(endpoint = '', headers = {}) {
    const url = apiURL + endpoint

    const result = await axios.post(url, headers)

    return result.data
}

export async function putRequest(endpoint = '', headers = {}) {
    const url = apiURL + endpoint

    const result = await axios.put(url, headers)

    return result.data
}

export async function deleteRequest(endpoint = '', headers = {}) {
    const url = apiURL + endpoint

    const result = await axios.delete(url, headers)

    return result.data
}
