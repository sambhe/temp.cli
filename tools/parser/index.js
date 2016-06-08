/**
* CLI tools: Command line tool
**/
import ci from './ci';
import live from './live';
import karma from './karma';
import eslint from './linter';
import version from './version';
import buildFiles from './buildModule';
import cliparse from 'cliparse';
import watchFiles from './watchModule';
import bootstrap from './bootstrap';
import check from './check-server';
import buildAll from './build-all';
import cleanDist from './clean-dist';
import importAll from './import-all';
import importItem from './import-item';
import importContainer from './import-container';
import importTemplates from './import-templates';
import importComponents from './import-components';
import importFeatures from './import-cxp-features';
import importPages from './import-cxp-pages';
import importTemplatePages from './import-template-pages';
import importeThemes from './import-themes';

const cliParser = cliparse.cli({
  name: 'crelan <command> [options]',
  description: 'Speed up your development process using Crelan CLI',
  commands: [
    buildFiles,
    watchFiles,
    ci,
    karma,
    bootstrap,
    live,
    eslint,
    check,
    buildAll,
    cleanDist,
    importItem,
    importContainer,
    importTemplates,
    importComponents,
    importFeatures,
    importAll,
    importeThemes,
    importPages,
    importTemplatePages,
  ],
  version: version(),
});

cliparse.parse(cliParser);

export default cliParser;
