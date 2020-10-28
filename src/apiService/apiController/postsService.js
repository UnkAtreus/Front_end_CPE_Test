import apiService from '../apiService'

const apiPath = ''

export const postsController = (configService = {}) => {
  const service = apiService(configService)
  return {
    getPostList: (params) => {
      return service.get(`${apiPath}/posts/${params}`, params)
    },
  }
}
