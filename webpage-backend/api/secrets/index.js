module.exports = {
   BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
   NODE_ENV: process.env.NODE_ENV || 'development',
   PORT: process.env.PORT || 9000,
   JWT_SECRET: process.env.JWT_SECRET || 'keep it secret!',
   DATABASE_URL: process.env.DATABASE_URL || 'postgres://bsrttdyqpplulw:36300be594c8b247d2cb9676662350b4f91d0fa071716c0c798810abcf2184ac@ec2-54-235-98-1.compute-1.amazonaws.com:5432/d35fh9majr392',
};
