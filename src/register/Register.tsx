import {useForm} from "@tanstack/react-form";
import styles from './Register.module.css';
import {z} from "zod";

export function Register() {
    return <section>
        <h1 className={styles.form_title}>Register</h1>
        <RegisterForm/>
    </section>
}

const userSchema = z.object({
    username: z.string().min(4),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    securityCode: z.string().min(6),
    email: z.string().email(),
});

type User = z.infer<typeof userSchema>

export function RegisterForm() {

    const form = useForm<User>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            securityCode: '',
        },
        onSubmit: async ({value}) => {
            // Do something with form data
            console.log('success', value);
        },
        validators: {
            onChange: userSchema,
        },
    });
    console.log('form', form);
    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
            }}
        >
            <div className={styles.form_container}>
                <form.Field
                    name="username"
                    children={(field) => (
                        <input
                            name={field.name}
                            placeholder={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="password"
                    children={(field) => (
                        <input
                            name={field.name}
                            placeholder={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <input
                            name={field.name}
                            placeholder={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="securityCode"
                    children={(field) => (
                        <input
                            name={field.name}
                            placeholder={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <form.Field
                    name="email"
                    children={(field) => (
                        <input
                            name={field.name}
                            placeholder={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                />
                <button type="submit">Submit</button>
            </div>
        </form>

    )
}