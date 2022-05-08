export interface User{
    id: string;
    email: string;
    address: string;
    name: {
        firstname: string,
        lastname: string,
    };
}