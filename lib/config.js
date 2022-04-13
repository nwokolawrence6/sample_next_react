const dev = process.env.NODE_ENV === "development";
export const authRoute = dev ? "http://localhost:8881" : "https://auth.cloudbooks.ng";
export const serverConfig = dev ? "http://localhost:3000" : "https://server.cloudbooks.ng";
