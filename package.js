Package.describe({
  name: 'chameleon:salesforce',
  version: '1.4.2',
  // Brief, one-line summary of the package.
  summary: 'Salesforce for Meteor (via JSforce) with setting for loginUrl',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gchameleon/meteor-salesforce',
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
