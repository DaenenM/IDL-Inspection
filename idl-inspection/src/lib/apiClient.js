import { API_BASE_URL } from '@/constants'

/**
 * Thin fetch wrapper. This is the only place that knows about base URLs,
 * headers, and error shape -- feature code calls the services in
 * src/services instead of touching fetch directly.
 */

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

async function request(endpoint, { method = 'GET', body, headers, ...rest } = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    ...rest,
  })

  // 204 and other empty responses have no body to parse.
  const isJson = response.headers
    .get('content-type')
    ?.includes('application/json')
  const data = isJson ? await response.json() : null

  if (!response.ok) {
    throw new ApiError(
      data?.message ?? `Request failed with status ${response.status}`,
      response.status,
      data,
    )
  }

  return data
}

export const apiClient = {
  get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options) =>
    request(endpoint, { ...options, method: 'POST', body }),
  put: (endpoint, body, options) =>
    request(endpoint, { ...options, method: 'PUT', body }),
  patch: (endpoint, body, options) =>
    request(endpoint, { ...options, method: 'PATCH', body }),
  delete: (endpoint, options) =>
    request(endpoint, { ...options, method: 'DELETE' }),
}
