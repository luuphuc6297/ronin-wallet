export interface Assets {
    id: string;
    code: string;
    symbol: string;
    logo: string;
    amount: number;
}

export interface Wallet {
    id: string;
    assets: Assets[];
    createAt?: Date;
    updateAt?: Date;
}
