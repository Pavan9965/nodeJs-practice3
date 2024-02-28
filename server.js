const app = require('./app') // Assuming app.js is in the same directory

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
