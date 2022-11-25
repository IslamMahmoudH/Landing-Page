<!-- this README.md file content is copied from the udacity Mentioned link in the project Rubric: 

https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md

i just changed some stuffs Modifing the related info to the project... so all the credit for this README.md file goes to it's owner, in the link above -->

<!-- I do upload a version of this project folder on Github:

the link for it:
        https://github.com/ZEXAWY/Landing-Page-Project-Udacity/tree/main/ProjectLandingPage_1

-->

<!--I also want to mention that i started this project from a while ago: but i finally decided upload it for you to review and feed me back with the required action: 
and i got inspired by a code writting by our communtiy team tutors they helped us a lot in this project:

link for the code i inspired by is:
        https://nfpdiscussions.udacity.com/t/web-webinar-recordings-november-cohort/473510
        
I hope you review this project and tell me what i am missing in here. -->

# Project Title

Landing Page Project by udacity.com

# Demo-Preview

<!-- Add a demo for your project -->

<!-- After you have written about your project, it is a good idea to have a demo/preview(**video/gif/screenshots** are good options) of your project so that people can know what to expect in your project. You could also add the demo in the previous section with the product description.

Here is a random GIF as a placeholder. -->

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 

This project is all about converting the landing page from the static version to the dynamic version using JavaScript only.

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

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

<!-- *You might have noticed the **Back to top** button(if not, please notice, it's right there!). This is a good idea because it makes your README **easy to navigate.*** 

The first one should be how to install(how to generally use your project or set-up for editing in their machine).

This should give the users a concrete idea with instructions on how they can use your project repo with all the steps.

Following this steps, **they should be able to run this in their device.**

A method I use is after completing the README, I go through the instructions from scratch and check if it is working. -->

<!-- Here is a sample instruction:

To use this project, first clone the repo on your device using the command below:

```git init```

```git clone https://github.com/navendu-pottekkat/nsfw-filter.git``` -->

To download this project feel free to clone the repo on your device using the following command:

```git init```

```git clone https://github.com/ZEXAWY/Landing-Page-Project-Udacity.git```

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
- the first thing i start building the navigation bar by defining the variables which will hold the sub element inside the main navbar menu, then building my builder function to build the navigation bar dynamically, in this case, i chosed three main gloabal variables to hold everything i will need will going on and these are:
    - ```sections``` to hold the all sections inside the page.
    - ```navbar``` to hold the subelements inside the navigation menu.
    - ```fragment``` for effeciency purpose
- The ```navMenuBuilder``` function, iterating over all the sections in the page to get every section id and section data we use to build our new created elements and link them to each others, and creating a new ```<li>``` elements to hold the anchor's ```<a>``` elements inside the navigation bar menu we will use later to navigate to the right section using the ```id``` attribute inside the ```li``` element using the ```#``` to refer the section we want to go to.
- Adding the class to each ```anchor``` element, and then adding the title to this element to appear with the name according to the section using the ``` data``` attribute we get previously.
- Adding ```eventListener``` to the ```anchor``` element to navigate smoothly. and pervent the default behavior which will jump instantly to the section.
- The final thing is to append all the element to each other, the ```anchor``` to the ```li```, the ```li``` to the ```fragment```, and the ```fragment``` to the main ```navBar``` element.

one more thing is to add ```eventListener``` to the ```window``` to tell the browser when loading he should run the main navMenuBuilder function instantly. instead of just write it down to run after some lines of codes. that's to always run the main navMenuBuilder funtion even if there were error in loading the page in previous lines.

- For the section view state i use ```IntersectionObserver``` class instead of ```getBoundingClientRect``` because i find it easier to deal with without need to assign the ```top``` pixel of the section when it appears, and when a section ```isIntersecting```we add the ```your-active-class``` if it's not not exist, and remove the class when the section ```is not intersecting```. And for that i divided the code into three main pieces:
    - the Object option: where i only need the threshold property.
    - and the callBack function to add and remove the ```your-active-class``` to the intersecting section... extra thing here is i added an ```active``` class to the element in the ```navBar``` to be highlighted according to section instersecting at the moment. 
    - The ```observer``` variable which hold the ```IntersectingObserver``` class and use it when we add another ```eventListener``` to the window while scrolling to use the ```observe``` method on the sections to get the section inView right now.

            this ```active``` class i defined in the CSS file under ```.navbar__menu .menu__link.active```.
- Final thing i add an eventListener to the window while scrolling to observe the sections, and then applying the ```intersectionObserver``` to the current section in view.


# The Author
[(Back to top)](#table-of-contents)

I am a new developer student who like programing so much... My name is ```Ahmed Mohamed Zakaria```, at the moment of typing this file i am only a student of Web Development Professional Track powered by Udacity.com


# Footer
[(Back to top)](#table-of-contents)

<!-- Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke). -->
This project is powered by Udacity.com professional web development track and all credit goes to them in creating the foundation files to go throw this project, i only added some function to it to make it dynamic nothing more. the HTML and the CSS files were created by Udacity not by me.

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

<!-- Add the footer here -->

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 
