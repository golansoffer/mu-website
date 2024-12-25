import {Link} from "@tanstack/react-router";
import {HTMLAttributes} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetcher} from "../../api/root";

type Response = {
    id: number;
    username: string;
}

type AuthBarProps = HTMLAttributes<HTMLDivElement>

export function AuthBar(props: AuthBarProps) {
    const {data, isPending} = useQuery<Response>({
        retry: false,
        queryKey: ['current_user'],
        queryFn: async function () {
            return await fetcher('me');
        },
    });

    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div {...props}>
            {data ? (
                <div>Hey, {data.username}</div>
            ) : (
                <div>
                    <Link to="/register" preload="viewport">
                        Login
                    </Link>
                    <br/>
                    <Link to="/register" preload="viewport">
                        Register
                    </Link>
                </div>
            )}
        </div>
    );
}