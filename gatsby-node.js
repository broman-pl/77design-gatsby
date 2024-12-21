exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: `/gal`,
        toPath: `/`,
        statusCode: 200,
    })
}
