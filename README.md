# Hive Posts using Gatsby 

The project is a combination of Blog and Plugin which will be pulling your posts from api.hive.blog to Gatsby. You need to provide your hive account name and it will get all the posts.

The plugin is embedded into the application under the plugins/gatsby-source-hive folder where you have two files gatsby-node.js and package.json. In gatsby-node.js we are quering api.hive.blog to get the posts based on the username.