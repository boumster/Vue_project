
const { createApp } = Vue

const TaskApp = {
    data(){
        return{
            task: {
                'title': ''
            },
            tasks: []
        }
    },

    async created(){
        await this.getTasks()
    },

    methods: {
        
        async sendRequest(url, method, data){
            const myHeaders = new Headers({
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            })
      
            const response = await fetch(url, {
              method: method,
              headers: myHeaders,
              body: data
            })
      
            return response
          },

        async getTasks(){
            const response = await fetch(window.location, {
                method: 'get',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })

            this.tasks = await response.json()

        },
        
        async createTask(){
            await this.getTasks()
      
            await this.sendRequest(window.location + 'create', 'post', JSON.stringify(this.task))
      
            await this.getTasks()
      
            this.task.title = ''
          }
    },

    delimiters: ['{', '}'],
}


createApp(TaskApp).mount('#app')