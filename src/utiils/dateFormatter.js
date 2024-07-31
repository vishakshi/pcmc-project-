import moment from "moment";

export const getFormatDate = date => date ? moment(date).format("DD-MM-YYYY") : "NA";
