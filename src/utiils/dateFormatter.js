import moment from "moment";

export const getFormatDate = date => date ? moment(date).format("DD-MM-YYYY") : "NA";

export const getRemainingTime = (targetDate) => {

    const now = moment();
    const target = moment(targetDate);

    const duration = moment.duration(target.diff(now));

    const timeValues = [
        { type: 'Days', value: duration.days() },
        { type: 'Hours', value: duration.hours() },
        { type: 'Minutes', value: duration.minutes() },
        { type: 'Seconds', value: duration.seconds() }
    ];

    return timeValues;
}
