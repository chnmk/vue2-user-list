export default {
  state: {
    message: "Hello Vuex!",
    users: [],
    userAlbums: [],
    userPhotos: [],
    userPosts: [],
  },
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
    async fetchData(context) {

      function fetchFunction(data_type){
        const url = 'https://jsonplaceholder.typicode.com/' + data_type
        const commitString = data_type + 'Fetch'
        fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          context.commit(commitString, data)
        });
      }

      fetchFunction("users")
      fetchFunction("albums")
      fetchFunction("photos")
      fetchFunction("posts")
    }
  },
  getters: {
    getUserName: state => {
      // https://jsonplaceholder.typicode.com/users
      return state.users.map(a => a.name)
    },
    getAlbums: state => {
      // https://jsonplaceholder.typicode.com/albums
      return state.userAlbums.map(a => a.title)
    },
    /*
    getPhotos: state => {
       https://jsonplaceholder.typicode.com/photos
    },
    getPostsTitle: state => {
      // https://jsonplaceholder.typicode.com/posts
      return state.userPosts.map(a => a.title)
    },
    */
  }
}