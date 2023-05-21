export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    password?: string;
    role: 'shop' | 'customer' | 'shipper';
}
