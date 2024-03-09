const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'Google',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'Google',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'Google',
      name: 'Gemini',
      key: 'ge',
      url: 'https://gemini.google.com/',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'gemini',
      quickLaunch: false,
    },
    {
      category: 'Google',
      name: 'Keep',
      key: 'k',
      url: 'https://keep.google.com/',
      //color: '#5682a3',
      icon: 'Keep',
      quickLaunch: false,
    },
    {
      category: 'Google',
      name: 'Meet',
      key: 'dc',
      url: 'https://meet.google.com/',
      color: '#7289da',
      icon: 'meet',
      quickLaunch: false,
    },
    {
      category: 'Google',
      name: 'Translate',
      key: 't',
      url: 'https://translate.google.com/',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'translate',
      quickLaunch: false,
    },
    {
      category: 'Google',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'Outlook',
      key: 'o',
      url: 'https://outlook.live.com/mail/0/',
      color: '#7289da',
      icon: 'outlook',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'Teams',
      key: 't',
      url: 'https://teams.live.com/_#/conversations/?ctx=chat',
      color: '#7289da',
      icon: 'teams',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'OneNote',
      key: 'on',
      url: 'https://www.onenote.com/notebooks?auth=1&nf=1&fromAR=1',
      color: '#7289da',
      icon: 'onenote',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'BusinessCentral',
      key: 'bc',
      url: 'https://businesscentral.dynamics.com/1b53b3cd-3eb8-4d53-8d02-e11a98cf1f76/Sandbox-Dev',
      color: '#7289da',
      icon: 'businesscentral',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'PowerApps',
      key: 'pa',
      url: 'https://make.powerapps.com/environments/35796dcf-a2a8-ef02-9f13-9ed760616ddd/home?utm_source=office&utm_medium=app_launcher&utm_campaign=office_referrals',
      color: '#7289da',
      icon: 'powerapps',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'PowerAutomate',
      key: 'pa',
      url: 'https://make.powerautomate.com/environments/35796dcf-a2a8-ef02-9f13-9ed760616ddd/flows',
      color: '#7289da',
      icon: 'powerautomate',
      quickLaunch: false,
    },
    {
      category: 'Microsoft',
      name: 'PowerBI',
      key: 'pb',
      url: 'https://app.powerbi.com/home?experience=power-bi',
      color: '#7289da',
      icon: 'powerbi',
      quickLaunch: false,
    },

    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'StackOverflow',
      key: 'st',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },

    // {
    //   category: 'Programming',
    //   name: 'Dev',
    //   key: 'md',
    //   url: 'https://dev.to/',
    //   search: '/search?q={}',
    //   color: '#212121',
    //   icon: 'dev',
    //   quickLaunch: false,
    // },
    {
      category: 'Programming',
      name: 'DevDocs',
      key: 'dd',
      url: 'https://devdocs.io',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
    },


    {
      category: 'Tools',
      name: 'Postman',
      key: 'p',
      url: 'https://web.postman.co/',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'postman',
      quickLaunch: true,
    },
    {
      category: 'Tools',
      name: 'Codepen',
      key: 'cp',
      url: 'https://codepen.io/',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'Codepen',
      quickLaunch: false,
    },
    {
      category: 'Tools',
      name: 'Replit',
      key: 'rp',
      url: 'https://replit.com/',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'replit',
      quickLaunch: false,
    },
    {
      category: 'Tools',
      name: 'VSCode',
      key: 'vs',
      url: 'https://vscode.dev/',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'vscode',
      quickLaunch: false,
    },
    {
      category: 'Tools',
      name: 'GitPod',
      key: 'gp',
      url: 'https://www.gitpod.io/',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'gitpod',
      quickLaunch: false,
    },
    {
      category: 'Tools',
      name: 'Cloudflare',
      key: 'cf',
      url: 'https://www.cloudflare.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'cloudflare',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'Canva',
      key: 'c',
      url: 'https://www.canva.com/',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'Canva',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Disney',
      key: 'dh',
      url: 'https://www.hotstar.com/in/home?',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'disney',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
