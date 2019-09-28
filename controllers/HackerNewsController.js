const { FetchHistory, Story, Channel } = require('../models');
var axios = require('axios');

exports.index = (req, res, next) => {
  getStoryIds().then(ids => {
    ids.map(id => {
      getStory(id).then(story => {
        console.log(story);
      });
    });
    res.json('Get hacker News Stories');
  });
};

exports.fetch = async (req, res, next) => {
  // await FetchHistory.findOrCreate({
  //   where: { channel: 'hacker-news' }
  // }).then(([history, created]) => {
  //   console.log(
  //     history.get({
  //       plain: true
  //     })
  //   );
  //   console.log('created: ' + created);
  // });

  // res.json({ fetch: 'done' });

  // Get channel id

  await getStoryIds().then(ids => {
    ids.map(id => {
      getStory(id).then(story => {
        console.log(story);
        res.json(story);
        Story.findOrCreate({
          where: { story_id: story.id },
          defaults: {
            title: story.title,
            author: story.by,
            url: story.url,
            published_on: story.time,
            channel_id: 1,
            value: JSON.stringify(story)
          }
        }).then();
      });
    });
  });
};

// Get the ids of latest hacker-news stories
const getStoryIds = async () => {
  let ids = await axios
    .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => response.data);

  return ids;
};

// Get single post by id
const getStory = async id => {
  let story = await axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(response => response.data);

  return story;
};
