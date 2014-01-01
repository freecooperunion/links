# Free Cooper Union Twitter Link Extraction

Automatically(ish) generate a folder with json files for every link tweeted by @FreeCooperUnion, including title, description, article text, image urls, dominant image colors, keywords, and related articles.

## Steps

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