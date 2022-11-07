const baseUri = "http://jsonplaceholder.typicode.com/todos"

const app = Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            userId: ""
        }
        
    },

    methods: {
        // add methods here
        getAllPosts() {
            axios.get(baseUri)
            .then(response => {
                console.log("in function getAllPosts")
                console.log("status code: "+ response.status)

                this.posts = response.data

                console.log("length of the posts in array: " + this.posts.length)
            })
            .catch(error = (ex) => {
                this.posts = []
                this.error = ex.message
                console.log("Error:" + this.error)
            })
        },

        clearList() {
            this.posts = []
            this.error = null
            console.log("count posts: " + this.posts.length)
        },

        getByUserId(id) {
            axios.get(baseUri, {
                params: {
                    userId: id
                }
            })
            .then(response => {
                console.log("in function getByUserId")
                console.log("status code: " + response.status)

                this.posts = response.data

                console.log("length of the posts in array: " + this.posts.length)

            })
            .catch(error = (ex) => {
                this.posts = []
                this.error = ex.message
                console.log("Error:" + this.error)
            })
        }
    }
    
})