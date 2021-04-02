import defaultCollection from './defaults'

// https://besticon-demo.herokuapp.com/
const iconFromUrl = (url: string) => `https://besticon-demo.herokuapp.com/allicons.json?url=${encodeURIComponent(url)}`;

const getIcon = async (url: string) => {
    const test_url: string = defaultCollection.bookmarks[1].url;
    try {
        fetch(iconFromUrl(url))
            .then((response => response.json()))
            .then(data => {
                console.log(data);
                return data;
            });
    } catch (e) { console.error(e); }
    
}

export default getIcon
