# Salesforce for Meteor (via JSforce)

This package is a slim wrapper for the awesome JSforce npm package.

We expose a global `Salesforce` object on the client and server which is a standard JSforce connection object.
Check the [JSforce documentation](https://jsforce.github.io/document/#query)

Two methods `login` and `query` are wrapped server-side in Fibers to work synchronously without callbacks.

## Configuration

Set it up in Meteor settings:

    "private": {
        "salesforce": {
            "url": "https://test.salesforce.com", // optional, only if you want to connect to a sandbox
            "auth": {
                "user": "username",
                "pass": "password",
                "token": "your security token"
            }
        }
    }

## Usage
    // server-side, no callbacks needed

    Salesforce.login();


    var query = "SELECT Id,Name FROM Lead";
    var result = Salesforce.query(query);


