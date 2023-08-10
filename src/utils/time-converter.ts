import moment from 'moment';

export const timeConverter = (epochTime: string) => {
    const time = new Date(epochTime);
    const formattedTime = moment(time).fromNow();
    return formattedTime.toString();
};
