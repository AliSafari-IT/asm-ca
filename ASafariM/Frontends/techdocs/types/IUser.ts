export interface IUser {
    id: number; // Maps to BIGINT UNSIGNED in MySQL, which is generally safe as a number in JS/TS
    name: string; // VARCHAR(255)
    email: string; // VARCHAR(255)
    email_verified_at: Date | null; // TIMESTAMP, nullable
    password: string; // VARCHAR(255)
    remember_token: string | null; // VARCHAR(100), nullable
    created_at: Date | null; // TIMESTAMP, nullable
    updated_at: Date | null; // TIMESTAMP, nullable
    username: string; // VARCHAR(100)
  }
  