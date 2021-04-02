import type { Collection } from './types'
import cuid from 'cuid'
import getIcon from './besticon'

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
            image: defaultImage,
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
        {
            bookmark_id: cuid(),
            url: 'https://burakkarakan.com/devo/',
            title: 'Also Devo',
            description: 'Dev News Extensions',
            image: 'https://github.com/karakanb/devo/raw/master/img/logo.png',
            background: '#1D1D1D',
            foreground: '#F5F5F5',
            collection_id: 'default',
            tags: ['Dev', 'News']
        },
    ],
    position: 0,
}

export default defaultCollection