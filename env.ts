import * as dotenv from 'dotenv'

export const getEnv = () => {
    dotenv.config({
        override: true,
        path: `resources/.env.${process.env.ENV}`
    })
}