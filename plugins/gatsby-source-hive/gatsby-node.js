const { promisify } = require('bluebird');
const { createClient } = require('lightrpc');
const client = createClient('https://api.hive.blog');

const sendAsync = promisify(client.send, { context: client });

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    { apiKey }
) => {
    const { createNode } = actions;
    const tag = 'codingdefined';
    const result = await getAll(tag, 'blog');

    result.forEach(post => {
        const { post_id, body_markdown, ...data } = post;
        const nodeStr = JSON.stringify(post);
        const node = {
            id: createNodeId(post_id),
            internal: {
                type: `HiveArticle`,
                mediaType: `text/markdown`,
                content: nodeStr
            },
            ...data
        };
        const contentDigest = createContentDigest(node);
        node.internal.contentDigest = contentDigest;

        createNode(node);
    });
};

async function getAll(tag, sortBy) {
    const posts = [];
    const limit = 10;
    const result = await sendAsync(`get_discussions_by_${sortBy}`, [{ tag, limit }]);
    posts.push(...result);
  
    /*let received = 0;
    do {
      const startAuthor = posts[posts.length - 1].author;
      const startPermlink = posts[posts.length - 1].permlink;
  
      const moreResult = await sendAsync(`get_discussions_by_${sortBy}`, [
        { tag, limit, start_author: startAuthor, start_permlink: startPermlink },
      ]);
  
      posts.push(...moreResult.slice(1));
      received = moreResult.length;
    } while (received === limit);*/
    return posts;
  }
