import { int } from './../type/type'

export default function HasZero(num: int | string): boolean
{
    if (num === 0)
        return true;

    else
        return false;
}