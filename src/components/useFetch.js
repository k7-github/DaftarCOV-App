import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, abortCont.signal)
    .then (res => {
        if (!res.ok) {
            throw Error ("Data from the DaftarCOV database cannot be fetched.")
        }
        return res.json()
    })
    .then (data => {
        setLoading(false)
        setData(data)
        setError(null)
    })
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
        } else {
            setLoading(false)
            setError(err.message)
        }

        return { data, loading, error }
    })
  })
}
