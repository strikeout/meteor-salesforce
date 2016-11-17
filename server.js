jsforce = Npm.require('jsforce');
Future = Npm.require('fibers/future');

connection = new jsforce.Connection({loginUrl: Meteor.settings.private.salesforce.url || "https://login.salesforce.com"});

Salesforce = connection; // export as
Salesforce._login = Meteor.wrapAsync(connection.login, connection);
Salesforce._query = Meteor.wrapAsync(connection.query, connection);


/**
 * Wraps async login method to sync
 * @param user
 * @param pass
 * @param token
 * @returns {*}
 */

Salesforce.login = function () {
    var future = new Future();
    console.log('[SF] connecting..');
    var self = this;
    self._login(Meteor.settings.private.salesforce.auth.user, Meteor.settings.private.salesforce.auth.pass + Meteor.settings.private.salesforce.auth.token, function (err, res) {
        if (err) return future.throw(err);
        console.log('[SF] connected!');
        future.return(res);
    })
    return future.wait();
};

/**
 * Sync wrapper for SOQL
 * @param query String
 * @returns {*}
 */
Salesforce.query = function (query) {
    var future = new Future();
    console.log('[SF] query:', query);
    this._query(query, function (err, res) {
        if (err) return future.throw(err);
        future.return(res);
    })
    return future.wait();
};
