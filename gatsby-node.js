const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const fs = require('fs');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        careers: allStrapiCareerPath {
          edges {
            node {
              name
              strapiId
            }
          }
        }
        courses: allStrapiCourse {
          edges {
            node {
              name
              strapiId
              c: career_paths {
                color
                id
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const careers = result.data.careers.edges;
  const courses = result.data.courses.edges;

  careers.forEach((career) => {
    createPage({
      path: `/career/${career.node.name.replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/CareerPath.tsx'),
      context: {
        name: career.node.name,
        id: career.node.strapiId,
      },
    });
  });
  courses.forEach((course) => {
    createPage({
      path: `/course/${course.node.name.replace(/ /g, '-') + course.node.strapiId}`,
      component: require.resolve('./src/templates/CourseDetail.tsx'),
      context: {
        name: course.node.name,
        id: course.node.strapiId,
        course,
      },
    });
  });
};
