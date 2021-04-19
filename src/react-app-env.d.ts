/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production',
        REACT_APP_APPLE_PAY_ENDPOINT: string,
    }
}