module.exports = {
  get: {
    tags: ["Problem"],
    description: "get all problems",
    operationId: "getProblems",
    parameters: [
      {
        name: "q",
        in: "query",
        schema: {
          type: "string",
          description: "search for specific problem by title or tag",
          example: "q=hello",
        },
        description: "search for specific problem by title or tagd",
      },
      {
        name: "page",
        in: "query",
        schema: {
          type: "number",
          description: "page of problems",
          example: "page=2",
        },
        description: "get specific page of problems",
      },
    ],
    responses: {
      200: {
        description: "one problem",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Problem",
              },
            },
          },
        },
      },
    },
  },
};
