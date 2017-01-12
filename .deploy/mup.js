module.exports = {
  servers: {
    one: {
      host: 'aws ip address',
      username: 'aws ec2 instance username',
      pem: 'path to aws .pem file'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'app name',
    path: 'app path on local',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      PORT: 80,
      ROOT_URL: 'application url',
      MONGO_URL: 'mongodb://localhost:27017/app db',
      MAIL_URL: 'smtp://your_email_address@domain.com:password@smtp.domain.com:port'
    },

    //dockerImage: 'kadirahq/meteord'
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
