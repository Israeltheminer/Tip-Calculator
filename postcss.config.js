module.exports = {
   plugins: [
      require('postcss-import-ext-glob'),
      require('postcss-import'),
      require('cssnano'),
      require('postcss-preset-env')({stage: 1}),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
         content:[
            './src/**/*.{html,js}',
            'index.html'
         ],
         defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }),
   ]
 }