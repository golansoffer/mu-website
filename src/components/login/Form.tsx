import {z} from "zod";
import {useForm} from "@tanstack/react-form";
import {TextInput} from "../inputs/text/root";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {fetcher} from "../../api/root";
import Button from "../buttons/primary/Root";
import {useCallback} from "react";
import {QUERY_KEYS} from "../../constants/query_keys";

const loginFormTitles = [
    "Welcome Back, Hero",
    "Back to the Battle",
    "Back to the Realm",
    "Resume Your Journey",
    "Your Path Awaits",
    "Welcome to the Arena",
    "The Adventure Resumes",
    "Continue Your Story"
];

type LoginPayload = {
    username: string;
    password: string;
}

const userSchema = z
    .object({
        username: z.string().min(4, "Invalid username."),
        password: z.string().min(8, "Invalid password."),
    });

type User = z.infer<typeof userSchema>;

export function LoginForm() {
    const clientQuery = useQueryClient();

    const form = useForm<User>({
        defaultValues: {
            username: '',
            password: '',
        },
        onSubmit: async function ({value}) {
            await mutateAsync(value);
        },
        validators: {
            onChange: userSchema,
        }
    });

    const {mutateAsync} = useMutation({
        mutationFn: async function (values: LoginPayload) {
            const {token} = await fetcher<{ token: string }, LoginPayload>('login', {
                method: 'POST',
                body: JSON.stringify(values),
            });
            localStorage.setItem('token', token);
            clientQuery.invalidateQueries({
                queryKey: [QUERY_KEYS.CURRENT_USER]
            });
        },
        onSuccess: function () {
            form.reset();
        }
    });

    const submitHandler = useCallback(function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
    }, [form]);


    return (
        <form onSubmit={submitHandler}>
            <form.Field name="username">
                {function (field) {
                    return (
                        <TextInput label="Username" name={field.name} value={field.state.value}
                                   onChange={field.handleChange}
                                   onBlur={field.handleBlur}/>
                    )
                }}
            </form.Field>
            <form.Field name="password">
                {function (field) {
                    return (
                        <TextInput label="Password" name={field.name} value={field.state.value}
                                   onChange={field.handleChange}
                                   onBlur={field.handleBlur}/>
                    )
                }}
            </form.Field>

            <Button>GO</Button>
        </form>
    );
}