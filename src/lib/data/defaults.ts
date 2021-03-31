import type { Collection } from './types'
import cuid from 'cuid'

export const defaultCollection: Collection = {
    collection_id: cuid(),
    user_id: 'anon',
    title: '🏠',
    image: null,
    bookmarks: [{
        bookmark_id: cuid(),
        url: 'https://burakkarakan.com/devo/',
        title: 'Devo',
        description: 'Dev News Extensions',
        image: 'https://github.com/karakanb/devo/raw/master/img/logo.png',
        background: '#1D1D1D',
        foreground: '#F5F5F5',
        collection_id: 'default',
        tags: ['Dev', 'News']
    }],
    position: 0,
}
