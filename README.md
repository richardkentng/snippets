# SNIPPETS
A web app where users can sign in, create “snippets” of data defined with tags, and search through them!

![home page search results](/public/image/hSearchGreen.png)

### Contributers
- Aman Maharjan
- Cesario Mendoza
- Richard Ng


### Technologies Used:
- HTML
- CSS
- Javascript
- node.js
- express framework
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


## More Screenshots: (Scroll down to get to the details)
### Sign Up Page:
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
![Home Page](/public/image/wSearch.png)
![Create Snippet Page](/public/image/wCreate.png)
![Edit Snippet Page](/public/image/wEdit.png)



## Triumphs
### Ordering snippets based on number of tag-matches
After some digging around, we discovered that the children of css grid containers 
have a magical property called 'order'.  It is an integer.  Every grid container
child has a order value of 0 by default.  The more negative it is, the higher up
it will be displayed in the grid!  Knowing this, we after we calculate the number of
matches per snippet, we can apply that number to the order property!
```
    snippetTags.forEach((snippetTag, i) => {
        //if current tag can be found in searchInputString, increment score
        if (searchInputString.toLowerCase().indexOf(` ${snippetTag.toLowerCase()} `) >= 0) {
            score++
        }
        
    })
    snippet.style.order = score * -1;
} 
```



## Challenges
### Responsiveness only for some phones
It was tricky getting the children (the snippets) of the css grid container to stay
within the bounds of said container!  We had to set a bunch of media queries for a 
bunch of different screen widths.  However, we couldn't include all the screen widths
out there. 
![Poor Responsiveness for some phones](/public/image/hPoorResponsiveSearchRegular.png)

## Issues
### Create/Edit Page Needs Data Validation
Why would anyone create a snippet without any information?  Or why would someone
create a snippet without tag(s), or a snippet without a value?  Our next update
will be to include input validation for the create and edit page to prevent such 
occurrences.
![Poor Data validation](/public/image/hPoorDataValidation.png)

## Fun Code
### Image Link Detection
Snippets are more fun when it can detect image links, and display that image!
Using a couple if statements, we can say that if .jpeg, .gif, .png, or .jpg is 
found in the value string of a snippet, then feed that value into the src for
an image element!  Now the next thing we should do is to make sure that these 
extensions are found at the end of the string..
```
<!-- if value contains .jpeg, gif, png, or jpg, then show an image -->
<% if(snippet.value.indexOf(".jpeg") !== -1 || snippet.value.indexOf(".gif") !== -1 || snippet.value.indexOf(".jpg") !== -1 || (snippet.value.indexOf(".png") !== -1)) { %>
    <img class="thumbPic" src="<%= snippet.value %>">
<% }  %>
```                        
### Random Data Populator
When you access the create-snippet page, there is an example snippet on the bottom that
is populated with data randomly using Math.random()!:
```
<script>
  const examples = [
      {
          value: '11/23/2012',
          tag: 'anniversary day we first met'
      },
      {
        value: 'https://simplywholefoodsdotcom.files.wordpress.com/2015/01/hummuspictorial2.jpg',
        tag: 'pic hummus ingredients recipe'
      },
      {
        //pretend there are many iterations of the above objects
      }
  ]

  const random = Math.floor(Math.random() * examples.length)

  document.querySelector('.exValue').textContent = examples[random].value
  document.querySelector('.exTag').textContent = examples[random].tag

</script>
```





