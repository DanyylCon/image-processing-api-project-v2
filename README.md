# Image Processing API V2

This project is an image processing API which generates an image based on the parameters the user enters in the query string.
This generated image is then loaded onto the screen, and cached. If the user enters the same parameters as before, the cached
image will be served without producing another request. This project is built with TypeScript and Express. It utilizes the Sharp
library for image transformation, and Jasmine for testing.

## Instructions for use:

Run the following commands in the console to make sure formatting, testing and building work properly:

1. npm run prettier (this will make sure the formatting and styling is correct)
2. npm run lint (this will make sure there are no logical or stylistic erros)
3. npm run test (this will run the build command for typescript and the test command for jasmine in one line)
3. npm run start (this will start the your server locally on port 3000 with the index.ts file) OR
   npm run startjs (this will start from the index.js file from the build directory)

Once the server is running you can use the API by supplying it parameters in the query string in this format:
"filename=FILENAME&height=HEIGHT&width=WIDTH" where FILENAME is one of the 5 image filenames (encenadaport,
fjord, icelandwaterfall, palmtunnel or santamonica), the height and width are numbers which represent the size
of the transformed image in pixels. An example of the full address and query string in the adress bar of your
browser would look like this: "http://localhost:3000/?filename=icelandwaterfall&height=300&width=400".

Once the image is generated onto the screen, it should appear in the thumbs folder, the image name will be the
query string with the parameters. If you try processing a request with the same parameters as before, the built
in express.static middleware will stop the request and load the cached image from the thumbs folder.
