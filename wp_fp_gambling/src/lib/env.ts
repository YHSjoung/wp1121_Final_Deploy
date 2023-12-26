import z from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_POSTGRES_URL: z.string().url(),
    NEXT_PUBLIC_CWA_DATA_KEY: z.string(),
});
type Env = z.infer<typeof envSchema>;

export const env: Env = {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
    NEXT_PUBLIC_POSTGRES_URL: process.env.NEXT_PUBLIC_POSTGRES_URL!,
    NEXT_PUBLIC_CWA_DATA_KEY: process.env.NEXT_PUBLIC_CWA_DATA_KEY!,
};

envSchema.parse(env);