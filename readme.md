# Free Cooper Union Twitter Link Extraction

Automatically(ish) generate a folder with json files for every link tweeted by @FreeCooperUnion, including title, description, article text, image urls, dominant image colors, keywords, and related articles.

## Get JSON files for each link

1. sign up for api key at http://embed.ly
2. downloaded twitter archive for @freecooperunion
3. import tweets.csv to google drive
4. sort by expanded_urls column
5. paste expanded_urls into sublime text
6. find and replace commas with line breaks
7. select all text and run permute lines > unique to eliminate duplicate urls
8. find and replace http:// with http://api.embed.ly/1/extract?key=YourKeyHere&url=http://
9. find and replace https:// with http://api.embed.ly/1/extract?key=YourKeyHere&url=https://
10. save file in a folder called /fcu-wget as urls.txt
11. open terminal and cd to /fcu-wget
12. run $ wget -i urls.txt
13. batch cleanup filenames using automator's rename function
14. batch append .json to filenames using automator

## Concatenate JSON with Grunt

1. install [grunt](http://gruntjs.com/) ([tutorial](http://24ways.org/2013/grunt-is-not-weird-and-hard/))
[rest of doc todo]

## Generate a video of every image

1. copy main array "[ ]" out of concat.json into links.json
2. download handlebars.js
3. open images.html (which imports links.json and loops through all images for each link outputting a list of urls) in firefox and use downthemall extension to download all linked images to /images folder
4. open /images fodler in [Time Lapse Assembler](http://www.dayofthenewdan.com/projects/time-lapse-assembler-1/) at max quality and 60fps
