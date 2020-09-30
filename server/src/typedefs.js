import * as path from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const types = loadFilesSync(path.join(__dirname, './domains/**/typedef.graphql'));
export default mergeTypeDefs(types, { all: true });
