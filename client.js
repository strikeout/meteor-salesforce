Salesforce = new jsforce.Connection();

Salesforce._login = Salesforce.login;
Salesforce.login = function (u, p, t, cb) {
    var self = this;
    cb = cb || function (err, res) {
        if (err) throw new Meteor.Error(err);
        console.log('[SF] connected!');
    };
    console.log('[SF] connecting..');

    t = t || '';
    return self._login(u, p + t, cb);
};