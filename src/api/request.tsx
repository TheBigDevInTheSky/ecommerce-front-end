import axios from 'axios'

export async function getRequest(endpoint = '', headers = {}) {
    const url = process.env.REACT_APP_API_URL + endpoint

    const result = await axios.get(url, headers)

    return result.data
}
