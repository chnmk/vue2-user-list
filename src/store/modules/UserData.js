export default {
  state: {
    users: [],
    userAlbums: [],
    userPhotos: [],
    userPosts: [],
  },

  // Записываем полученные изменения в state:
  mutations: {
    usersFetch(state, data) {
      state.users = data
    },
    albumsFetch(state, data) {
      state.userAlbums = data
    },
    photosFetch(state, data) {
      state.userPhotos = data
    },
    postsFetch(state, data) {
      state.userPosts = data
    }
  },

  actions: {
    fetchData(context) {
      // Создаем функцию для получения данных "data_type" (users, userAlbums...):
      function fetchFunction(data_type){
        const url = 'https://jsonplaceholder.typicode.com/' + data_type
        const commitString = data_type + 'Fetch'
        fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // Вызываем нужный mutate:
          context.commit(commitString, data)
        });
      }

      // Вызываем функцию под все нужные нам данные:
      fetchFunction("users")
      fetchFunction("albums")
      fetchFunction("photos")
      fetchFunction("posts")
    }
  }
}