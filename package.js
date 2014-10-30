Package.describe({
  summary: "Stripe checkout for Meteor.",
  version: "0.0.1",
  name: "grove:stripe-checkout",
  git: "https://github.com/grovelabs/meteor-stripe-checkout.git"
});

Package.onUse(function (api) {
  api.addFiles('checkout.js', 'client');
});
