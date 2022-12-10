import { DataTypes } from "./DataTypes";
import { FollowTypes } from "./FollowersTypes";

export interface GetDataTypes {
  urlOrParams: string;
  setData: (value: React.SetStateAction<DataTypes | FollowTypes[]>) => void
}