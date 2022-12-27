//import Redis from 'ioredis';
import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: 'https://eu2-proud-phoenix-30385.upstash.io',
    token: 'AXaxASQgYTU5MTkyZWQtNWVlNS00NWIwLTk0NjYtZWRiMGI0YmNmY2YyNzc1YTE4NDc0YjhiNDE4NGE2YzVhY2IwYTVmOTJhNjA=',
    
  })

export default redis;