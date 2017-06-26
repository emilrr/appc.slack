# Registered methods for the Connector
### function `getAuthTest ( params? : Object )`
> * **Method**: get 
> * **Path**: /auth.test 
> * **Description**: Checks authentication and tells you who you are. 
> * **Parameters**: 
>   * *token:* Authentication token
>      * required: true
>      * type: string
### function `getChannelsHistory ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.history 
> * **Description**: Fetches history of messages and events from a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *latest:* Timestamp of the oldest recent seen message.
>      * required: false
>      * type: string
>   * *oldest:* Timestamp of the latest previously seen message.
>      * required: false
>      * type: string
>   * *count:* Number of messages to return, between 1 and 1000.
>      * required: false
>      * type: number
>   * *has_more:* 
>      * required: false
>      * type: boolean
>   * *is_limited:* 
>      * required: false
>      * type: boolean
### function `getChannelsInfo ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.info 
> * **Description**: Gets information about a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
### function `getChannelsInvite ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.invite 
> * **Description**: Invites a user to a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *user:* User to invite to channel.
>      * required: true
>      * type: string
### function `getChannelsJoin ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.join 
> * **Description**: Joins a channel, creating it if needed. 
> * **Parameters**: 
>   * *name:* Name of channel to join
>      * required: true
>      * type: string
### function `getChannelsLeave ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.leave 
> * **Description**: Leaves a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
### function `getChannelsList ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.list 
> * **Description**: Lists all channels in a Slack team. 
> * **Parameters**: 
>   * *exclude_archived:* Don't return archived channels.
>      * required: false
>      * type: string
### function `getChannelsMark ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.mark 
> * **Description**: Sets the read cursor in a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *ts:* Timestamp of the most recently seen message.
>      * required: true
>      * type: string
### function `getChannelsSetPurpose ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.setPurpose 
> * **Description**: Sets the purpose for a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *purpose:* The new purpose
>      * required: true
>      * type: string
### function `getChannelsSetTopic ( params? : Object )`
> * **Method**: get 
> * **Path**: /channels.setTopic 
> * **Description**: Sets the topic for a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *topic:* The new topic
>      * required: true
>      * type: string
### function `getChatDelete ( params? : Object )`
> * **Method**: get 
> * **Path**: /chat.delete 
> * **Description**: Deletes a message. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *ts:* Timestamp of the most recently seen message.
>      * required: true
>      * type: string
### function `getChatPostMessage ( params? : Object )`
> * **Method**: get 
> * **Path**: /chat.postMessage 
> * **Description**: Sends a message to a channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *text:* Text of the message to send. See below for an explanation of formatting.
>      * required: true
>      * type: string
>   * *username:* Name of bot.
>      * required: false
>      * type: string
>   * *parse:* Change how messages are treated. See below.
>      * required: false
>      * type: string
>   * *link_names:* Find and link channel names and usernames.
>      * required: false
>      * type: string
>   * *unfurl_links:* Pass 1 to enable unfurling of primarily text-based content.
>      * required: false
>      * type: string
>   * *icon_url:* URL to an image to use as the icon for this message
>      * required: false
>      * type: string
>   * *icon_emoji:* emoji to use as the icon for this message. Overrides icon_url.
>      * required: false
>      * type: string
>   * *attachments:* Structured message attachments.
>      * required: false
>      * type: string
### function `getChatUpdate ( params? : Object )`
> * **Method**: get 
> * **Path**: /chat.update 
> * **Description**: Updates a message. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *text:* Text of the message to send. See below for an explanation of formatting.
>      * required: true
>      * type: string
>   * *ts:* Timestamp of the most recently seen message.
>      * required: true
>      * type: string
### function `getEmojiList ( params? : Object )`
> * **Method**: get 
> * **Path**: /emoji.list 
> * **Description**: Lists custom emoji for a team. 
> * **Parameters**:  
### function `getFilesInfo ( params? : Object )`
> * **Method**: get 
> * **Path**: /files.info 
> * **Description**: Gets information about a team file. 
> * **Parameters**: 
>   * *file:* File to fetch info for
>      * required: true
>      * type: string
>   * *count:* Number of items to return per page.
>      * required: false
>      * type: number
>   * *page:* Page number of results to return.
>      * required: false
>      * type: number
### function `getFilesList ( params? : Object )`
> * **Method**: get 
> * **Path**: /files.list 
> * **Description**: Lists and filters team files. 
> * **Parameters**: 
>   * *file:* File to fetch info for
>      * required: true
>      * type: string
>   * *user:* Filter files created by a single user.
>      * required: false
>      * type: string
>   * *ts_from:* Filter files created after this timestamp (inclusive).
>      * required: false
>      * type: string
>   * *ts_to:* Filter files created before this timestamp (inclusive).
>      * required: false
>      * type: string
>   * *types:* You can pass multiple values in the types argument, like types=posts,snippets.The default value is all, which does not filter the list.
>      * required: false
>      * type: string
### function `getFilesUpload ( params? : Object )`
> * **Method**: get 
> * **Path**: /files.upload 
> * **Description**: Uploads or creates a file. 
> * **Parameters**: 
>   * *file:* File contents via multipart/form-data.
>      * required: false
>      * type: string
>   * *content:* File contents via a POST var.
>      * required: false
>      * type: string
>   * *filetype:* Slack-internal file type identifier.
>      * required: false
>      * type: string
>   * *filename:* Filename of file.
>      * required: false
>      * type: string
>   * *title:* Title of file.
>      * required: false
>      * type: string
>   * *initial_comment:* Initial comment to add to file.
>      * required: false
>      * type: string
>   * *channels:* Comma separated list of channels to share the file into.
>      * required: false
>      * type: string
### function `getGroupsHistory ( params? : Object )`
> * **Method**: get 
> * **Path**: /groups.history 
> * **Description**: Fetches history of messages and events from a private group. 
> * **Parameters**: 
>   * *channel:* Group to fetch history for.
>      * required: true
>      * type: string
>   * *latest:* Timestamp of the oldest recent seen message.
>      * required: false
>      * type: string
>   * *oldest:* Timestamp of the latest previously seen message.
>      * required: false
>      * type: string
>   * *count:* Number of messages to return, between 1 and 1000.
>      * required: false
>      * type: number
>   * *has_more:* 
>      * required: false
>      * type: boolean
>   * *is_limited:* 
>      * required: false
>      * type: boolean
### function `getGroupsList ( params? : Object )`
> * **Method**: get 
> * **Path**: /groups.list 
> * **Description**: Lists private groups that the calling user has access to. 
> * **Parameters**: 
>   * *exclude_archived:* Don't return archived channels.
>      * required: false
>      * type: string
### function `getGroupsMark ( params? : Object )`
> * **Method**: get 
> * **Path**: /groups.mark 
> * **Description**: Sets the read cursor in a private group. 
> * **Parameters**: 
>   * *channel:* Group to fetch history for.
>      * required: true
>      * type: string
>   * *ts:* Timestamp of the most recently seen message.
>      * required: true
>      * type: string
### function `getGroupsSetPurpose ( params? : Object )`
> * **Method**: get 
> * **Path**: /groups.setPurpose 
> * **Description**: Sets the purpose for a private group. 
> * **Parameters**: 
>   * *channel:* Group to fetch history for.
>      * required: true
>      * type: string
>   * *purpose:* The new purpose
>      * required: true
>      * type: string
### function `getGroupsSetTopic ( params? : Object )`
> * **Method**: get 
> * **Path**: /groups.setTopic 
> * **Description**: Sets the topic for a private group. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *topic:* The new topic
>      * required: true
>      * type: string
### function `getImHistory ( params? : Object )`
> * **Method**: get 
> * **Path**: /im.history 
> * **Description**: Fetches history of messages and events from direct message channel. 
> * **Parameters**: 
>   * *channel:* Direct message channel to fetch history for.
>      * required: true
>      * type: string
>   * *latest:* Timestamp of the oldest recent seen message.
>      * required: false
>      * type: string
>   * *oldest:* Timestamp of the latest previously seen message.
>      * required: false
>      * type: string
>   * *count:* Number of messages to return, between 1 and 1000.
>      * required: false
>      * type: number
>   * *has_more:* 
>      * required: false
>      * type: boolean
>   * *is_limited:* 
>      * required: false
>      * type: boolean
### function `getImList ( params? : Object )`
> * **Method**: get 
> * **Path**: /im.list 
> * **Description**: Lists direct message channels for the calling user. 
> * **Parameters**:  
### function `getImMark ( params? : Object )`
> * **Method**: get 
> * **Path**: /im.mark 
> * **Description**: Sets the read cursor in a direct message channel. 
> * **Parameters**: 
>   * *channel:* Channel to fetch history for.
>      * required: true
>      * type: string
>   * *ts:* Timestamp of the most recently seen message.
>      * required: true
>      * type: string
### function `getSearchAll ( params? : Object )`
> * **Method**: get 
> * **Path**: /search.all 
> * **Description**: Searches for messages and files matching a query. 
> * **Parameters**: 
>   * *query:* Search query. May contains booleans, etc.
>      * required: true
>      * type: string
>   * *sort:* Return matches sorted by either score or timestamp.
>      * required: false
>      * type: string
>   * *sort_dir:* Change sort direction to ascending (asc) or descending (desc).
>      * required: false
>      * type: string
>   * *highlight:* Pass a value of 1 to enable query highlight markers .
>      * required: false
>      * type: string
>   * *count:* Number of items to return per page.
>      * required: false
>      * type: number
>   * *page:* Page number of results to return.
>      * required: false
>      * type: number
### function `getSearchFiles ( params? : Object )`
> * **Method**: get 
> * **Path**: /search.files 
> * **Description**: Searches for files matching a query. 
> * **Parameters**: 
>   * *query:* Search query. May contains booleans, etc.
>      * required: true
>      * type: string
>   * *sort:* Return matches sorted by either score or timestamp.
>      * required: false
>      * type: string
>   * *sort_dir:* Change sort direction to ascending (asc) or descending (desc).
>      * required: false
>      * type: string
>   * *highlight:* Pass a value of 1 to enable query highlight markers .
>      * required: false
>      * type: string
>   * *count:* Number of items to return per page.
>      * required: false
>      * type: number
>   * *page:* Page number of results to return.
>      * required: false
>      * type: number
### function `getSearchMessages ( params? : Object )`
> * **Method**: get 
> * **Path**: /search.messages 
> * **Description**: Searches for messages matching a query. 
> * **Parameters**: 
>   * *query:* Search query. May contains booleans, etc.
>      * required: true
>      * type: string
>   * *sort:* Return matches sorted by either score or timestamp.
>      * required: false
>      * type: string
>   * *sort_dir:* Change sort direction to ascending (asc) or descending (desc).
>      * required: false
>      * type: string
>   * *highlight:* Pass a value of 1 to enable query highlight markers .
>      * required: false
>      * type: string
>   * *count:* Number of items to return per page.
>      * required: false
>      * type: number
>   * *page:* Page number of results to return.
>      * required: false
>      * type: number
### function `getStarsList ( params? : Object )`
> * **Method**: get 
> * **Path**: /stars.list 
> * **Description**: Lists stars for a user. 
> * **Parameters**: 
>   * *user:* Show stars by this user. Defaults to the authed user.
>      * required: false
>      * type: string
>   * *count:* Number of items to return per page.
>      * required: false
>      * type: number
>   * *page:* Page number of results to return.
>      * required: false
>      * type: number
### function `getUsersList ( params? : Object )`
> * **Method**: get 
> * **Path**: /users.list 
> * **Description**: Lists all users in a Slack team. 
> * **Parameters**:  
