export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "daentrega-6aff6",
        "private_key_id": "35acec0f8082485a95a98ab09d222bd70cd2c380",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaxDGmhXGil6wf\nED2EipXmsFHs4HZ64rna/GQ8Mq+itSy6VA5ZtK18/gbUEftHHyPpESonEEFYfw5C\np3mzj9tuqlOe0mOucMc9D3ZRf9bV+RUuNbh4vqZbo2CBQAmj4oa+F9aaYlhwahOE\nBdunY++4NaOUyzKwK2E4ghBy45rhEiTEg3DQMC6MNURphvUJ6yWY3KpTWyM8ko7R\nK4GIh7k+jYwJKgWuhJvhxbc/IcAX3q0IGVxYDmZ7OGz8YADZ6IKvd2zF3i31c/Km\nz/Up8ytEdt3sMmF9nJp8DYlrd9Lf/ISsz9qvCzZv4qlC24XOuFdfzzn/0gzqjFEq\noOm6NP7pAgMBAAECggEAAo7TOpXXsstqna7RMs4ZkSZWjEw0w8ODNTKDs5eriHcR\nxgNFTh1AMCHWBLjxXBO7LmB0FRDd4PO5+Bxi1LbAITGbz92upmpDGL1shAdRX9hN\n4yV3JuO7xdBK9DKV64lUbHLiFKDN0Q8nwxWtCN9heGbGjTCDO3R+wbDV9cLQ7f8D\nW7edfBEEiST0vcN4AhgATW1l+hbgeleyPTwZKSAbiD4vCcKlA+G6T2UhtvtQx6AR\nKG+tM5JRfbaMIzUKONOkC28ViWxw1qQXtGBn9xkyiYTiQCc3InXVmjim4LnOucoN\nHJFchaYI1SlqE1zUoPT6wlOCLtFyJhtpsju7D4+jKwKBgQDJWDzmP0lElAPaMUVt\nz/qaLv/fXxhQeFE6qnMA9+U1DFB9OUT+pxdAu/PD0MYj3ReMcVpcz3mmUE/ixC0p\n2Icuy8BZ+KZ+0Pa7nV52gXKgs0jUV3YGzafoIlq06U2Kq+sAb91Ruhl/ZJy6c7aA\n6OwcaaYDLanWYaET2dchEnpdPwKBgQDExyf3PcmBHNQL8gMbyw17W+j8tRzp4GDc\nf6nzzwFzNv49+deHtk3CPlW55NZ8nOWWkCrlZfO07xCYnaCFLt6Uv5A9vFL/rVk/\nl4nqO6qoQYLcT/e6DM6XULJfliG+521wPSaWlWiPpXf7Ty+8RaYq0WK47g38lCFy\nu/K4UWCR1wKBgDQlGxiSeVo+b0T6D74h6Ag4deIW0cg9cOQdss0kZoM3njzgMSM2\niQol4zrqffZZ0zh3Puzceuf80sOrBPtabaBL+pQSlqQvYEc0uXs9iT9fT1RXFmUq\nq/qtswo5hfCNF760OgBpjyL0HrcXMsPuDwBIyEr4b4zrGfl3KIUTMQenAoGAe8Vh\nCAyfIE0Hu3PALM0tb7hB9iHdS+ZMRqUuOyKroNKoXEc4IC60/kbDGSgtGTh+2JNZ\nx+y2u8nbQIN1IhB3BEzx50L7WcKpbmxc3S4mi6qZKwZJpYbEszyY1bLTCwb6OSzd\nhr33hNLpgvMt7VhJyojldbiWp5Zs64P4iaL2AQUCgYEAyHW2A9uLNbcIeWZFKd97\nWmTJhwevI4VmEdqSdYHu9FRt+3qp+i48U3Biu+VAv50198mhh8qLZBT31oWRHtEd\ndlaoxvz2UmjHPOIuBmmJjTPdpV8n3TghlTnnEth4Symx8xf7ur/ZBV9HNNqMbKxg\nkdNPHAB8AaboqOsXkqSuI0U=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-mv4b7@daentrega-6aff6.iam.gserviceaccount.com",
        "client_id": "100197103191086101488",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mv4b7%40daentrega-6aff6.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
