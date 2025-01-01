import {HTMLAttributes} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetcher} from "../../api/root";
//import {useModal} from "../modal/ModalContext";
import {QUERY_KEYS} from "../../constants/query_keys";

type Response = {
    id: number;
    username: string;
}

type AuthBarProps = HTMLAttributes<HTMLDivElement>

export function AuthBar(props: AuthBarProps) {
    const {data, isPending} = useQuery<Response>({
        retry: false,
        queryKey: [QUERY_KEYS.CURRENT_USER],
        queryFn: async function () {
            return await fetcher('me');
        },
    });

    //const {setModalContent} = useModal();

    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div {...props}>
            {data ? (
                <div>Hey, {data.username}</div>
            ) : (
                <div>no-auth</div>
            )}
        </div>
    );
}

/*
function Login() {
    return <section>
        <h3>LOGIN</h3>
        <LoginForm/>
    </section>
}*/
