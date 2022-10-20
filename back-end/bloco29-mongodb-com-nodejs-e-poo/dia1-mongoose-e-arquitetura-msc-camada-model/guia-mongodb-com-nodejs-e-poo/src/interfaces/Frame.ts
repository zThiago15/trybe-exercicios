import { z } from 'zod';

const FrameZodSchema = z.object({
  material: z.string({ invalid_type_error: 'material must be boolean' }),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
});

type IFrame = z.infer<typeof FrameZodSchema>;

export default IFrame;
export { FrameZodSchema };