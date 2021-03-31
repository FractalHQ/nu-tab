import cuid from 'cuid';
import { userSession } from '../auth/auth';
import { Storage } from '@stacks/storage';

const storage = new Storage({ userSession });
const BOOKMARKS_FILENAME = 'links.json';

type Bookmark = {
	id: string;
	url: string;
	title: string;
	description: string;
	image: string;
};

// @type {Bookmark[]}
export const defaultBookmarks: Bookmark[] = [
	{
		id: cuid(),
		url: 'http://https://burakkarakan.com/devo/',
		title: 'Devo',
		description: 'Dev News Extensions',
		image: 'https://github.com/karakanb/devo/raw/master/img/logo.png',
	},
];

/**
 * Save bookmarks to Gaia
 * @param {UserSession} userSession
 * @param {Bookmark[]} bookmarks
 * @param {boolean} isPublic
 */
export const saveBookmarks = async (
	userSession: userSession,
	bookmarks: Bookmark[],
	isPublic = false,
) => {
	await storage.putFile(
		BOOKMARKS_FILENAME,
		JSON.stringify({ bookmarks, isPublic }),
		{
			encrypt: true,
			dangerouslyIgnoreEtag: true,
		},
	);
};

/**
 * Fetch bookmarks for a specific user. Omit the `username` argument to fetch the current user's bookmarks.
 *
 * If no bookmarks are found, and no username is provided, then the default bookmarks are returned.
 * If bookmarks are found, we check to see if they are public.
 * @param {import("@stacks/auth").UserSession} userSession
 * @param {string} username - the username to fetch bookmarks for. Omit this argument or set it to an empty string
 * to fetch the current user's bookmarks.
 * @returns {{ bookmarks: Bookmark[] | null, public: boolean }}
 */
export const fetchBookmarks = async (
	userSession: userSession,
): Promise<{ bookmarks: Bookmark[]; public: boolean }> => {
	try {
		/** @type {JSON} raw JSON stored in Gaia */
		const bookmarksJSON = await storage.getFile(BOOKMARKS_FILENAME, {
			decrypt: false,
		});
		if (bookmarksJSON) {
			let json: Object;
			if (typeof bookmarksJSON === 'string') {
				json = JSON.parse(bookmarksJSON);
			}

			const decrypted = JSON.parse(
				await userSession.decryptContent(bookmarksJSON),
			);
			return {
				bookmarks: decrypted.bookmarks,
				public: false,
			};
		} else {
			return {
				bookmarks: defaultBookmarks,
				public: false,
			};
		}
	} catch (error) {
		return {
			bookmarks: defaultBookmarks,
			public: false,
		};
	}
};
