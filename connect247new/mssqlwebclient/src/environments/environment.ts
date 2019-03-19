// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };

export const environment = {
production: false,
envName: 'TEST',
apiHost: 'localhost', //Test
apiPort: 9080,
apiRoot: 'mssqlapi/lct/',
apiUrl2: 'http://localhost:9080/mssqlapi/lct',
apiUrl3:'http://localhost:9080/mssqlapi/register',
apiUrl5:'http://localhost:9080/api/pkgQu',
apiUrl: 'http://localhost:9080/mssqlapi/msdbbyinstance/',
reportServer: 'http://cocreportstest/ReportServer/Pages/ReportViewer.aspx?/Library/CLASS/TEST/'
};
