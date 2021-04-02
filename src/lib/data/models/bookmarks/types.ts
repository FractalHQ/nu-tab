export type Bookmark = {
    bookmark_id: string;
    url: string;
    title?: string;
    description?: string;
    image?: string | null;
    background?: string | null;
    foreground?: string | null;
    tags?: Array<string>;
    collection_id: string;
};

export type Collection = {
    collection_id: string;
    user_id: string;
    title: string;
    image?: string;
    bookmarks: Array<Bookmark>;
    position: number;
};
