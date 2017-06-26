module.exports = {
    source: "webAPI",
    getAuthTest: {
        path: "/auth.test",
        method: "get",
        parameters: [
            {
                description: "Authentication token",
                "in": "query",
                name: "token",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "user",
                properties: {
                    ok: {
                        type: "boolean"
                    },
                    team: {
                        type: "string"
                    },
                    team_id: {
                        type: "string"
                    },
                    url: {
                        type: "string"
                    },
                    user: {
                        type: "string"
                    },
                    user_id: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/auth.test",
        description: "Checks authentication and tells you who you are.",
        functionName: "getAuthTest",
        security: [
            {
                oauth_2_0: [
                    "identify"
                ]
            }
        ],
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsHistory: {
        path: "/channels.history",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                "default": "now",
                description: "Timestamp of the oldest recent seen message.",
                "in": "query",
                name: "latest",
                type: "string"
            },
            {
                description: "Timestamp of the latest previously seen message.",
                "in": "query",
                name: "oldest",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of messages to return, between 1 and 1000.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "in": "query",
                name: "has_more",
                type: "boolean"
            },
            {
                "in": "query",
                name: "is_limited",
                type: "boolean"
            }
        ],
        response: {
            "200": {
                schemaName: "channelsHistory",
                properties: {
                    has_more: {
                        type: "boolean"
                    },
                    latest: {
                        type: "string"
                    },
                    messages: {
                        items: [
                            {
                                properties: {
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    is_starred: {
                                        type: "boolean"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    wibblr: {
                                        type: "boolean"
                                    }
                                },
                                type: "object"
                            }
                        ],
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.history",
        description: "Fetches history of messages and events from a channel.",
        functionName: "getChannelsHistory",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsInfo: {
        path: "/channels.info",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "searchAll",
                properties: {
                    channel: {
                        properties: {
                            created: {
                                type: "number"
                            },
                            creator: {
                                type: "string"
                            },
                            id: {
                                type: "string"
                            },
                            is_archived: {
                                type: "boolean"
                            },
                            is_channel: {
                                type: "boolean"
                            },
                            is_general: {
                                type: "boolean"
                            },
                            is_member: {
                                type: "boolean"
                            },
                            last_read: {
                                type: "string"
                            },
                            latest: {
                                properties: {
                                    attachments: {
                                        items: {
                                            properties: {
                                                fallback: {
                                                    type: "string"
                                                },
                                                from_url: {
                                                    type: "string"
                                                },
                                                id: {
                                                    type: "number"
                                                },
                                                image_bytes: {
                                                    type: "number"
                                                },
                                                image_height: {
                                                    type: "number"
                                                },
                                                image_url: {
                                                    type: "string"
                                                },
                                                image_width: {
                                                    type: "number"
                                                },
                                                service_name: {
                                                    type: "string"
                                                },
                                                text: {
                                                    type: "string"
                                                },
                                                title: {
                                                    type: "string"
                                                },
                                                title_link: {
                                                    type: "string"
                                                }
                                            },
                                            type: "object"
                                        },
                                        type: "array"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            members: {
                                items: {
                                    type: "string"
                                },
                                type: "array"
                            },
                            name: {
                                type: "string"
                            },
                            purpose: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            topic: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            unread_count: {
                                type: "number"
                            },
                            unread_count_display: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.info",
        description: "Gets information about a channel.",
        functionName: "getChannelsInfo",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsInvite: {
        path: "/channels.invite",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "User to invite to channel.",
                "in": "query",
                name: "user",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "channelsInvite",
                properties: {
                    channel: {
                        properties: {
                            created: {
                                type: "number"
                            },
                            creator: {
                                type: "string"
                            },
                            id: {
                                type: "string"
                            },
                            is_archived: {
                                type: "boolean"
                            },
                            is_channel: {
                                type: "boolean"
                            },
                            is_general: {
                                type: "boolean"
                            },
                            is_member: {
                                type: "boolean"
                            },
                            last_read: {
                                type: "string"
                            },
                            latest: {
                                properties: {
                                    subtype: {
                                        type: "string"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            members: {
                                items: {
                                    type: "string"
                                },
                                type: "array"
                            },
                            name: {
                                type: "string"
                            },
                            purpose: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            topic: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            unread_count: {
                                type: "number"
                            },
                            unread_count_display: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.invite",
        description: "Invites a user to a channel.",
        functionName: "getChannelsInvite",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsJoin: {
        path: "/channels.join",
        method: "get",
        parameters: [
            {
                description: "Name of channel to join",
                "in": "query",
                name: "name",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "channelsInvite",
                properties: {
                    channel: {
                        properties: {
                            created: {
                                type: "number"
                            },
                            creator: {
                                type: "string"
                            },
                            id: {
                                type: "string"
                            },
                            is_archived: {
                                type: "boolean"
                            },
                            is_channel: {
                                type: "boolean"
                            },
                            is_general: {
                                type: "boolean"
                            },
                            is_member: {
                                type: "boolean"
                            },
                            last_read: {
                                type: "string"
                            },
                            latest: {
                                properties: {
                                    subtype: {
                                        type: "string"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            members: {
                                items: {
                                    type: "string"
                                },
                                type: "array"
                            },
                            name: {
                                type: "string"
                            },
                            purpose: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            topic: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            unread_count: {
                                type: "number"
                            },
                            unread_count_display: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.join",
        description: "Joins a channel, creating it if needed.",
        functionName: "getChannelsJoin",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsLeave: {
        path: "/channels.leave",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "ok",
                properties: {
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.leave",
        description: "Leaves a channel.",
        functionName: "getChannelsLeave",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsList: {
        path: "/channels.list",
        method: "get",
        parameters: [
            {
                description: "Don't return archived channels.",
                "in": "query",
                name: "exclude_archived",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "channels",
                properties: {
                    channels: {
                        items: {
                            properties: {
                                created: {
                                    type: "integer"
                                },
                                creator: {
                                    type: "string"
                                },
                                id: {
                                    type: "string"
                                },
                                is_archived: {
                                    type: "boolean"
                                },
                                is_member: {
                                    type: "boolean"
                                },
                                members: {
                                    items: {
                                        type: "string"
                                    },
                                    type: "array"
                                },
                                name: {
                                    type: "string"
                                },
                                num_members: {
                                    type: "number"
                                },
                                purpose: {
                                    properties: {
                                        creator: {
                                            type: "string"
                                        },
                                        last_set: {
                                            type: "integer"
                                        },
                                        value: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                },
                                topic: {
                                    properties: {
                                        creator: {
                                            type: "string"
                                        },
                                        last_set: {
                                            type: "integer"
                                        },
                                        value: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.list",
        description: "Lists all channels in a Slack team.",
        functionName: "getChannelsList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsMark: {
        path: "/channels.mark",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Timestamp of the most recently seen message.",
                "in": "query",
                name: "ts",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "ok",
                properties: {
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.mark",
        description: "Sets the read cursor in a channel.",
        functionName: "getChannelsMark",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsSetPurpose: {
        path: "/channels.setPurpose",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "The new purpose",
                "in": "query",
                name: "purpose",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "purpose",
                properties: {
                    ok: {
                        type: "boolean"
                    },
                    purpose: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.setPurpose",
        description: "Sets the purpose for a channel.",
        functionName: "getChannelsSetPurpose",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChannelsSetTopic: {
        path: "/channels.setTopic",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "The new topic",
                "in": "query",
                name: "topic",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "topic",
                properties: {
                    ok: {
                        type: "boolean"
                    },
                    topic: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/channels.setTopic",
        description: "Sets the topic for a channel.",
        functionName: "getChannelsSetTopic",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChatDelete: {
        path: "/chat.delete",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Timestamp of the most recently seen message.",
                "in": "query",
                name: "ts",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "chatOk",
                properties: {
                    channel: {
                        type: "string"
                    },
                    ok: {
                        type: "boolean"
                    },
                    ts: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/chat.delete",
        description: "Deletes a message.",
        functionName: "getChatDelete",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChatPostMessage: {
        path: "/chat.postMessage",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Text of the message to send. See below for an explanation of formatting.",
                "in": "query",
                name: "text",
                required: true,
                type: "string"
            },
            {
                description: "Name of bot.",
                "in": "query",
                name: "username",
                type: "string"
            },
            {
                description: "Change how messages are treated. See below.",
                "in": "query",
                name: "parse",
                type: "string"
            },
            {
                description: "Find and link channel names and usernames.",
                "in": "query",
                name: "link_names",
                type: "string"
            },
            {
                description: "Pass 1 to enable unfurling of primarily text-based content.",
                "in": "query",
                name: "unfurl_links",
                type: "string"
            },
            {
                description: "URL to an image to use as the icon for this message",
                "in": "query",
                name: "icon_url",
                type: "string"
            },
            {
                description: "emoji to use as the icon for this message. Overrides icon_url.",
                "in": "query",
                name: "icon_emoji",
                type: "string"
            },
            {
                description: "Structured message attachments.",
                "in": "query",
                name: "attachments",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "chatOk",
                properties: {
                    channel: {
                        type: "string"
                    },
                    ok: {
                        type: "boolean"
                    },
                    ts: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/chat.postMessage",
        description: "Sends a message to a channel.",
        functionName: "getChatPostMessage",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getChatUpdate: {
        path: "/chat.update",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Text of the message to send. See below for an explanation of formatting.",
                "in": "query",
                name: "text",
                required: true,
                type: "string"
            },
            {
                description: "Timestamp of the most recently seen message.",
                "in": "query",
                name: "ts",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "chatUpdate",
                properties: {
                    channel: {
                        type: "string"
                    },
                    ok: {
                        type: "boolean"
                    },
                    text: {
                        type: "string"
                    },
                    ts: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/chat.update",
        description: "Updates a message.",
        functionName: "getChatUpdate",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getEmojiList: {
        path: "/emoji.list",
        method: "get",
        parameters: [],
        response: {
            "200": {
                schemaName: "emojiList",
                properties: {
                    emoji: {
                        properties: {
                            bowtie: {
                                type: "string"
                            },
                            shipit: {
                                type: "string"
                            },
                            squirrel: {
                                type: "string"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/emoji.list",
        description: "Lists custom emoji for a team.",
        functionName: "getEmojiList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getFilesInfo: {
        path: "/files.info",
        method: "get",
        parameters: [
            {
                description: "File to fetch info for",
                "in": "query",
                name: "file",
                required: true,
                type: "string"
            },
            {
                "default": 100,
                description: "Number of items to return per page.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "default": 1,
                description: "Page number of results to return.",
                "in": "query",
                name: "page",
                type: "number"
            }
        ],
        response: {
            "200": {
                schemaName: "fileObj",
                properties: {
                    file: {
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/files.info",
        description: "Gets information about a team file.",
        functionName: "getFilesInfo",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getFilesList: {
        path: "/files.list",
        method: "get",
        parameters: [
            {
                description: "File to fetch info for",
                "in": "query",
                name: "file",
                required: true,
                type: "string"
            },
            {
                description: "Filter files created by a single user.",
                "in": "query",
                name: "user",
                type: "string"
            },
            {
                description: "Filter files created after this timestamp (inclusive).",
                "in": "query",
                name: "ts_from",
                type: "string"
            },
            {
                "default": "now",
                description: "Filter files created before this timestamp (inclusive).",
                "in": "query",
                name: "ts_to",
                type: "string"
            },
            {
                description: "You can pass multiple values in the types argument, like types=posts,snippets.The default value is all, which does not filter the list.",
                "enum": [
                    "pdfs",
                    "zips",
                    "posts",
                    "images",
                    "snippets",
                    "gdocs",
                    "all"
                ],
                "in": "query",
                name: "types",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "files",
                properties: {
                    files: {
                        items: {
                            properties: {
                                channels: {
                                    items: {},
                                    type: "array"
                                },
                                comments_count: {
                                    type: "number"
                                },
                                created: {
                                    type: "number"
                                },
                                editable: {
                                    type: "boolean"
                                },
                                external_type: {
                                    type: "string"
                                },
                                filetype: {
                                    type: "string"
                                },
                                groups: {
                                    items: {},
                                    type: "array"
                                },
                                id: {
                                    type: "string"
                                },
                                ims: {
                                    items: {
                                        type: "string"
                                    },
                                    type: "array"
                                },
                                initial_comment: {
                                    properties: {
                                        comment: {
                                            type: "string"
                                        },
                                        created: {
                                            type: "number"
                                        },
                                        id: {
                                            type: "string"
                                        },
                                        timestamp: {
                                            type: "number"
                                        },
                                        user: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                },
                                is_external: {
                                    type: "boolean"
                                },
                                is_public: {
                                    type: "boolean"
                                },
                                mimetype: {
                                    type: "string"
                                },
                                mode: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                },
                                permalink: {
                                    type: "string"
                                },
                                permalink_public: {
                                    type: "string"
                                },
                                pretty_type: {
                                    type: "string"
                                },
                                public_url_shared: {
                                    type: "boolean"
                                },
                                size: {
                                    type: "number"
                                },
                                timestamp: {
                                    type: "number"
                                },
                                title: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                },
                                url_download: {
                                    type: "string"
                                },
                                url_private: {
                                    type: "string"
                                },
                                url_private_download: {
                                    type: "string"
                                },
                                user: {
                                    type: "string"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    },
                    paging: {
                        properties: {
                            count: {
                                type: "number"
                            },
                            page: {
                                type: "number"
                            },
                            pages: {
                                type: "number"
                            },
                            total: {
                                type: "number"
                            }
                        },
                        type: "object"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/files.list",
        description: "Lists and filters team files.",
        functionName: "getFilesList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getFilesUpload: {
        path: "/files.upload",
        method: "get",
        parameters: [
            {
                description: "File contents via multipart/form-data.",
                "in": "query",
                name: "file",
                type: "string"
            },
            {
                description: "File contents via a POST var.",
                "in": "query",
                name: "content",
                type: "string"
            },
            {
                description: "Slack-internal file type identifier.",
                "in": "query",
                name: "filetype",
                type: "string"
            },
            {
                description: "Filename of file.",
                "in": "query",
                name: "filename",
                type: "string"
            },
            {
                description: "Title of file.",
                "in": "query",
                name: "title",
                type: "string"
            },
            {
                description: "Initial comment to add to file.",
                "in": "query",
                name: "initial_comment",
                type: "string"
            },
            {
                description: "Comma separated list of channels to share the file into.",
                "in": "query",
                name: "channels",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "fileObj",
                properties: {
                    file: {
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/files.upload",
        description: "Uploads or creates a file.",
        functionName: "getFilesUpload",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getGroupsHistory: {
        path: "/groups.history",
        method: "get",
        parameters: [
            {
                description: "Group to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                "default": "now",
                description: "Timestamp of the oldest recent seen message.",
                "in": "query",
                name: "latest",
                type: "string"
            },
            {
                description: "Timestamp of the latest previously seen message.",
                "in": "query",
                name: "oldest",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of messages to return, between 1 and 1000.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "in": "query",
                name: "has_more",
                type: "boolean"
            },
            {
                "in": "query",
                name: "is_limited",
                type: "boolean"
            }
        ],
        response: {
            "200": {
                schemaName: "channelsHistory",
                properties: {
                    has_more: {
                        type: "boolean"
                    },
                    latest: {
                        type: "string"
                    },
                    messages: {
                        items: [
                            {
                                properties: {
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    is_starred: {
                                        type: "boolean"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    wibblr: {
                                        type: "boolean"
                                    }
                                },
                                type: "object"
                            }
                        ],
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/groups.history",
        description: "Fetches history of messages and events from a private group.",
        functionName: "getGroupsHistory",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getGroupsList: {
        path: "/groups.list",
        method: "get",
        parameters: [
            {
                description: "Don't return archived channels.",
                "in": "query",
                name: "exclude_archived",
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "groups",
                properties: {
                    groups: {
                        items: {
                            properties: {
                                created: {
                                    type: "number"
                                },
                                creator: {
                                    type: "string"
                                },
                                id: {
                                    type: "string"
                                },
                                is_archived: {
                                    type: "boolean"
                                },
                                is_group: {
                                    type: "boolean"
                                },
                                members: {
                                    items: {
                                        type: "string"
                                    },
                                    type: "array"
                                },
                                name: {
                                    type: "string"
                                },
                                purpose: {
                                    properties: {
                                        creator: {
                                            type: "string"
                                        },
                                        last_set: {
                                            type: "number"
                                        },
                                        value: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                },
                                topic: {
                                    properties: {
                                        creator: {
                                            type: "string"
                                        },
                                        last_set: {
                                            type: "number"
                                        },
                                        value: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/groups.list",
        description: "Lists private groups that the calling user has access to.",
        functionName: "getGroupsList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getGroupsMark: {
        path: "/groups.mark",
        method: "get",
        parameters: [
            {
                description: "Group to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Timestamp of the most recently seen message.",
                "in": "query",
                name: "ts",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "ok",
                properties: {
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/groups.mark",
        description: "Sets the read cursor in a private group.",
        functionName: "getGroupsMark",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getGroupsSetPurpose: {
        path: "/groups.setPurpose",
        method: "get",
        parameters: [
            {
                description: "Group to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "The new purpose",
                "in": "query",
                name: "purpose",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "purpose",
                properties: {
                    ok: {
                        type: "boolean"
                    },
                    purpose: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/groups.setPurpose",
        description: "Sets the purpose for a private group.",
        functionName: "getGroupsSetPurpose",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getGroupsSetTopic: {
        path: "/groups.setTopic",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "The new topic",
                "in": "query",
                name: "topic",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "topic",
                properties: {
                    ok: {
                        type: "boolean"
                    },
                    topic: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/groups.setTopic",
        description: "Sets the topic for a private group.",
        functionName: "getGroupsSetTopic",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getImHistory: {
        path: "/im.history",
        method: "get",
        parameters: [
            {
                description: "Direct message channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                "default": "now",
                description: "Timestamp of the oldest recent seen message.",
                "in": "query",
                name: "latest",
                type: "string"
            },
            {
                description: "Timestamp of the latest previously seen message.",
                "in": "query",
                name: "oldest",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of messages to return, between 1 and 1000.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "in": "query",
                name: "has_more",
                type: "boolean"
            },
            {
                "in": "query",
                name: "is_limited",
                type: "boolean"
            }
        ],
        response: {
            "200": {
                schemaName: "channelsHistory",
                properties: {
                    has_more: {
                        type: "boolean"
                    },
                    latest: {
                        type: "string"
                    },
                    messages: {
                        items: [
                            {
                                properties: {
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    is_starred: {
                                        type: "boolean"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    wibblr: {
                                        type: "boolean"
                                    }
                                },
                                type: "object"
                            }
                        ],
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/im.history",
        description: "Fetches history of messages and events from direct message channel.",
        functionName: "getImHistory",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getImList: {
        path: "/im.list",
        method: "get",
        parameters: [],
        response: {
            "200": {
                schemaName: "ims",
                properties: {
                    ims: {
                        items: {
                            properties: {
                                created: {
                                    type: "number"
                                },
                                id: {
                                    type: "string"
                                },
                                is_user_deleted: {
                                    type: "boolean"
                                },
                                user: {
                                    type: "string"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/im.list",
        description: "Lists direct message channels for the calling user.",
        functionName: "getImList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getImMark: {
        path: "/im.mark",
        method: "get",
        parameters: [
            {
                description: "Channel to fetch history for.",
                "in": "query",
                name: "channel",
                required: true,
                type: "string"
            },
            {
                description: "Timestamp of the most recently seen message.",
                "in": "query",
                name: "ts",
                required: true,
                type: "string"
            }
        ],
        response: {
            "200": {
                schemaName: "ok",
                properties: {
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/im.mark",
        description: "Sets the read cursor in a direct message channel.",
        functionName: "getImMark",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getSearchAll: {
        path: "/search.all",
        method: "get",
        parameters: [
            {
                description: "Search query. May contains booleans, etc.",
                "in": "query",
                name: "query",
                required: true,
                type: "string"
            },
            {
                "default": "score",
                description: "Return matches sorted by either score or timestamp.",
                "enum": [
                    "timestamp",
                    "score"
                ],
                "in": "query",
                name: "sort",
                type: "string"
            },
            {
                "default": "desc",
                description: "Change sort direction to ascending (asc) or descending (desc).",
                "enum": [
                    "desc",
                    "asc"
                ],
                "in": "query",
                name: "sort_dir",
                type: "string"
            },
            {
                description: "Pass a value of 1 to enable query highlight markers .",
                "in": "query",
                name: "highlight",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of items to return per page.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "default": 1,
                description: "Page number of results to return.",
                "in": "query",
                name: "page",
                type: "number"
            }
        ],
        response: {
            "200": {
                schemaName: "searchAll",
                properties: {
                    channel: {
                        properties: {
                            created: {
                                type: "number"
                            },
                            creator: {
                                type: "string"
                            },
                            id: {
                                type: "string"
                            },
                            is_archived: {
                                type: "boolean"
                            },
                            is_channel: {
                                type: "boolean"
                            },
                            is_general: {
                                type: "boolean"
                            },
                            is_member: {
                                type: "boolean"
                            },
                            last_read: {
                                type: "string"
                            },
                            latest: {
                                properties: {
                                    attachments: {
                                        items: {
                                            properties: {
                                                fallback: {
                                                    type: "string"
                                                },
                                                from_url: {
                                                    type: "string"
                                                },
                                                id: {
                                                    type: "number"
                                                },
                                                image_bytes: {
                                                    type: "number"
                                                },
                                                image_height: {
                                                    type: "number"
                                                },
                                                image_url: {
                                                    type: "string"
                                                },
                                                image_width: {
                                                    type: "number"
                                                },
                                                service_name: {
                                                    type: "string"
                                                },
                                                text: {
                                                    type: "string"
                                                },
                                                title: {
                                                    type: "string"
                                                },
                                                title_link: {
                                                    type: "string"
                                                }
                                            },
                                            type: "object"
                                        },
                                        type: "array"
                                    },
                                    text: {
                                        type: "string"
                                    },
                                    ts: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    user: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            members: {
                                items: {
                                    type: "string"
                                },
                                type: "array"
                            },
                            name: {
                                type: "string"
                            },
                            purpose: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            topic: {
                                properties: {
                                    creator: {
                                        type: "string"
                                    },
                                    last_set: {
                                        type: "number"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            unread_count: {
                                type: "number"
                            },
                            unread_count_display: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/search.all",
        description: "Searches for messages and files matching a query.",
        functionName: "getSearchAll",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getSearchFiles: {
        path: "/search.files",
        method: "get",
        parameters: [
            {
                description: "Search query. May contains booleans, etc.",
                "in": "query",
                name: "query",
                required: true,
                type: "string"
            },
            {
                "default": "score",
                description: "Return matches sorted by either score or timestamp.",
                "enum": [
                    "timestamp",
                    "score"
                ],
                "in": "query",
                name: "sort",
                type: "string"
            },
            {
                "default": "desc",
                description: "Change sort direction to ascending (asc) or descending (desc).",
                "enum": [
                    "desc",
                    "asc"
                ],
                "in": "query",
                name: "sort_dir",
                type: "string"
            },
            {
                description: "Pass a value of 1 to enable query highlight markers .",
                "in": "query",
                name: "highlight",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of items to return per page.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "default": 1,
                description: "Page number of results to return.",
                "in": "query",
                name: "page",
                type: "number"
            }
        ],
        response: {
            "200": {
                schemaName: "searchFiles",
                properties: {
                    files: {
                        properties: {
                            matches: {
                                items: {
                                    properties: {
                                        channels: {
                                            items: {},
                                            type: "array"
                                        },
                                        comments_count: {
                                            type: "number"
                                        },
                                        created: {
                                            type: "number"
                                        },
                                        edit_link: {
                                            type: "string"
                                        },
                                        editable: {
                                            type: "boolean"
                                        },
                                        external_type: {
                                            type: "string"
                                        },
                                        filetype: {
                                            type: "string"
                                        },
                                        groups: {
                                            items: {},
                                            type: "array"
                                        },
                                        id: {
                                            type: "string"
                                        },
                                        ims: {
                                            items: {
                                                type: "string"
                                            },
                                            type: "array"
                                        },
                                        initial_comment: {
                                            properties: {
                                                comment: {
                                                    type: "string"
                                                },
                                                created: {
                                                    type: "number"
                                                },
                                                id: {
                                                    type: "string"
                                                },
                                                timestamp: {
                                                    type: "number"
                                                },
                                                user: {
                                                    type: "string"
                                                }
                                            },
                                            type: "object"
                                        },
                                        is_external: {
                                            type: "boolean"
                                        },
                                        is_public: {
                                            type: "boolean"
                                        },
                                        lines: {
                                            type: "number"
                                        },
                                        lines_more: {
                                            type: "number"
                                        },
                                        mimetype: {
                                            type: "string"
                                        },
                                        mode: {
                                            type: "string"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        permalink: {
                                            type: "string"
                                        },
                                        permalink_public: {
                                            type: "string"
                                        },
                                        pretty_type: {
                                            type: "string"
                                        },
                                        preview: {
                                            type: "string"
                                        },
                                        preview_highlight: {
                                            type: "string"
                                        },
                                        public_url_shared: {
                                            type: "boolean"
                                        },
                                        size: {
                                            type: "number"
                                        },
                                        timestamp: {
                                            type: "number"
                                        },
                                        title: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        url_download: {
                                            type: "string"
                                        },
                                        url_private: {
                                            type: "string"
                                        },
                                        url_private_download: {
                                            type: "string"
                                        },
                                        user: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                },
                                type: "array"
                            },
                            pagination: {
                                properties: {
                                    first: {
                                        type: "number"
                                    },
                                    last: {
                                        type: "number"
                                    },
                                    page: {
                                        type: "number"
                                    },
                                    page_count: {
                                        type: "number"
                                    },
                                    per_page: {
                                        type: "number"
                                    },
                                    total_count: {
                                        type: "number"
                                    }
                                },
                                type: "object"
                            },
                            paging: {
                                properties: {
                                    count: {
                                        type: "number"
                                    },
                                    page: {
                                        type: "number"
                                    },
                                    pages: {
                                        type: "number"
                                    },
                                    total: {
                                        type: "number"
                                    }
                                },
                                type: "object"
                            },
                            total: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    },
                    query: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/search.files",
        description: "Searches for files matching a query.",
        functionName: "getSearchFiles",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getSearchMessages: {
        path: "/search.messages",
        method: "get",
        parameters: [
            {
                description: "Search query. May contains booleans, etc.",
                "in": "query",
                name: "query",
                required: true,
                type: "string"
            },
            {
                "default": "score",
                description: "Return matches sorted by either score or timestamp.",
                "enum": [
                    "timestamp",
                    "score"
                ],
                "in": "query",
                name: "sort",
                type: "string"
            },
            {
                "default": "desc",
                description: "Change sort direction to ascending (asc) or descending (desc).",
                "enum": [
                    "desc",
                    "asc"
                ],
                "in": "query",
                name: "sort_dir",
                type: "string"
            },
            {
                description: "Pass a value of 1 to enable query highlight markers .",
                "in": "query",
                name: "highlight",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of items to return per page.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "default": 1,
                description: "Page number of results to return.",
                "in": "query",
                name: "page",
                type: "number"
            }
        ],
        response: {
            "200": {
                schemaName: "searchMessages",
                properties: {
                    messages: {
                        properties: {
                            matches: {
                                items: [
                                    {
                                        properties: {
                                            channel: {
                                                properties: {
                                                    id: {
                                                        type: "string"
                                                    },
                                                    name: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            next: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            next_2: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            permalink: {
                                                type: "string"
                                            },
                                            previous: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            previous_2: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            text: {
                                                type: "string"
                                            },
                                            ts: {
                                                type: "string"
                                            },
                                            type: {
                                                type: "string"
                                            },
                                            user: {
                                                type: "string"
                                            },
                                            username: {
                                                type: "string"
                                            }
                                        },
                                        type: "object"
                                    },
                                    {
                                        properties: {
                                            channel: {
                                                properties: {
                                                    id: {
                                                        type: "string"
                                                    },
                                                    name: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            permalink: {
                                                type: "string"
                                            },
                                            previous: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            previous_2: {
                                                properties: {
                                                    text: {
                                                        type: "string"
                                                    },
                                                    ts: {
                                                        type: "string"
                                                    },
                                                    type: {
                                                        type: "string"
                                                    },
                                                    user: {
                                                        type: "string"
                                                    },
                                                    username: {
                                                        type: "string"
                                                    }
                                                },
                                                type: "object"
                                            },
                                            text: {
                                                type: "string"
                                            },
                                            ts: {
                                                type: "string"
                                            },
                                            type: {
                                                type: "string"
                                            },
                                            user: {
                                                type: "string"
                                            },
                                            username: {
                                                type: "string"
                                            }
                                        },
                                        type: "object"
                                    }
                                ],
                                type: "array"
                            },
                            pagination: {
                                properties: {
                                    first: {
                                        type: "number"
                                    },
                                    last: {
                                        type: "number"
                                    },
                                    page: {
                                        type: "number"
                                    },
                                    page_count: {
                                        type: "number"
                                    },
                                    per_page: {
                                        type: "number"
                                    },
                                    total_count: {
                                        type: "number"
                                    }
                                },
                                type: "object"
                            },
                            paging: {
                                properties: {
                                    count: {
                                        type: "number"
                                    },
                                    page: {
                                        type: "number"
                                    },
                                    pages: {
                                        type: "number"
                                    },
                                    total: {
                                        type: "number"
                                    }
                                },
                                type: "object"
                            },
                            total: {
                                type: "number"
                            }
                        },
                        type: "object"
                    },
                    ok: {
                        type: "boolean"
                    },
                    query: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/search.messages",
        description: "Searches for messages matching a query.",
        functionName: "getSearchMessages",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getStarsList: {
        path: "/stars.list",
        method: "get",
        parameters: [
            {
                description: "Show stars by this user. Defaults to the authed user.",
                "in": "query",
                name: "user",
                type: "string"
            },
            {
                "default": 100,
                description: "Number of items to return per page.",
                "in": "query",
                name: "count",
                type: "number"
            },
            {
                "default": 1,
                description: "Page number of results to return.",
                "in": "query",
                name: "page",
                type: "number"
            }
        ],
        response: {
            "200": {
                schemaName: "starList",
                properties: {
                    items: {
                        items: [
                            {
                                properties: {
                                    channel: {
                                        type: "string"
                                    },
                                    message: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    file: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    comment: {
                                        type: "string"
                                    },
                                    file: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            },
                            {
                                properties: {
                                    channel: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                type: "object"
                            }
                        ],
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    },
                    paging: {
                        properties: {
                            count: {
                                type: "number"
                            },
                            page: {
                                type: "number"
                            },
                            pages: {
                                type: "number"
                            },
                            total: {
                                type: "number"
                            }
                        },
                        type: "object"
                    }
                },
                returnType: "Collection"
            }
        },
        uri: "https://slack.com/api/stars.list",
        description: "Lists stars for a user.",
        functionName: "getStarsList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    },
    getUsersList: {
        path: "/users.list",
        method: "get",
        parameters: [],
        response: {
            "200": {
                schemaName: "usersList",
                properties: {
                    members: {
                        items: {
                            properties: {
                                color: {
                                    type: "string"
                                },
                                deleted: {
                                    type: "boolean"
                                },
                                has_files: {
                                    type: "boolean"
                                },
                                id: {
                                    type: "string"
                                },
                                is_admin: {
                                    type: "boolean"
                                },
                                is_owner: {
                                    type: "boolean"
                                },
                                name: {
                                    type: "string"
                                },
                                profile: {
                                    properties: {
                                        email: {
                                            type: "string"
                                        },
                                        first_name: {
                                            type: "string"
                                        },
                                        image_192: {
                                            type: "string"
                                        },
                                        image_24: {
                                            type: "string"
                                        },
                                        image_32: {
                                            type: "string"
                                        },
                                        image_48: {
                                            type: "string"
                                        },
                                        image_72: {
                                            type: "string"
                                        },
                                        last_name: {
                                            type: "string"
                                        },
                                        phone: {
                                            type: "string"
                                        },
                                        real_name: {
                                            type: "string"
                                        },
                                        skype: {
                                            type: "string"
                                        }
                                    },
                                    type: "object"
                                }
                            },
                            type: "object"
                        },
                        type: "array"
                    },
                    ok: {
                        type: "boolean"
                    }
                },
                returnType: "Item"
            }
        },
        uri: "https://slack.com/api/users.list",
        description: "Lists all users in a Slack team.",
        functionName: "getUsersList",
        securityDefinitions: {
            oauth_2_0: {
                authorizationUrl: "https://slack.com/oauth/authorize",
                description: "",
                flow: "accessCode",
                scopes: {
                    admin: "",
                    "channels:history": "",
                    "channels:read": "",
                    "channels:write": "",
                    "chat:write:bot": "",
                    "chat:write:user": "",
                    client: "",
                    "dnd:read": "",
                    "dnd:write": "",
                    "emoji:read": "",
                    "files:read": "",
                    "files:write:user": "",
                    "groups:history": "",
                    "groups:read": "",
                    "groups:write": "",
                    identify: "",
                    "identity.basic": "",
                    "im:history": "",
                    "im:read": "",
                    "im:write": "",
                    "mpim:history": "",
                    "mpim:read": "",
                    "mpim:write": "",
                    "pins:read": "",
                    "pins:write": "",
                    "reactions:read": "",
                    "reactions:write": "",
                    "reminders:read": "",
                    "reminders:write": "",
                    "search:read": "",
                    "stars:read": "",
                    "stars:write": "",
                    "team:read": "",
                    "usergroups:read": "",
                    "usergroups:write": "",
                    "users.profile:read": "",
                    "users.profile:write": "",
                    "users:read": "",
                    "users:write": ""
                },
                tokenUrl: "https://slack.com/api/oauth.access",
                type: "oauth2"
            }
        }
    }
}