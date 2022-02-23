/* eslint-disable import/no-anonymous-default-export */
import { useContext } from "react";
import { ContextData } from '../contexts/DataProvider';

export default () => useContext(ContextData);