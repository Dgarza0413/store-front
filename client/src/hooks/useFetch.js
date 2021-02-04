import { useState } from 'react'

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    const postFetch = async (url = '', payload = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ ...payload })
        });
        return response.json();
    }

    const handleGetFetch = async (url, payload) => {
        try {
            await setIsLoading(true)
            const res = await fetch(url, payload);
            const data = await res.json();
            return setResponse(data)
        } catch (error) {
            await setError({ error: error, msg: 'something went wrong with fetch' })
        } finally {
            await setIsLoading(false)
        }
    }

    const handlePostFetch = async (url, payload) => {
        try {
            await setIsLoading(true)
            const res = await postFetch(url, payload);
            await setResponse(res, { msg: "Post was successful" });
            return res
        } catch (error) {
            await setError({ error: error, msg: "error has occurred with posting data" })
        } finally {
            await setIsLoading(false)
        }
    }

    const handleManyGetFetch = async (urls, payload) => {
        try {
            await setIsLoading(true)
            const res = await Promise.all(urls.map(e => fetch(e)))
            const data = await Promise.all(res.map(e => e.json()))
            await setResponse(data)
            return data;
        } catch (error) {
            await setError({ error: error, msg: "error has occurred with get data" })
        } finally {
            await setIsLoading(false)
        }
    }

    return [response, isLoading, error, handleGetFetch, handlePostFetch, handleManyGetFetch]
}

export default useFetch
