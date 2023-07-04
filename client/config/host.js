export const baseurl = process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? process.env.NEXT_PUBLIC_LOCAL_URL : process.env.NEXT_PUBLIC_LIVE_URL
export const publickey = process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? process.env.NEXT_PUBLIC_LOCAL_KEY : process.env.NEXT_PUBLIC_LIVE_KEY
console.log(`Baseurl :${baseurl}`)