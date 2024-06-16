import React from 'react';
import { isAfter, subDays, subMonths, subYears } from 'date-fns';
import { DateRangePicker } from 'rsuite';

const ChartDateRangePicker = ({ date, setDate }) => {
    const ranges = [
        {
            label: 'Последние 7 дней',
            value: [subDays(new Date(), 7), new Date()]
        },
        {
            label: 'Последний месяц',
            value: [subMonths(new Date(), 1), new Date()]
        },
        {
            label: 'Последний год',
            value: [subYears(new Date(), 1), new Date()]
        }
    ];

    return (
        <DateRangePicker
            format="HH:mm dd.MM.yyyy"
            size="lg"
            value={date}
            onChange={setDate}
            ranges={ranges}
            disabledDate={(date) => isAfter(date, new Date())}
            cleanable={false}
        />
    );
};

export default ChartDateRangePicker;
