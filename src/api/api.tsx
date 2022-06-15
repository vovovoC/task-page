import store from './config/Storage';
import { apiInstance } from "./apiInstance";

export const login = async (body: Record<string, string>) => {
    const res = await apiInstance.post('/', body);
    store.set('token', res.data.access);
    store.set('refresh_token', res.data.refresh);
    return res.data;
};