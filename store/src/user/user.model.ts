import { IUser } from '@drivingo/models';

export interface IStoreUser extends IUser {
    isLoggedIn: boolean;
}
