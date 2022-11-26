<!-- this README.md file content is copied from the udacity Mentioned link in the project Rubric: 

https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md

i just changed some stuffs Modifing the related info to the project... so all the credit for this README.md file goes to it's owner, in the link above -->

<!-- I do upload a version of this project folder on Github:

the link for it:
     https://github.com/IslamMahmoudH/Landing-Page.git

-->

# Project Title

Landing Page Project by udacity.com

# Demo-Preview

<!-- Add a demo for your project -->



![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 

This project is all about converting the landing page from the static version to the dynamic version using JavaScript only.

# Table of contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
    - [Project requirement](#project-requirement)
    - [Project solving](#project-solving)
- [The Author](#the-author)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)


To download this project feel free to clone the repo on your device using the following command:

```git init```

```git clone https://github.com/IslamMahmoudH/Landing-Page.git ```

# Usage
[(Back to top)](#table-of-contents)

<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->
There's nothing to use in here unless you want to add or develope more stuff in this project feel free to do so, it's not a personal project it's a free source from udacity to practice on doing some great stuff using JavaScript and manipulating the DOM.

# Development
[(Back to top)](#table-of-contents)

<!-- This is the place where you give instructions to developers on how to modify the code.

You could give **instructions in depth** of **how the code works** and how everything is put together.

You could also give specific instructions to how they can setup their development environment.

Ideally, you should keep the README simple. If you need to add more complex explanations, use a wiki. Check out [this wiki](https://github.com/navendu-pottekkat/nsfw-filter/wiki) for inspiration. -->
### Project Requirement:
- Navigation:

    Navigation should be build dynamically as an unordred list <ul></ul> element. and navigating should be build using ```append```, ```appendChild```, and ```innnerHTML```.
- Section active state:

        It should be clear which section is being viewed while scrolling through the page.
- scroll to anchor:

        When clicking an item from the navigation menu, the link should scroll to the appropriate section.

### Project solving:
- At first i start building the navigation bar by defining the variables which will hold the sub element inside the main navbar menu, then building my builder function to build the navigation bar dynamically, in this case, i chosed two main gloabal variables to hold everything i will need will going on and these are:
    - ```main-sections``` to hold the all sections inside the page.
    - ```nav-bar``` to hold the subelements inside the navigation menu.
- The ```navMenuBuilder``` function, iterating over all the sections in the page to get every section id and section data we use to build our new created elements and link them to each others, and creating a new ```<li>``` elements to hold the anchor's ```<a>``` elements inside the navigation bar menu we will use later to navigate to the right section using the ```id``` attribute inside the ```li``` element using the ```#``` to refer the section we want to go to.
- Adding the class to each ```anchor``` element, and then adding the title to this element to appear with the name according to the section using the ``` data``` attribute we get previously.
- Adding ```eventListener``` to the ```anchor``` element to navigate smoothly. and pervent the default behavior which will jump instantly to the section.
- The final thing is to link all the element to each other, the ```anchor``` to the ```li``` in the the main ```navBar``` element.

one more thing is to add ```eventListener``` to the ```window``` to tell the browser when loading he should run the main navMenuBuilder function instantly. instead of just write it down to run after some lines of codes. that's to always run the main navMenuBuilder funtion even if there were error in loading the page in previous lines.

- For the section view state i use  ```getBoundingClientRect``` because i needed to get the dimensions of each block of the sections in the page.
- Using the previous function, the backgound style (using ```your-active-class``` in the css file) and the ```eventListener``` to controll the appearence of each section when viewed in the page. 

       


# The Author
[(Back to top)](#table-of-contents)

I am a new developer student who like programing so much... My name is ```Islam Mahmoud Hanafy```, at the moment of typing this file i am only a student of Web Development Professional Track powered by Udacity.com


# Footer
[(Back to top)](#table-of-contents)

<!-- Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke). -->
This project is powered by Udacity.com professional web development track and all credit goes to them in creating the foundation files to go throw this project, i only added some function to it to make it dynamic nothing more. the HTML and the CSS files were created by Udacity not by me.

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

<!-- Add the footer here -->

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 
