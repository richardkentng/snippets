# [SNIPPETS](https://snippet-master.herokuapp.com/)

*A web app where users can sign in, create “snippets” of data defined with tags, and search through them!*

![home page search example green](/public/image/hSearchGreen.png)

Tired of fumbling for text and images that are scattered throughout your various folders and sites?
Are you a developer who finds it hard to remember the exact syntax for specific lines of code, or just 
someone who wants easy access to pieces of information?

Try [snippets!](https://snippet-master.herokuapp.com/).  After you create a snippet and give it some tags to search by,
you'll never be more than a few seconds away from it!


### Contributers
- Aman Maharjan
- Cesario Mendoza
- Richard Ng


### Technologies Used:
- HTML
- CSS
- Javascript
- Node.js
- Express Framework
- CSS Grid & Flexbox
- Heroku (deployment)

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

## Entity Relationship Diagram 
### One User Has Many Snippets
![ERD](/public/image/erd.png)

## More Screenshots:
### Sign Up Page:
![Sign Up Page](/public/image/hSignUp.png)
### First-time Users Greeting:
![First-time Users Greeting](/public/image/hSearchNoSnippets.png)
### Create Snippet Page:
![create snippet page](/public/image/hCreateSnippet.png)

^ The 'value' field is where you would type the thing that is hard to remember 
(e.g. line of code, a complex keyboard shortcut, etc.).  The 'tag' is where you would 
enter some words separated by spaces.  You will be able to search for these words in the
search bar!  (But be careful not to exceed 255 characters for either!  More on that later.)
### The Created Snippet:
![created one snippet](/public/image/hSearchOneSnippet.png)

^ This is what we call a 'snippet'!  Once you create a lot of them, the search bar will become your best friend!
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
![Poor Responsiveness for some phones](/public/image/hPoorResponsiveSearchRegular.png)

It was tricky getting the children (the snippets) of the css grid container to stay
within the bounds of said container!  We had to set a bunch of media queries for a 
bunch of different screen widths.  However, we should have set more media queries,
because phones of certain widths will distort the UI. (I should also mention that 
the mobile experience is poor because the site will refresh every time that the search
bar is cleared.  This is unnoticeable for desktop users, but it will collapse the key
board for mobile users.  Talk about annoying!)


### Poor Data Type Choice 
Every snippet has two attributes:  A tag and a value.  We chose the data type
of 'string' for each of them...which is limited to 255 characters.  That means 
that if someone inputs a string longer than that, the site will break. We should
update the data type to 'text' to avoid this limitation.

### Create/Edit Page Needs Data Validation
![Poor Data validation](/public/image/hPoorDataValidation.png)

Why would anyone create a snippet without any information?  Or why would someone
create a snippet without tag(s), or a snippet without a value?  Our next update
will be to include input validation for the create and edit page to prevent such 
occurrences.


## Coolest Feature?
### Smart Autocomplete
![tab autocomplete](/public/image/hAutoTab.png)
![shift cycling](/public/image/hAutoShift.png)
![invalid partial](/public/image/hAutoNoTagsStart.png)

*Press Tab to Autocomplete.  Press Shift to cycle through available tags.*
This website is about making accessing information as easy and quick as possible,
so we experimented with giving it autocomplete functionality and invalid input feedback!
But, it could still be a lot smarter.  If a user submits an invalid search, we should re-run
the search with the last remembered tab suggestion.  If a user presses shift, then we should
automatically update the search field with the newly selected tag.  Something to think about
for future iterations!


## Fun Code
### Image Link Detection
Snippets are more fun when it can detect image links, and display that image!
Using a couple if statements, we can say that if .jpeg, .gif, .png, or .jpg is 
found in the value string of a snippet, then feed that value into the src for
an image element!
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

## Final Thoughts
It's pretty cool to have a fully functioning web app where user's can actually create 
their own accounts and access information unique to them.  At the same time, the app
is very simple.  We would like to experiment more with working with complex layouts 
and database setups.  The tab-autocomplete functionality is a joy to play with. That 
being said, this 'simple' app still needs a lot of work. Breaking the 255 character 
limit will crash the site.  Mobile users will find that typing an initial capital letter
will prompt error feedback, and that their keyboard disappears when they clear their search.
There are a myriad of other little things and cool feature ideas, but all fun (and headaches)
need a deadline.  Not to worry, we'll revisit this!




