import PocketBase from 'pocketbase';
import { pocketbaseModel } from '../../model/pocketbase/pocketbaseModel';

const baseURL = pocketbaseModel.baseURL;
export const pb = new PocketBase(baseURL);