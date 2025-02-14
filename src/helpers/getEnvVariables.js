



export const getEnvVariables = () => ({
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_ANOTHER_VAR: import.meta.env.VITE_ANOTHER_VAR
});