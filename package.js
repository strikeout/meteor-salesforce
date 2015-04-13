Package.describe({
  name: 'strikeout:salesforce',
  version: '1.4.1m',
  // Brief, one-line summary of the package.
  summary: 'Interface with the Salesforce API by wrapping npm package JSforce for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/strikeout/meteor-salesforce',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'jsforce': '1.4.1'})

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.addFiles('lib/jsforce.js',['client']);
  api.addFiles('server.js',['server']);

  api.export('Salesforce', ['client', 'server']);
});
