import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside of .env.local'
  )
}

/*
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API route usage.
 */

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
};

const dbConnect = async () => {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((client) => client);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;