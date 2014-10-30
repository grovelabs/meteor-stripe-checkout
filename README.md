## Stripe checkout for Meteor
####[Stripe](https://stripe.com) - Payment infrastructure for the Internet

This package includes [Stripe checkout](https://stripe.com/docs/checkout) for use on the client

### Installation

```
meteor add grove:stripe-checkout
```

### Usage

Set up the object

```
var checkout = StripeCheckout.configure({
  key: 'your_key',
  image: '/logo.png',
  // The callback after checkout is complete
  token: function(token) {
    // do something here (a Meteor.method, perhaps?)
  }
});
```

Call `checkout.open` on some event

```
Template.someTemplate.events({
  'click #stripeButton': function (event, template) {
    event.preventDefault();
    checkout.open({
      name: 'Company Name, Inc.',
      description: 'Your awesome product',
      amount: 1000, // this is cents, not dollars
    });
  }
});
```