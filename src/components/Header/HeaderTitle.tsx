import { Typography } from "../Typography";

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {
    return <Typography fontSize={18}>{title}</Typography>;
};
