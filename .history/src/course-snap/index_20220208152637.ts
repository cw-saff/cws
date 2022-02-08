import { createCommand } from '../../utils';
import { Args } from './types';
import handler from './handler';

export default createCommand<Args>({
    command: 'course-snap <path>',
    builder: {
        device: {
            array: true,
            type: 'string',
            default: 'Desktop Chrome',
        },
        listDevices: {
            type: 'boolean',
        },
        courseUrl: {
            type: 'string',
            default: 'http://127.0.0.1:8080/',
        },
    },
    handler,
});
