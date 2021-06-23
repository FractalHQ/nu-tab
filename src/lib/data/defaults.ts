import type { Collection } from './types'
import getIcon from './besticon'
import cuid from 'cuid'

// TODO:
let todo = "Generate a random svg or something"
const defaultImage = todo

const defaultCollection: Collection = {
    collection_id: cuid(),
    user_id: 'anon',
    title: '🏠',
    image: null,
    bookmarks: [
        {
            bookmark_id: cuid(),
            url: 'https://burakkarakan.com/devo/',
            title: 'Devo',
            description: 'Dev News Extensions',
            image: 'https://github.com/karakanb/devo/raw/master/img/logo.png',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
        {
            bookmark_id: cuid(),
            url: 'https://openbase.io/',
            title: 'OpenBase',
            description: 'Repo Search Engine',
            image: 'https://d25hn4jiqx5f7l.cloudfront.net/companies/logos/medium/openbase_1601666331.png',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
        {
            bookmark_id: cuid(),
            url: 'https://www.reddit.com/',
            title: 'Reddit',
            description: 'Front Page of the Internet',
            image: 'https://www.redditinc.com/assets/images/site/reddit-logo.png',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
        {
            bookmark_id: cuid(),
            url: 'https://www.youtube.com/',
            title: 'Youtube',
            description: '',
            image: 'https://cdn.cdnlogo.com/logos/y/92/youtube.svg',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
        {
            bookmark_id: cuid(),
            url: 'https://mail.google.com/mail',
            title: 'Gmail',
            description: 'Email',
            image: 'https://cdn.svgporn.com/logos/google-gmail.svg',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
    ],
    position: 0,
}

export default defaultCollection