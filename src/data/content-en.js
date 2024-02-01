const person = {
  name: 'Dmitriy Drozhzhin',
  job: 'Frontend Developer (Vue.js)'
}
const work = [
  {
    job: 'Web E_commerce Developer',
    comp: 'OkDveri',
    period: '02.2019 - 10.2023',
    text: [
      'Over 2 years experience as an e-commerce web developer in the retail sector. Main stack of instruments: Vue 2/3 CLI, JavaScript (ES6+), HTML, SCSS, Pixel Perfect markup, responsive web design. Notable accomplishments include increasing the store\'s conversion rate by improving the product page user interface based on sales experience and user preference analytics',

      'Improved the process of uploading data for multi-variable products into the Web Store database by creating an application that processes data and generates export tables with: product variations, categories, attributes, SEO text, etc.',

      'Designed a web store from scratch',

      'Created SEO-friendly textual and graphic content, including product illustrations for the okdveri.com.ua store',
      // 'Designed SEO friendly content: articles, product illustrations, tech. schemas and etc. for <a href="https://okdveri.com.ua" style="position: relative; left: 0px; "><span class="ok-icon-logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> okdveri.com.ua</a> store',

      'Improved product presentation concept: category structure, relevance of attributes and variations that helped increase sales',

      'Administrated hosting, Google and other related accounts',

      'Designed: several TMs, supporting graphics, advertising printing products',

      'Launched SMM advert campaign',

      'Managed Key Accounts'
    ]
  },
  {
    job: 'Securities transaction specialist',
    comp: 'NCH Advisors Inc. (rep.office in Ukraine)',
    period: '2002 - 10.2017',
    text: [
      'Managed investment & custody bank accounts',

      'Performed settlements of securities transactions (local shares, ADRs / GDRs, bonds)',

      'Kept the investment records (database) up to date and reported to headquarters',

      'Collaborated with local / foreign banks, custodians, notaries, state reps',

      'Improved document flow between the office and partners'
    ]
  },
  {
    job: 'IT Department. System administrator',
    comp: 'NCH Advisors Inc. (rep.office in Ukraine)',
    period: '01.1996 - 2002',
    text: [
      'Served as tech. administrator for office computer, network and other equipment',

      'Provided technical support and software issues assistance',

      'Assisted the investment database users in tech issues',

      'Performed planning / setting / documentation of office network & phone systems',

      'Maintained NetWare, FreeBSD servers'
    ]
  }
]
const titles = ['WORK EXPERIENCE', 'EDUCATION', 'SKILLS', 'CERTIFICATES', 'LANGUAGES']
const skills = ['Vendor Partnership', 'Workflow Planning', 'Vendor Negotiating', 'Work Ethic', 'Discipline', 'Attention to details']

let education = [
  {
    job: 'Economical Institute of Management, Kiev',
    comp: '(management,  specialist)'
  }
  
]

export { work, education, person, titles, skills }
