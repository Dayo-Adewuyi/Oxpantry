"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uauthOptions = void 0;
var UAuthWeb3Modal = require("@uauth/web3modal");
var js_1 = require("@uauth/js");
var web3_provider_1 = require("@walletconnect/web3-provider");
var web3modal_1 = require("web3modal");
// These options are used to construct the UAuthSPA instance.
exports.uauthOptions = {
    clientID: 'client_id',
    redirectUri: 'http://localhost:3000',
    // Must include both the openid and wallet scopes.
    scope: 'openid wallet',
};
var providerOptions = {
    // Currently the package isn't inside the web3modal library currently. For now,
    // users must use this libary to create a custom web3modal provider.
    // All custom `web3modal` providers must be registered using the "custom-"
    // prefix.
    'custom-uauth': {
        // The UI Assets
        display: UAuthWeb3Modal.display,
        // The Connector
        connector: UAuthWeb3Modal.connector,
        // The SPA libary
        package: js_1.default,
        // The SPA libary options
        options: exports.uauthOptions,
    },
    // For full functionality we include the walletconnect provider as well.
    walletconnect: {
        package: web3_provider_1.default,
        options: {
            infuraId: '9979da9ce2b54a21bd0551a89fe53c35',
        },
    },
    // Include any other web3modal providers here too...
};
var web3modal = new web3modal_1.default({ providerOptions: providerOptions });
// Register the web3modal so the connector has access to it.
UAuthWeb3Modal.registerWeb3Modal(web3modal);
exports.default = web3modal;
