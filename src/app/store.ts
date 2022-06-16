import currencyApi from 'apis/currencies';
import userApis from 'apis/user';
import { Currency, User } from 'models';
import create from 'zustand';
import createContext from 'zustand/context';
import { devtools, persist } from 'zustand/middleware';

// export type StoreSlice<T extends object, E extends object = T> = (
//     set: SetState<E extends T ? E : E & T>,
//     get: GetState<E extends T ? E : E & T>
// ) => T;

// interface CurrencyProps {
//     currencies: Currency[];
//     storeCurrencies?: () => void;
// }

// interface UserProps {
//     user: User;
//     clearUser: () => void;
// }

// const createCurrencySlice: StoreSlice<CurrencyProps> = (set, get) => ({
//     currencies: [],
//     storeCurrencies: async () => {
//         const result = await currencyApi.getCurrencies();
//         set({ currencies: result.data });
//     },
// });

// const createUserSlice: StoreSlice<UserProps> = (set, get) => ({
//     user: initUser,
//     clearUser: () => set(() => ({ user: initUser })),
// });

// const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
//     ...createCurrencySlice(set, get),
//     ...createUserSlice(set, get),
// });
// const useStore = create(createRootSlice);
export interface RoninAppStoreState {
    user: User;
    currencies: Currency[];
    clearUser: () => void;
}

const initUser = {
    id: '',
    name: '',
    username: '',
    avatar: '',
    roninAddress: '',
};

const { Provider, useStore } = createContext<RoninAppStoreState | any>();

const createStore = () =>
    create()(
        devtools(
            persist(
                (set) => ({
                    user: initUser,
                    wallet: null,
                    currencies: [],
                    getCurrentUser: async () => {
                        const result = await userApis.getCurrentUser();
                        set({ user: result });
                    },
                    getWallet: async (roninAddress: string) => {
                        const result = await userApis.getWallet(roninAddress);
                        set({ wallet: result });
                    },
                    storeCurrencies: async () => {
                        const result = await currencyApi.getCurrencies();
                        set({ currencies: result.data });
                    },
                    clearUser: () => set(() => ({ user: initUser })),
                }),
                {
                    name: 'ronin-store',
                    getStorage: () => localStorage,
                }
            )
        )
    );

export { Provider, useStore, createStore };
