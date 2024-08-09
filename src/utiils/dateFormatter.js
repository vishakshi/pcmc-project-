import moment from "moment";

export const getFormatDate = date => date ? moment(date).format("DD-MM-YYYY") : "NA";

export const getRemainingTime = (targetDate) => {

    const now = moment();
    const target = moment(targetDate);

    const duration = moment.duration(target.diff(now));

    const timeValues = [
        { type: 'days', value: duration.days() },
        { type: 'hours', value: duration.hours() },
        { type: 'minutes', value: duration.minutes() },
        { type: 'seconds', value: duration.seconds() }
    ];

    return timeValues;
}

export const isTwoDaysEarlier = (date) => {
    const endDate = moment(date).startOf('day')
    const twoDaysEarlier = moment().subtract(2,'days').startOf('day')
    console.log(twoDaysEarlier.format(),endDate.format())
     return endDate.isBefore(twoDaysEarlier);
}
