import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import courseSnapCommand from './course-snap';

await yargs(hideBin(process.argv))
    .command(courseSnapCommand)
    .strictCommands()
    // .fail((msg, err) => abort(err.message))
    .showHelpOnFail(false, 'Specify --help for available options')
    .demandCommand(1).argv;
