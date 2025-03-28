import { z } from 'zod';

// Define the schema for the login form
export const loginSchema =  z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})

export type LoginSchema = z.infer<typeof loginSchema>