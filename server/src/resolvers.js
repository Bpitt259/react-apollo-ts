import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import * as path from 'path';

const resolvers = loadFilesSync(path.join(__dirname, './domains/**/resolvers.js'));
export default mergeResolvers(resolvers);
