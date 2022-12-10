import axios from "axios";
import { DataTypes } from "../interfaces/DataTypes";
import { FollowTypes } from "../interfaces/FollowersTypes";
import { GetDataTypes } from "../interfaces/GetDataTypes";

export const getData = async ({ urlOrParams, setData }: GetDataTypes) => {
  const response = await axios(`${urlOrParams}`);
  const data: DataTypes | FollowTypes[] = response.data;

  return setData(data);
};