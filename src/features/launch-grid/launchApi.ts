import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const launchApi = createApi({
  reducerPath: 'launchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/'}),
  endpoints: (builder) => ({
    getAllLaunches: builder.query({
      query: (name) => `v5/${name}`
    }),
    getSpecificLaunch: builder.query({
      query: (id) => `v5/launches/${id}`
    })
  }),
})

export const {useGetAllLaunchesQuery, useGetSpecificLaunchQuery} = launchApi;