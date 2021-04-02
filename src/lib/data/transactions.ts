import defaultBookmarks from './models/bookmarks/defaults';
import { activeCollection } from './dbStore';
import db from './db';

const verbose: boolean = false; // toggle to enable verbose debugging
function log(str: string, color: string = 'orange', font_size: number = 15, obj?: Object) {
    if (verbose) {
        console.log(`%c${performance.now().toFixed(1)}: -- ${str}`, `font-size:${font_size}px;color:${color}`);
        if (obj) {
            console.log(obj);
        }
    }
    else {
        (s?, c?, f?, o?) => { };
    }
}

/**
 * Initializes default bookmark collection.
 * @param  {BookmarkDB} db
 * @returns {Collection} default_collection
 */
export async function addDefaultCollection() {
    log('🎬 Adding default Bookmark Collection: ', 'lightpurple', 25);

    await db.collections.add(defaultBookmarks);
    activeCollection.set(defaultBookmarks);

    log('🏁 Add Defaults Complete', 'lightpurple', 25);
}