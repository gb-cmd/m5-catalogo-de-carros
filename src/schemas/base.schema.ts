import { z } from "zod";

export const baseSchema = z.object({
    id: z.string()
});