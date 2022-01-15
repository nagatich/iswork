const URL = 'http://0.0.0.0:8000/'

type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'

interface Body {
  [key: string]: string | number | string[] | number[] | Body
}

interface Options {
  headers?: { [key: string]: string }
  body?: Body
}

const removeAccessToken = () => {
  localStorage.removeItem('token')
  document.cookie = 'token='
}

export const request = async <T = any>(method: Method, uri: string, options: Options = {}): Promise<T> => {
  const url = `${URL}${uri}`
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  }
  const accessToken = localStorage.getItem('token')
  if (accessToken) {
    headers.Authorization = `Token ${accessToken}`
    document.cookie = `token=${accessToken}`
  }

  const req = await fetch(url, {
    method,
    headers: {
      ...headers,
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })
  if (req.ok) {
    return req.json()
  }
  if (req.status === 401 || req.status === 403) {
    removeAccessToken()
  }
  try {
    const json = await req.json()
    if (json.error) {
      throw new Error(json.error)
    }
  } catch (error) {
    const e = error as Error
    if (e.name !== 'FetchError') {
      throw e
    }
  }
  throw new Error(req.statusText)
}
