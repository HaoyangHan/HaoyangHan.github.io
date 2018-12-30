/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
  'name' : "Haoyang Han",
  'role' : "New Grad",
  'contacts': {
    'mobile': "224-456-7696",
    'email': 'haoyanghan1996@gmail.com',
    'github': 'HaoyangHan'
  },
  'welcomeMessage': "I'm a master student of project management at Northwestern University. I've studied Machine Learning, Deep Learning, Deep Reinforcement Learning, Time Series Analysis and have multiple projects, internships related to data science. I’m looking for full-time positions and can be reached by email at haoyanghan2017@u.northwestern.edu",
  'skills': [
    'Python', 'MySQL & PostgreSQL', 'Hadoop', 'Spark', 'AWS', 'torch', 'R/Rmarkdown', 'D3.js', 'C'
  ],
  'bioPic': 'https://drive.google.com/open?id=15UyXHMFA37xWPMmlXqMbbuOtHffGpEsc'
};


var education = {
  'schools': [
    {
      'name': 'Northwestern University',
      'location': 'Evanston, IL',
      'degree': 'Master of Science',
      'major': 'Project Management',
      'dates': '09.2017-12.2018',
      'url': 'https://www.northwestern.edu'
    },
    {
      'name': 'Georgia Tech',
      'location': 'Atlanta, GA',
      'degree': 'Master of Science',
      'major': 'Computer Science',
      'dates': '01.2019-present',
      'url': 'https://www.gatech.edu'
    },
    {
      'name': 'Ocean University of China',
      'location': 'Qingdao, China',
      'degree': 'Bachelor of Science',
      'major': 'Marine Science, Rescourse and Environment',
      'dates': '09.2013-06.2017',
      'url': 'http://eweb.ouc.edu.cn'
    }
  ],
  "online courses": {
    'title': 'Data Scientist certificate',
    'school': 'DataQuest.io',
    'dates': '01.2018',
    'url': 'https://www.dataquest.io/verify_cert/FQW3QSYG2CCGIPGVSAU4/'
  }
};
var work = {
  'jobs': [
    {
      'employer': 'SOFWERX',
      'title': "Data Scientist Intern",
      'location': "Tampa, FL",
      'dates': "Dec.2018-present",
      'description': "In progress."
    },
    {
      'employer': "Alpha2Fund",
      'title': 'Intern, Machine Learning Quantitative Researcher',
      'location': 'Beijing, China',
      'dates': 'June 2018-Sep 2018',
      'description': "• Designed new Alpha factor combination pipeline by implementing ensemble machine learning algorithms, encompassing LR, RF, MLP, kNN,
XGBoost, for decision making in stock market, utilizing hundreds of alpha factors in commodity future market.
• Improved information correlation from 1.16 with the linear combination baseline to 1.57 by forecasting long/short position of specific stocks by
training GARCH(for single stock) and GRU(for multiple stocks) on stock alpha factors.
• Accelerated minute level stock prediction by 20% by replacing XGBoost based model with a lightGBM based model for factors combination."
    },
    {
      'employer': 'Kellogg School of Management',
      'title': 'Research Assistant',
      'location': 'Evanston, IL',
      'dates': 'April,2018-July, 2018',
      'description': " Redesigned data preprocessing procedure for recognizing handwritten documents from an Indian hospital dataset; Improved classification accuracy by 14% with a fine-tuning Convolutional Neural Network (CNN)."
    },
    {
      'employer': '',
      'title': ,
      'location': ,
      'dates': ,
      'description':
    }
  ]
}
work
work 包含一个 jobs 数组。jobs 数组中的每个对象都应该包含 employer、title、location、工作 dates 和 description 字符串。

projects
projects 包含一个 projects 数组。projects 数组中的每个对象都应该包含 title、dates 和 description 字符串以及 images 数组，其中包含项目图片的 URL 字符串。

bio
bio 包含 name、role、welcomeMessage 和 biopic 字符串， contacts 对象以及 skill 字符串的 skills 数组。contacts 对象应包含 mobile 号码、email 地址、 github 用户名、twitter 句柄和 location。twitter 属性是可选的。

education
education 包含一个 schools 数组。schools 数组中的每个对象都包含 name、location、degree、dates 和 url 字符串，以及 major 字符串的 majors 数组。

education 还包含一个 onlineCourses 数组。onlineCourses 数组中的每个对象都应该包含 title、school、dates 和 url 字符串。
