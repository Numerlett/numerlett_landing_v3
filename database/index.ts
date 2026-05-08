import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

global._mongooseCache ??= { conn: null, promise: null };

export async function connectDB(): Promise<typeof mongoose> {
  if (global._mongooseCache.conn) return global._mongooseCache.conn;

  if (!global._mongooseCache.promise) {
    const uri = process.env.DATABASE_URL;
    if (!uri) throw new Error("DATABASE_URL is not set");
    global._mongooseCache.promise = mongoose.connect(uri);
  }

  global._mongooseCache.conn = await global._mongooseCache.promise;
  return global._mongooseCache.conn;
}
