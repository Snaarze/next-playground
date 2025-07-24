import {z} from 'zod'


const schema = z.object({
    // id is not require as it will be incremented on the backend automatically
    name : z.string().min(3),
    price : z.number().min(1)
})

export default schema;