'use server';

// This file can be used for Next.js Server Actions.
// The previous AI preference update action has been removed.
// For example:
//
// import { z } from 'zod';
//
// export async function submitSomeData(formData: FormData) {
//   const schema = z.object({
//     name: z.string().min(1),
//     email: z.string().email(),
//   });
//   const validatedFields = schema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//   });
//
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }
//
//   // Process the data, e.g., save to database
//   console.log('Data submitted:', validatedFields.data);
//   return { message: 'Data submitted successfully!' };
// }
