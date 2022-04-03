import dayjs from 'dayjs';

export function getPersonName(person) {
    return `${person.name.first} ${person.name.last}`;
}

export function formatBirthDate(date) {
    return dayjs(date).format('DD-MM-YYYY');
}
