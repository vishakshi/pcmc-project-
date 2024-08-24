import moment from "moment";

export const getFormatDate = date => date ? moment(date).format("DD-MM-YYYY") : "NA";

export const getRemainingTime = (targetDate) => {

    const now = moment();
    const target = moment(targetDate);

    const duration = moment.duration(target.diff(now));

    const timeValues = [
        { type: 'days', value: duration.days() < 0 ? 0 : duration.hours()},
        { type: 'hours', value: duration.hours() < 0 ? 0 : duration.hours()},
        { type: 'minutes', value: duration.minutes() < 0 ? 0 : duration.minutes() },
        { type: 'seconds', value: duration.seconds() < 0 ? 0 : duration.seconds() }
    ];

    return timeValues;
}

export const isTwoDaysEarlier = (date) => {
    const endDate = moment(date).startOf('day')
    const twoDaysEarlier = moment().subtract(2,'days').startOf('day')
     return endDate.isBefore(twoDaysEarlier);
}

export const todayDate = () => {
    return moment().format('DD MMM YYYY');
};

export const isEndGreaterFromToday = (date) => {
    const endDate = moment(date).startOf('day')
    const todayDate = moment().startOf('day')
    return endDate.isBefore(todayDate);
}
