import { Mongo } from 'meteor/mongo';
import { ReactiveAggregate } from 'meteor/tunguska:reactive-aggregate';

const Gifs = new Mongo.Collection('gifs');

if (Meteor.isServer) {
  Meteor.publish('allGifs', function() {
    ReactiveAggregate(this, Gifs, { $sample: { size: 2 } });
  });

  Meteor.publish('userGifs', function() {
    return Gifs.find({ userId: this.userId });
  });

  Meteor.publish('bestUsers', function() {
    return Gifs.find({});
  });
  Meteor.methods({
    insertNewGif(urlGif) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not authorized');
      }
      Gifs.insert({
        score: 0,
        urlGif,
        userId: Meteor.userId(),
        user: Meteor.user().username
      });
    },
    voteOnGif(gif) {
      if (Meteor.userId()) {
        Gifs.update(gif._id, {
          $inc: {
            score: 1
          }
        });
      }
    },
    deleteAGif(gif) {
      if (Meteor.userId()) {
        Gifs.remove(gif._id);
      }
    }
  });
}

export default Gifs;
