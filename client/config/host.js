export const baseurl = process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? process.env.NEXT_PUBLIC_LOCAL_URL : process.env.NEXT_PUBLIC_LIVE_URL
console.log(`Baseurl :${baseurl}`)