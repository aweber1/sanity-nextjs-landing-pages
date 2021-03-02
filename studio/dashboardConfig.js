export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '603e846215957007bbf481dc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vxmi11u9',
                  apiId: '9e928c41-a193-4582-a6cf-f2bfdbbac44e'
                },
                {
                  buildHookId: '603e8462dd5c4c06469ca9cb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mowqq872',
                  apiId: '1cbdc75a-3f11-4237-abfd-e233beb27346'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aweber1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mowqq872.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
