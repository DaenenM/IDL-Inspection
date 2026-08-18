import { apiClient } from '@/lib/apiClient'

/**
 * Inspection API calls, grouped by domain. Components import these rather
 * than building endpoint strings themselves, so a backend rename stays
 * contained to this file.
 */
export const inspectionService = {
  list: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return apiClient.get(`/inspections${query ? `?${query}` : ''}`)
  },

  getById: (id) => apiClient.get(`/inspections/${id}`),

  create: (payload) => apiClient.post('/inspections', payload),

  update: (id, payload) => apiClient.put(`/inspections/${id}`, payload),

  remove: (id) => apiClient.delete(`/inspections/${id}`),
}
