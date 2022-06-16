export interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
    createAt?: Date;
    updateAt?: Date;
}

export interface LoginProps {
    password: string;
}
