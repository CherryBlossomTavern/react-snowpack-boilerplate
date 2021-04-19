export default {
  port: Number(process.env.PORT) || process.env.NODE_ENV === "development" ? 8081 : 8080,
}
