ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: Meteor.settings.facebook_appId,
    secret: Meteor.settings.facebook_secret
});

ServiceConfiguration.configurations.remove({
    service: 'twitter'
});

ServiceConfiguration.configurations.insert({
    service: 'twitter',
    appId: Meteor.settings.twitter_consumerKey,
    secret: Meteor.settings.twitter_secret
});

ServiceConfiguration.configurations.remove({
    service: 'google'
});

ServiceConfiguration.configurations.insert({
    service: 'google',
    appId: Meteor.settings.google_clientId,
    secret: Meteor.settings.google_secret
});

ServiceConfiguration.configurations.remove({
    service: 'github'
});

ServiceConfiguration.configurations.insert({
    service: 'github',
    appId: Meteor.settings.github_clientId,
    secret: Meteor.settings.github_secret
});
