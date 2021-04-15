export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6078a07255f6fea82caaf502',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t6td4rfv',
                  apiId: 'dfb946df-8824-4def-9a1f-a8328f6ee270'
                },
                {
                  buildHookId: '6078a07215fae2b9b20fe739',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3khqtn5b',
                  apiId: 'e631ecf5-9faa-4dcc-91ba-8e99c506a7bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firesoflife/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3khqtn5b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
