const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://us1.prisma.sh/yuchengkai-9fc8f2/yck/dev',
  secret: 'omgplzdonttellanyone',
  debug: false
})

module.exports = db
