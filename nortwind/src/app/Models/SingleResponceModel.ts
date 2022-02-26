import { ResponceModel } from "./responceModel";

export interface SingleResponceModel<T> extends ResponceModel{
    data:T
}