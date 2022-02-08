import { chromium, devices } from 'playwright';
import { Args, Course } from './types';
import { loadJsonFile } from 'load-json-file';
import { kebabCase } from 'lodash-es';
import chalk from 'chalk';

export default async (args: Args) => {
    const { path, device, listDevices, courseUrl } = args;

    if (listDevices) {
        console.log(Object.keys(devices).join('\n'));
        return;
    }

    if (!path.endsWith('course.json')) {
        throw new Error('Path must be to course.json');
    }

    for (const d of device) {
        if (!Object.keys(devices).includes(d)) {
            throw new Error(`"${d}" is not a recognised device`);
        }
    }

    const courseJson = await loadJsonFile<Course>(path);

    interface Page {
        id: string;
        url: string;
        file: string;
    }

    const pages: Page[] = [];

    console.log('Building page list');
    for (const unit of courseJson.units ?? []) {
        for (const page of unit.pages ?? []) {
            if (!page.pageID) {
                continue;
            }

            pages.push({
                id: page.pageID,
                url: `http://127.0.0.1:8080/#page/${page.pageID}`,
                file: `page_${page.pageID}.png`,
            });
        }
    }

    console.log('Launching browser');
    const browser = await chromium.launch();

    for (const d of device) {
        console.log(chalk.blueBright(`Opening on ${d}`));

        const deviceContext = devices[d];
        const deviceSlug = kebabCase(d);

        const context = await browser.newContext({
            ...deviceContext,
        });

        console.log('Creating new page');
        const browserPage = await context.newPage();

        console.log('Opening course');
        await browserPage.goto(courseUrl);

        console.log('Waiting');
        await browserPage.waitForLoadState('networkidle');

        for (const page of pages) {
            const prefix = `[${page.id?.padEnd(10, ' ')}]`;
            console.log(`${prefix} Loading`);
            await browserPage.goto(page.url);

            console.log(`${prefix} Waiting`);
            await browserPage.waitForLoadState('networkidle');
            await browserPage.waitForTimeout(100);

            console.log(`${prefix} Screenshotting`);
            await browserPage.screenshot({ path: `${deviceSlug}/${page.file}`, fullPage: true });
        }
    }

    console.log('Closing');
    await browser.close();
};
