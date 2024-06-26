import {AppEnvironment} from './app-environment';
import {DataMode} from '../shared/commons/model/datamode.enum';
import {PrintDialogPdfGenerator} from '@dps/mycms-frontend-commons/dist/angular-commons/services/print-dialog-pdf.generator';

export const environment: AppEnvironment = {
    hideCopyrightFooter: true,
    production: false, // TODO set this to false for development
    assetsPathVersionSnippet: '',
    assetsPathVersionSuffix: '',
    backendApiBaseUrl: undefined,
    defaultSearchTypes: '',
    emptyDefaultSearchTypes: '',
    useAssetStoreUrls: false,
    pdocWritable: false,
    pdocActionTagWritable: false,
    pdocEmptyDefaultSearchTypes: 'page',
    allowAutoPlay: false,
    cookieLawSeenName: 'cookieLawSeenV20180525',
    trackingProviders: [], // Angulartics2Piwik
    staticPDocsFile: 'assets/staticdata/static.myshppdocs.js',
    hideInternalDescLinks: true,
    hideInternalImages: true,
    startDataMode: DataMode.STATIC,
    availableDataModes: [DataMode.STATIC]
};

// unset logger
if (environment.production) {
    console.trace = function() {};
    console.debug = function() {};
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
}

// TODO if you want pdf replace PrintDialogPdfGenerator by JsPdfGenerator and move jspdf in package.json from optional to dep
export class EnvironmentPdfGenerator extends PrintDialogPdfGenerator {}
