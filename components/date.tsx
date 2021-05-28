import { parseISO, format } from "date-fns";
import { VFC } from "react";

interface Props {
  dateString: string;
}

const Date: VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};
export default Date;
