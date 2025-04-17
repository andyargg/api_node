import { z } from 'zod';

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: "Movie title must be a string",
        required_error: "movie title is required"
    }),
    year: z.number().int().positive().min(1900).max(2026),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().int().positive().min(0).max(10).default(0),
    poster: z.string().url(),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Crime'])
    )
});

export function validateMovie(input) {
    return movieSchema.safeParse(input);
}

export function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input);
}

