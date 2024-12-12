import { z } from 'zod'

export const contactFormSchema = z.object({
    /** お名前 */
    name: z.string().refine((value) => value.trim() !== '', {
        message: 'お名前は必須です。',
    }),
    /** メールアドレス */
    email: z.string().email({
        message: 'メールアドレスの形式が正しくありません。',
    }),
    /** お問い合わせ内容 */
    message: z.string().refine((value) => value.trim() !== '', {
        message: 'お問い合わせ内容は必須です。',
    }),
    /** ご所属 */
    affiliation: z
        .string()
        .optional()
        .transform((value) => value || null),
})
