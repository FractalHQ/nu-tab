// import postcss from './postcss.config.js';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const dev = process.env.NODE_ENV === 'dev'

export default {
    preprocess: [
		preprocess(
			{
				postcss: {
					plugins: [
						autoprefixer(),
							cssnano({
								preset: 'default'
							})
					]
				}
			}),
    ],
};
