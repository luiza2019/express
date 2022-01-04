module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "uiniqe id of user",
            example: "1",
          },
          firstName: {
            type: "string",
            description: "name of user",
            example: "Vasya",
          },
          lastName: {
            type: "string",
            description: "lastname of user",
            example: "Ivanov",
          },
          email: {
            type: "string",
            description: " email of user",
            example: "vasya@gmail.com",
          },
          password: {
            type: "string",
            description: " password of user",
            example: "qwerty",
          },
        },
      },
      Problem: {
        type: "object",
        properties: {
          id: {
            type: "number",
            example: "1",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          tag: {
            type: "string",
            example: "Java",
            description:
              "Tag is enum, allowed only (Java, Javascript, Kotlin, Python)",
          },
          replies: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Reply",
            },
          },
          pictures: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "number",
                  description: "picture id",
                  example: 1,
                },
                image: {
                  type: "string",
                  description: "name of the image",
                  example: "66b22edb-d372-4834-855f-837502d52a3e.jpg",
                },
              },
            },
          },
        },
      },
      Reply: {
        type: "object",
        properties: {
          userId: {
            type: "number",
            description: "author of reply",
            example: "1",
          },
          problemId: {
            type: "number",
            description: "Id of related problem",
            example: 1,
          },
          text: {
            type: "string",
            description: "body of reply",
            example: "this is reply to problem",
          },
        },
      },
      Token: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
            description: "this is an access token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
          refreshToken: {
            type: "string",
            description: "this is a refresh token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        },
      },
    },
  },
};
