# SNIPPETS
A web app where users can sign in, create “snippets” of data defined with tags, and search through them! (Scroll down to check out the details!)

![home page search results](/public/image/hSearchGreen.png)
### Sign Up Page (the log in page is very similar):
![Sign Up Page](/public/image/hSignUp.png)
### First-time Users Greeting:
![First-time Users Greeting](/public/image/hSearchNoSnippets.png)
### Create Snippet Page:
![create snippet page](/public/image/hCreateSnippet.png)
### Edit Snippet Page:
![edit snippet page](/public/image/hEditSnippet.png)
### Mobile Responsiveness:
![Mobile Responsiveness](/public/image/hResponsives.png)



## Wireframes: 
### Home Page:
![Home Page](/public/image/wSearch.png)
### Create Page:
![Create Snippet Page](/public/image/wCreate.png)
### Edit Page:
![Edit Snippet Page](/public/image/wEdit.png)

### Technologies Used:
- HTML
- CSS
- Javascript
- CSS grid & flexbox

### Dependencies: (from package.json)
```
  "dependencies": {
    "bcrypt": "^5.0.0",
    "connect-flash": "^0.1.1",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.5",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.17.1",
    "method-override": "^3.0.0",
    "morgan": "^1.10.0",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "pg": "^8.4.1",
    "sequelize": "^6.3.5"
  }
```

## User Stories:
##### MVP GOALS:
- As a user, I want to log in or sign up.
- As a user, after I log in, I want to see my email displayed in the top-right corner.
- As a user, when I click ‘create’, I want to see two editable fields, one where I can input tag(s), and another where I can input a value.
- As a user, I want to search for tags in the search bar and press enter, so that the snippets with more tag matches appear higher up. 
- As a user,  when I click ‘edit’ on any snippet from the home page, I want to be directed to an edit page where I can add/remove tag(s), and change the value.
- As a user, I want to be able to delete any snippet.parameters specified above.
##### STRETCH GOALS:
- As a user, I want to make case-insensitive searches for my tags.
- As a user, after I make a search, I want to see my tag-matches highlighted in green per snippet. (Extra:  For each snippet, next to the tags, show a number displaying how many tags matched!)
- As a user, I want to input an image link in the ‘value’ field for a snippet, so that the snippet will display the image above the value input field.
- As a user, when I view the web app from a narrow window or from a mobile device, I want the UI elements to adjust accordingly to maintain functionality and aesthetics.
- As a user, when I start typing a tag in the search bar, I want to see a tip that shows me what tags are available, so that I can press the ‘Tab’ key to accept the suggested tag.


## Triumphs




## Bugs





### Final Thoughts
I'm satisfied with what I was able to acccomplish in one week.
The look is good and the funcitonality is mostly good.
However, there are still bugs that need exploring, CORS errors
that need better handling, more inputs and features that need to be 
added, such as an age-range input, a loading animation, a media query 
to adjust the page on smaller screen widths, etc.  I plan to keep updating 
this project in the future!


