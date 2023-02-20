import { useQuery } from 'react-query'
import { QUERIES, QUERY } from '../../../api'

export function TestingPage() {
    const { key, fn } = QUERY[QUERIES.GET_PRODUCT]

    const { status, data, error, isFetching } = useQuery(key, fn, {
        refetchInterval: 600000,
    })
    console.log({ status, isFetching, error, data })

    return status === 'loading' ? (
        <div>Loading</div>
    ) : status === 'error' ? (
        <div>Error</div>
    ) : (
        <div>
            <h3>TestingPage</h3>
        </div>
    )
}
